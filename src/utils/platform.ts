import os from "os"

export function getPlatform(): string {
  const platform = os.platform();
  switch (platform) {
    case "darwin":
      return "darwin";
    case "freebsd":
      return "freebsd";
    case "linux":
      return "linux";
    case "openbsd":
      return "openbsd";
    case "win32":
      return "windows";
    default:
      throw new Error(`Unsupported operating system platform: ${platform}`);
  }
}
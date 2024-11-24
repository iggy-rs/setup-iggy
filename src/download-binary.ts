import * as core from "@actions/core";
import tc from "@actions/tool-cache";

export async function downloadFile(version: string): Promise<string> {
  const binaryUrl = `https://github.com/iggy-rs/iggy/releases/download/server-${version}/Linux-x86_64.zip`;
  core.info(`Downloading from ${binaryUrl}`);

  const pathToTarball = await tc.downloadTool(binaryUrl);
  const pathToCLI = await tc.extractTar(pathToTarball);

  return pathToCLI;
}

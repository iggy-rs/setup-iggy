import { info } from "@actions/core";
import { downloadTool, extractZip } from "@actions/tool-cache";

export async function downloadFile(version: string): Promise<string> {
  const binaryUrl = `https://github.com/iggy-rs/iggy/releases/download/server-${version}/Linux-x86_64.zip`;
  info(`Binary downloaded from ${binaryUrl}`);

  const pathToTarball = await downloadTool(binaryUrl);
  const pathToCLI = await extractZip(pathToTarball);
  return pathToCLI;
}

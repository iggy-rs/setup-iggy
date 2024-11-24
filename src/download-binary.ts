import { info } from "@actions/core";
import { downloadTool, extractZip } from "@actions/tool-cache";

export async function downloadFile(version: string): Promise<string> {
  const arch = "Linux-x86_64";

  const binaryUrl = `https://github.com/iggy-rs/iggy/releases/download/server-${version}/${arch}.zip`;
  info(`Binary downloaded from ${binaryUrl}`);

  const pathToTarball = await downloadTool(binaryUrl);
  const pathToCLI = await extractZip(pathToTarball);
  return pathToCLI + `/all_artifacts/${arch}`;
}

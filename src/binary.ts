import * as core from "@actions/core";

import { downloadFile } from "./download-binary";

export async function setupBinary(version: string) {
  core.info(`Installing iggy binary (${version})...`);

  const binaryPath = await downloadFile(version);
  core.info(`Binary path is: ${binaryPath}`);

  core.addPath(binaryPath);
  core.info(`iggy-server:${version} added to path`);

  core.setOutput("version", version);
}

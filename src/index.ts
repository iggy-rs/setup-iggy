import * as core from "@actions/core";

import { setupBinary } from "./binary";
import { uploadLogs } from "./functions/upload-artifacts";
import { startIggyServer } from "./start-server";

const DEFAULT_VERSION = "latest";

async function main() {
  let version = core.getInput("version", { required: false });
  if (version == null || version == "") {
    version = DEFAULT_VERSION;
  }
  const autoStart = core.getInput("autostart", { required: false });
  console.log(autoStart);

  try {
    core.info(`Installing iggy:${version} and adding it to GitHub Actions Path`);
    await setupBinary(version);

    if (autoStart) {
      core.info("Starting server...");
      startIggyServer();
    }

    await new Promise(r => setTimeout(r, 1000));

    throw new Error();
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }

    uploadLogs();
  }
}

main();

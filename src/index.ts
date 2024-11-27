import * as core from "@actions/core";

import { setupBinary } from "./binary";
import { startIggyServer } from "./start-server";

const DEFAULT_VERSION = "latest";

async function main() {
  let version = core.getInput("version", { required: false });
  if (version == null || version == "") {
    version = DEFAULT_VERSION;
  }

  try {
    core.info(`Installing iggy:${version} and adding it to GitHub Actions Path`);

    await setupBinary(version);

    await startIggyServer();
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

main();

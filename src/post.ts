import * as core from "@actions/core";

import { uploadLogs } from "./functions/upload-artifacts";

async function main() {
  core.info("Post processing");

  await uploadLogs();
}

main();

import * as core from "@actions/core";

import { spawn } from "child_process";

export function startIggyServer() {
  const iggy = spawn("iggy-server", [], { detached: true });
  iggy.unref();

  core.info("Starting started!");
}

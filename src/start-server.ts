import * as core from "@actions/core";

import { spawn } from "child_process";

export function startIggyServer() {
  process.env.IGGY_SYSTEM_PATH = "/tmp/setup-iggy";
  process.env.IGGY_LOGGING_PATH = "logs";

  const iggy = spawn("iggy-server", [], { detached: true, stdio: "ignore" });
  iggy.unref();

  core.info("Server started!");
}

import { spawn } from "child_process";

export async function startIggyServer() {
  const iggy = spawn("iggy-server", [], { detached: true });
  iggy.unref();
}

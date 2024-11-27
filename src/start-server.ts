import { spawn } from "child_process";

export async function startIggyServer() {
  const iggy = spawn("iggy-server", [], { detached: true });

  iggy.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  iggy.stderr.on("data", data => {
    console.error(`stderr: ${data}`);
  });

  iggy.on("close", code => {
    console.log(`child process exited with code ${code}`);
  });
}

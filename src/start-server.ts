import { spawn } from "child_process";

export async function startIggyServer() {
  const iggy = spawn("/tmp/d7db3572-78c0-499b-a881-6726ea12f684/all_artifacts/Linux-x86_64", ["1"]);

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

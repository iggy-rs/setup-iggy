import artifact from "@actions/artifact";
import * as core from "@actions/core";

export async function uploadLogs() {
  const filename = "/tmp/setup-iggy/logs/*";
  const { id, size } = await artifact.uploadArtifact("logs", [filename], process.cwd(), {
    retentionDays: 10,
  });

  core.info(`Created artifact with id: ${id} (bytes: ${size}`);
}

import artifact from "@actions/artifact";
import * as core from "@actions/core";
import fs from "node:fs";

export async function uploadLogs() {
  const files = fs.readdirSync("/tmp/setup-iggy/logs");

  await Promise.allSettled(
    files.map(async filename => {
      const { id, size } = await artifact.uploadArtifact("logs", [filename], process.cwd(), {
        retentionDays: 10,
      });

      core.info(`Created artifact with id: ${id} (bytes: ${size}`);
    }),
  );
}

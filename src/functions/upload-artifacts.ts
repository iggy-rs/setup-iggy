import artifact from "@actions/artifact";
import * as core from "@actions/core";
import fs from "node:fs";

export async function uploadLogs() {
  const path = `${process.env.GITHUB_WORKSPACE}/local_data/logs`;
  const files = fs.readdirSync(path);

  core.debug(`Files detected: ${files.join(",")}`);

  const { id, size } = await artifact.uploadArtifact(
    "logs",
    files.map(file => `${path}/${file}`),
    process.cwd(),
    {
      retentionDays: 10,
    },
  );

  core.info(`Created artifact with id: ${id} (bytes: ${size}`);
}

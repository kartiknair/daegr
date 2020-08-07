const got = require("got");
const tar = require("tar");
const { Stream } = require("stream");
const { promisify } = require("util");
const { ensureDir, existsSync } = require("fs-extra");
const {
  resolve,
  posix: { normalize: posixNormalize },
} = require("path");

async function downloadAndExtractGithubRepo({
  username,
  repo,
  path,
  branch = "master",
  directory,
}) {
  const pipeline = promisify(Stream.pipeline);

  if (!existsSync(directory)) await ensureDir(resolve(directory));

  console.log(`${username}/${repo} path: ${path} branch: ${branch}`);
  console.log(path.split("/").length);

  return pipeline(
    got.stream(
      `https://codeload.github.com/${username}/${repo}/tar.gz/${branch}`
    ),

    tar.extract(
      {
        cwd: resolve(directory),
        strip: path ? path.split("/").length + 1 : 1,
      },
      [`${repo}-${branch}${path && "/" + path}`]
    )
  );
}

module.exports = downloadAndExtractGithubRepo;

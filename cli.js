#!/usr/bin/env node

const sade = require("sade");
const downloadAndExtractGithubRepo = require("./index");

sade("daegr <repo> <path>", true)
  .version("1.0.0")
  .describe("Download & extract a GitHub repository")
  .example("gatsbyjs/gastby my-gatsby")
  .example("kartiknair/dhow .")
  .option("-b, --branch", "The branch to be used. (defaults to `master`)")
  .action(async (repo, path, options) => {
    const splitRepo = repo.split("/");

    console.log("Downloading...");

    try {
      await downloadAndExtractGithubRepo({
        username: splitRepo[0],
        repo: splitRepo[1],
        path: splitRepo.slice(2).join("/"),
        branch: options.branch,
        directory: path,
      });
      console.log("Finished downloading successfully!");
    } catch (err) {
      console.log("Download failed");
      console.error(err);
      process.exit(-1);
    }
  })
  .parse(process.argv);

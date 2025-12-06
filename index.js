#!/usr/bin/env node
/**
 * index.js
 * CLI entry. Called by git hook (prepare-commit-msg) with commit-msg-file path as first arg.
 */

import fs from "fs";
import path from "path";
import { getStagedDiff } from "./utils/getDiff.js";
import { generateCommitMessage } from "./utils/ollama.js";

async function main() {
  // Git passes the commit message file path as arg #1.
  const commitMsgFile =
    process.argv[2] || path.join(process.cwd(), ".git", "COMMIT_EDITMSG");

  const diff = getStagedDiff();
  if (!diff || !diff.trim()) {
    console.log(
      "git-smart-commit: no staged changes found. Skipping AI generation."
    );
    process.exit(0);
  }

  try {
    const msg = await generateCommitMessage(diff);

    // ensure it's a string
    const out =
      typeof msg === "string" ? msg.trim() : JSON.stringify(msg, null, 2);
    fs.writeFileSync(commitMsgFile, out + "\n");
    console.log(
      "git-smart-commit: AI-generated commit message written to",
      commitMsgFile
    );
  } catch (err) {
    console.error(
      "git-smart-commit: failed to generate commit message:",
      err.message || err
    );
    // do not block commit; exit 0 so user can commit manually
    process.exit(0);
  }
}

main();

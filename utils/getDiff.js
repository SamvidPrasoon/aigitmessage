import { execSync } from "child_process";

export function getStagedDiff() {
  try {
    const diff = execSync("git diff --staged --unified=3", {
      encoding: "utf-8",
    });
    return diff || "";
  } catch (err) {
    // If git command fails (not in a git repo), return empty string
    return "";
  }
}

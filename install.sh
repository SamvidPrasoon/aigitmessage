#!/bin/sh
# prepare-commit-msg hook: first arg is path to commit message file
# Run git-smart-commit and let it write the commit message file.
# If node command fails, we still allow commit to continue.

commit_msg_file="$1"

# Try to run globally-installed/git-linked binary (git-smart-commit)
if command -v git-smart-commit >/dev/null 2>&1; then
  git-smart-commit "$commit_msg_file" || true
else
  # Try running local node entry point (if developing inside the target repo)
  # resolve to possible path relative to repo
  if [ -f "./node_modules/.bin/git-smart-commit" ]; then
    ./node_modules/.bin/git-smart-commit "$commit_msg_file" || true
  else
    # fallback: try to run from PATH directly (if npm link used)
    node -e "console.error('git-smart-commit not found');" || true
  fi
fi

exit 0

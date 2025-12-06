export const commitPrompt = (diff) => `
You are an expert software engineer. Generate a concise, conventional-style commit message based on the staged git diff below.

Rules:
- Title: 1 short line (<= 60 characters) starting with one of: feat:, fix:, docs:, style:, refactor:, perf:, test:, chore:
- Leave one empty line after the title.
- Then a body (optional) explaining why the change was made and any important details. Wrap ~72 chars.
- Do NOT include raw code or file paths in the body.
- Output ONLY the commit message (title, blank line, body). No extra text.

Staged Diff:
${diff}
`;

//! systemPrompt
//! userPrompt
export const commitPrompt = (diff) => `
You are an expert software engineer. Based on the staged git diff below, **ONLY** output a properly formatted commit message.  
Do NOT repeat the rules, do not include the diff, do not ask questions, and do not output any extra text.

Rules:
- Title: 1 short line (<= 60 characters) starting with one of: feat:, fix:, docs:, style:, refactor:, perf:, test:, chore:
- Leave one empty line after the title.
- Body (optional): explain why the change was made and any important details. Wrap ~72 characters.
- Do NOT include raw code or file paths.
- Output ONLY the commit message (title, blank line, body).

Staged Diff:
${diff}

Commit message:
`;

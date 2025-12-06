# 🚀 git-smart-commit

### AI-powered automatic Git commit messages using **local open-source LLMs (Ollama)**

**git-smart-commit** is a lightweight developer tool that generates **clean, conventional commit messages** automatically by analyzing your staged Git diff.

It uses **open-source LLMs via Ollama** (Llama 3, Mistral, Gemma, etc.), so everything runs **locally, offline, and free** — no API keys required.

Perfect for **AI + DevTools portfolio projects**.

---

## ✨ Features

- 🧠 **AI-generated commit messages from staged diffs**
- ⚡ **Works with Ollama local models** (no API cost, no internet)
- 📝 **Enforces Conventional Commits** (`feat:`, `fix:`, `chore:`, etc.)
- 🔌 **Simple CLI tool**
- 🔒 **Does not block commits** if AI fails
- 🧩 **Small, clean, easy-to-read code**
- 🔧 **Fully open source & developer friendly**

---

## 🛠️ Installation

### **1. Clone the repo**

```bash
git clone https://github.com/yourusername/git-smart-commit.git
cd git-smart-commit
npm install
npm link
This makes the command git-smart-commit available anywhere on your system.

⚙️ Install the Git Hook (per project)

Go to any project where you want AI commit messages:
git-smart-commit install-hook
This creates:
.git/hooks/prepare-commit-msg
```
---

🚀 Usage
```bash
Make changes:

git add .
git commit

What happens under the hood:

git-smart-commit runs automatically

Reads your staged diff

Sends the diff to Ollama

Generates a clean commit message like:

feat: add validation for signup form

Added frontend validation to prevent API calls for invalid email formats.
Includes error messages and improves UX.

Writes message to .git/COMMIT_EDITMSG

Git opens your editor → edit/accept the message

Commit completes normally

If AI fails, your commit still works.
```
---

🧠 AI Model (Ollama)

Ensure Ollama is running:
```bash
ollama serve
```
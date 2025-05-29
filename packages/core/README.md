# envguard

A simple and type-safe way to manage your environment variables in Node.js and Bun projects.

- ✅ Schema validation
- 🔐 Required variables and default values
- 🧠 Generates TypeScript types
- 🛠️ Built-in CLI for workflows

---

## 📦 Installation

```bash
bun add envguard
# or
npm install envguard
```

🛠️ Usage

1. Create a schema file

```
// env.ts
import { defineEnv } from 'envguard'

export const env = defineEnv({
  PORT: {
    type: 'number',
    default: 3000,
  },
  DB_URL: {
    type: 'string',
    required: true,
  },
})
```

2. Load and use environment variables

```
console.log(env.PORT)    // 3000 (or from .env)
console.log(env.DB_URL)  // must be present
```

## 💻 Contribute

PRs and feedback welcome!
This package is part of a monorepo – see the GitHub repo for full source and structure.

---

Let me know if you want me to tailor this to the CLI package specifically or link it with examples in Bun, Next.js, or other frameworks.

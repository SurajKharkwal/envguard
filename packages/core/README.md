# envguard

A simple and type-safe way to manage your environment variables in Node.js and Bun projects.

- Schema validation
- Required variables and default values

---

## 📦 Installation

```bash
bun add @flyinghawk/envguard zod
# or
npm install @flyinghawk/envguard zod
```

🛠️ Usage

1. Create a schema file

```ts
// env.ts
import { loadDotEnv } from "@flyinghawk/envguard";

const envSchema = z.object({
  API_KEY: z.string(),
  port: z.coerce.number(), // will convert "4000" to 4000
});

// Pass the schema and optionally the path to loadEnv
const env = loadDotEnv(envSchema); // or loadDotEnv(schema, "../../.env")
// returns the env else throws the error
```

2. Load and use environment variables

```
console.log(env.PORT)    // 3000 (or from .env)
console.log(env.DB_URL)  // must be present
```

## 💻 Contribute

Looking for help to improve and maintain this project. PRs welcome!

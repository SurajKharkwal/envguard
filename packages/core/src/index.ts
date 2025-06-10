import fs from "fs";
import path from "path";
import { z, ZodType } from "zod/v4";

// Line matching for dotenv parsing
const LINE =
  /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;

function parseEnvFile(src: string): Record<string, string> {
  const obj: Record<string, string> = {};
  const lines = src.replace(/\r\n?/gm, "\n");
  let match: RegExpExecArray | null;
  while ((match = LINE.exec(lines)) !== null) {
    const key = match[1];
    let value = match[2] || "";

    value = value.trim();
    const maybeQuote = value[0];
    value = value.replace(/^(['"`])([\s\S]*)\1$/gm, "$2");

    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, "\n").replace(/\\r/g, "\r");
    }

    obj[key] = value;
  }
  return obj;
}

export function loadDotEnv<T extends ZodType<any, any>>(
  schema: T,
  envPath = ".env",
): z.infer<T> {
  const resolved = path.resolve(process.cwd(), envPath);
  if (!fs.existsSync(resolved)) return schema.parse({});

  const content = fs.readFileSync(resolved, "utf-8");
  const parsed = parseEnvFile(content);

  const validated = schema.safeParse(parsed);
  if (!validated.success) {
    console.error("❌ Invalid environment variables:");
    console.error(validated.error.message);
    throw new Error("Environment validation failed");
  }

  // Assign to process.env
  const data = validated.data;
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string" && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }

  return data;
}

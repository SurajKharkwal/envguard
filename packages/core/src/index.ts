import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import { ZodSchema, infer as zInfer } from "zod";

/** Parse .env file contents into key/value pairs. */
export function parseEnvFile(file: string): Record<string, string> {
  const env: Record<string, string> = {};
  let currentKey: string | null = null;

  for (const rawLine of file.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    if (currentKey && env[currentKey]?.endsWith("\\") && !line.includes("=")) {
      env[currentKey] = env[currentKey].slice(0, -1) + "\n" + line;
      continue;
    }

    const eq = line.indexOf("=");
    if (eq === -1) continue;

    currentKey = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();

    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }

    env[currentKey] = val;
  }

  return env;
}

export interface LoadEnvOptions<T extends ZodSchema<any>> {
  paths?: string[];
  schema: T;
  dryRun?: boolean;
}

export function loadEnv<T extends ZodSchema<any>>(
  opts: LoadEnvOptions<T>,
): zInfer<T> {
  const paths = opts.paths?.length ? opts.paths : [".env"];
  const collected: Record<string, string> = {};

  for (const path of paths) {
    const abs = resolve(process.cwd(), path);
    if (!existsSync(abs)) continue;

    const parsed = parseEnvFile(readFileSync(abs, "utf8"));
    Object.assign(collected, parsed);
  }

  const result = opts.schema.safeParse(collected);

  if (!result.success) {
    console.error("❌ Invalid environment variables:");
    for (const issue of result.error.errors) {
      console.error(`• ${issue.path.join(".")}: ${issue.message}`);
    }
    throw result.error;
  }

  if (!opts.dryRun) {
    for (const [k, v] of Object.entries(result.data)) {
      process.env[k] ??= String(v);
    }
  }

  return result.data;
}

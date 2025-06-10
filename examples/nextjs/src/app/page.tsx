import { loadDotEnv } from "@flyinghawk/envguard";
import { z } from "zod/v4";

export default function Home() {
  // Define the schema properly with z.object
  const envSchema = z.object({
    API_KEY: z.string(),
    port: z.coerce.number(), // will convert "4000" to 4000
  });

  // Pass the schema and optionally the path to loadEnv
  const env = loadDotEnv(envSchema); // or loadDotEnv(schema, "../../.env")

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      I know it is stupid but , you got the idea , right?
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </div>
  );
}

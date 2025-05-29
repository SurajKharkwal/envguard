import { loadDotEnv } from "envgaurd";
import { z, ZodSchema } from "zod";

export default function Home() {
  // Define the schema properly with z.object
  const schema: ZodSchema<{ API_KEY: string }> = z.object({
    API_KEY: z.string(),
  });

  // Pass the schema and optionally the path to loadEnv
  const env = loadDotEnv(schema); // or loadDotEnv(schema, "../../.env")

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      I know it is stupid but , you got the idea , right?
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </div>
  );
}

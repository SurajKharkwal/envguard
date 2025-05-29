import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const data = `import { z } from 'zod'
import { loadDotEnv } from 'envguard'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test'])
})

export const env = loadDotEnv(envSchema)

console.log(env.DATABASE_URL)
console.log(env.PORT)
console.log(env.API_KEY)`;

export default function ConfigCard() {
  const [copied, setCopied] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <Card className="bg-gray-900 text-white overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <span className="text-sm text-gray-400">config.ts</span>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
            onClick={() => handleCopy("npm install envguard zod")}
          >
            {copied ? (
              <CheckIcon
                className="w-5 h-5 text-green-400 animate-scale-in"
                aria-hidden="true"
              />
            ) : (
              "Copy"
            )}
          </Button>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm leading-relaxed whitespace-pre-wrap">
            <code>{data}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}

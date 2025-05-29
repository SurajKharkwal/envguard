import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export default function NpmCard() {
  const [copied, setCopied] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // tick disappears after 1.5s
    });
  }

  return (
    <Card className="bg-gray-900 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">Terminal</span>
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
        <code className="text-green-400 text-lg">
          npm install @flyinghawk/envguard zod
        </code>
      </CardContent>
    </Card>
  );
}

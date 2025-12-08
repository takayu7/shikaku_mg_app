"use client";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            資格一覧
          </h1>
          <Flex direction="column" gap="2">
            <Text>Helloss from Radix Themes :)</Text>
            <Button>go</Button>
          </Flex>
        </div>
      </main>
    </div>
  );
}
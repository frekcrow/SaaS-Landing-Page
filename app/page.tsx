import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-col items-center justify-center py-32 px-16 text-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to the Premium Setup
        </h1>
        <p className="text-xl text-zinc-400 max-w-lg">
          This is a test of the HeroUI and Next.js App Router integration with a deep dark theme and solid colors.
        </p>
        <Button color="primary" variant="solid" size="lg">
          Get Started
        </Button>
      </main>
    </div>
  );
}

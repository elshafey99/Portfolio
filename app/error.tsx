"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { buttonPrimary } from "@/components/ui/styles";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-6 text-center lg:min-h-screen">
      <h1 className="font-outfit text-3xl font-bold text-white sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-neutral-400">
        An unexpected error occurred while loading this page. Please try again.
      </p>
      <button type="button" onClick={() => reset()} className={`mt-8 ${buttonPrimary}`}>
        <RotateCcw className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}

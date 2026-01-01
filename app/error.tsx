"use client";

import { useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-md text-center space-y-6">
        <h2 className="text-3xl font-bold text-primary">
          Something went wrong!
        </h2>
        <p className="text-muted-foreground">
          We apologize for the inconvenience. An error occurred while loading
          this page.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

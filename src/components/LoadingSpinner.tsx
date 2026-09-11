import { LoaderCircle } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="bg-paper mx-auto flex min-h-screen max-w-md items-center justify-center">
      <LoaderCircle
        aria-label="Loading"
        className="text-ink/50 animate-spin"
        size={40}
        strokeWidth={2}
      />
    </div>
  );
}

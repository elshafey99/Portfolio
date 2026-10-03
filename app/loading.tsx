export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[calc(100svh-4rem)] items-center justify-center lg:min-h-screen"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-primary-light" />
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Not Found
      </h2>
      <p className="text-lg text-slate-400 mb-8">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-slate-900 rounded-xl hover:bg-primary/90 transition-colors font-bold"
      >
        Return Home
      </Link>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonPrimary } from "@/components/ui/styles";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-6 text-center lg:min-h-screen">
      <p className="bg-gradient-to-b from-white/20 to-white/0 bg-clip-text font-outfit text-[8rem] font-bold leading-none text-transparent sm:text-[10rem]">
        404
      </p>
      <h1 className="mt-2 font-outfit text-3xl font-bold text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-neutral-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className={`group mt-8 ${buttonPrimary}`}>
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back to home
      </Link>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <>
      <div
        id="home-hero-bg"
        className="fixed inset-0 -z-10 pointer-events-none"
      >
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          priority
          sizes="100vw"
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
        />
      </div>

      <main className="mt-24 relative w-full w-desktop-lock min-h-[100lvh]">
        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Welcome to paradise.
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </main>
    </>
  );
}

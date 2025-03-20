import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-[32px]">
        <Image
          className=""
          src="/bcnPHlogo.png"
          alt="BCN logo"
          width={400}
          height={400}
          priority
        />
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          ENGAGE
        </Link>
      </main>
    </div>
  );
}

export default Home;

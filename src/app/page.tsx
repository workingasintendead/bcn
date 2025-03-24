import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Landing() {
  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-[32px]">
        <Link href="/gateway">
          <Image
            src="/bcnPHlogo.png"
            alt="BCN Logo"
            width={400}
            height={400}
            priority
            className="object-contain transition-all duration-300 hover:opacity-70 cursor-pointer"
          />
        </Link>
      </main>
    </div>
  );
}

export default Landing;

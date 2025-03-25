import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';

function Archive() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center overflow-y-auto pt-15">
        <div className="flex justify-center items-center mb-16">
          <div className="relative w-[80vw] h-auto overflow-hidden group shadow-[5px_8px_20px_0px_rgba(255,255,255,0.4)]">
            <div className="w-full h-full transition-all duration-2000 ease-in-out group-hover:brightness-45">
              <Image
                src="/Edgewater1.png"
                alt="Edgewater Landscaping"
                width={1270}
                height={720}
                className="object-cover w-full h-full grayscale transition-all duration-2000 ease-in-out group-hover:grayscale-0"
              />
            </div>
            <Link href="https://projectmk.vercel.app/portfolio" target="_blank">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <p className="text-white text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-2000 text-shadow">
                  Edgewater Landscaping
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Archive;

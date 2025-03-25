import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="shadow-md h-16">
      <div className="container mx-auto flex justify-between items-center max-w-[900px] px-4">
        <Link href="/gateway">
          <Image
            src="/bcnPHlogo.png"
            alt="BCN Logo"
            width={100}
            height={100}
            className="object-contain transition-all duration-300 hover:opacity-70"
          />
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link href="/archive" className="text-white hover:text-gray-400">
              Archive
            </Link>
          </li>
          <span> / </span>
          <li>
            <Link href="/mission" className="text-white hover:text-gray-400">
              Mission
            </Link>
          </li>
          <span> / </span>
          <li>
            <Link href="/connect" className="text-white hover:text-gray-400">
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

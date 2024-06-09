import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="fixed flex justify-center items-center w-full h-14 space-x-4 bg-blue-700/5 backdrop-blur-3xl rounded-b-xl z-50">
      <Link
        href="/about"
        className="hover:text-blue-500 cursor-pointer active:scale-95 active:text-blue-400 transition-all duration-200 ease-in-out"
      >
        About
      </Link>
      <Link
        href="/home/profile"
        className="hover:text-blue-500 cursor-pointer active:scale-95 active:text-blue-400 transition-all duration-200 ease-in-out"
      >
        Profile
      </Link>
      <Link
        href="/home"
        className="hover:text-blue-500 cursor-pointer active:scale-95 active:text-blue-400 transition-all duration-200 ease-in-out"
      >
        Home
      </Link>
    </div>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full shadow-md bg-white z-40">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-y-0 space-y-4 px-6 py-2">
        <div className="flex" >
          <Link href="/">
            <Image
              src="/assets/Navlogo.jpg"
              alt="NavLogo"
              width={60}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>
          <div className="my-auto font-bold text-[20px] -pl-6 -pt-3 " ><h2>DOC<span className="text-cyan-500" >APPOINT</span> </h2></div>
        </div>
        <ul className="flex items-center gap-6 font-medium text-gray-700 ">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/all" className="hover:text-blue-600 transition">
              All Appointment
            </Link>
          </li>

          <li>
            <Link href="/allAppoint" className="hover:text-blue-600 transition">
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="flex gap-7">
          <Link
            href="/login"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
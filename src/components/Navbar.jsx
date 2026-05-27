"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    // জাস্ট পুরো নেববারটাকে স্ক্রিনের মাঝখানে রাখার জন্য w-full mx-auto দেওয়া হয়েছে
    <div className="w-full shadow-md bg-white z-40">
      <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-y-0 space-y-4 px-6 py-2">
        <div>
          <Link href="/">
            <Image
              src="/assets/Navlogo.png"
              alt="NavLogo"
              width={150}
              height={150}
              // এখানে h-auto এবং w-auto ক্লাসের কারণে টার্মিনালের ওই বিরক্তিকর ওয়ার্নিংটি আর আসবে না
              className="h-auto w-auto" 
              priority
            />
          </Link>
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
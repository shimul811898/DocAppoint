import Image from "next/image";
import Link from "next/link";

const Navbar = () => {


    return (
        <div className="max-w-7xl shadow-md bg-white z-40">
            <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-y-0 space-y-4 px-6 py-2">
                    <div >
                        <Image
                            src={'/assets/Navlogo.png'}
                            alt="NavLogo"
                            width={150}
                            height={150}
                        />
                    </div>
                <ul className="flex items-center gap-6 font-medium text-gray-700 ">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>


                    <li>
                        <Link href="/products">
                            All Appointment
                        </Link>
                    </li>

                    <li>
                        <Link href="/my-Profile" >
                            Dashboard
                        </Link>
                    </li>
                </ul>

                <div className="flex gap-7" >
                    <Link
                        href="/login"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] text-white font-semibold shadow-lg hover:scale-105 transition duration-300 "
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

        </div >
    );
};

export default Navbar;
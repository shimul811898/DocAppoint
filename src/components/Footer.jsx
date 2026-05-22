import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#071B3B] to-[#0D2D62] text-white rounded-t-[40px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16">
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
         
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-extrabold">
                Doc<span className="text-[#18C7C9]">Appoint</span>
              </h2>
            </div>

            <p className="text-gray-300 leading-7 text-sm">
              We provide trusted healthcare services with experienced doctors
              and instant appointment booking facilities for everyone.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#18C7C9] transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#18C7C9] transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#18C7C9] transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitter />
              </Link>

              <Link
                href="/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#18C7C9] transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

        
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#18C7C9] transition">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#18C7C9] transition"
                >
                  Doctors
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#18C7C9] transition"
                >
                  Appointments
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-[#18C7C9] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>

            <ul className="space-y-4 text-gray-300">
              <li>Online Appointment</li>
              <li>Emergency Service</li>
              <li>Qualified Doctors</li>
              <li>24/7 Support</li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>

            <p className="text-gray-300 text-sm leading-6 mb-5">
              Subscribe to get healthcare tips and appointment updates.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/10 focus:outline-none focus:border-[#18C7C9] text-white placeholder:text-gray-400"
              />

              <button
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] font-semibold hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

     
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 DocAppoint. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#18C7C9] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#18C7C9] transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
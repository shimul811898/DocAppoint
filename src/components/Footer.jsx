import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl relative bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 rounded-t-[48px] overflow-hidden border-t border-slate-200/60 shadow-[0_-12px_40px_rgba(0,0,0,0.02)]">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-200/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Doc<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Appoint</span>
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed text-sm font-medium max-w-sm">
              We provide trusted healthcare services with experienced doctors
              and instant appointment booking facilities for everyone.
            </p>

            <div className="flex items-center gap-3.5 pt-2">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white text-slate-600 border border-slate-200/80 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_20px_rgba(30,99,255,0.2)] flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-6px] left-0 w-8 h-1 bg-cyan-500 rounded-full" />
            </h3>

            <ul className="space-y-4 text-slate-500 font-semibold text-sm">
              {["Home", "Doctors", "Appointments", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
              Services
              <span className="absolute bottom-[-6px] left-0 w-8 h-1 bg-cyan-500 rounded-full" />
            </h3>

            <ul className="space-y-4 text-slate-500 font-semibold text-sm">
              {[
                "Online Appointment",
                "Emergency Service",
                "Qualified Doctors",
                "24/7 Support"
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-2 group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-200" />
                  <span className="group-hover:text-slate-800 transition-colors duration-200">{service}</span>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-[-6px] left-0 w-8 h-1 bg-cyan-500 rounded-full" />
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed mb-5 font-medium">
              Subscribe to get healthcare tips and appointment updates.
            </p>

            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-slate-800 placeholder:text-slate-400 font-medium text-sm transition-all shadow-sm"
                />
              </div>

              <button
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-[0_4px_15px_rgba(30,99,255,0.15)] hover:shadow-[0_8px_25px_rgba(30,99,255,0.25)] hover:opacity-95 active:scale-[0.98] transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© 2026 DocAppoint. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-slate-600 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
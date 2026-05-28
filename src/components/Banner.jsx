import Link from "next/link";
import Image from "next/image";
import { FaStar, FaArrowRight, FaCheckSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative max-w-7xl mx-auto mb-24 overflow-hidden rounded-[38px] bg-white shadow-[0_32px_120px_rgba(0,0,0,0.06)] border border-slate-100/80">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-400/20 blur-[130px] rounded-full animate-pulse duration-[8000ms]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 blur-[130px] rounded-full animate-pulse duration-[6000ms]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        
        <div className="space-y-8 z-10">
          
          <div className="flex"> 
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100/80 bg-blue-50/50 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-[0_4px_20px_rgba(30,99,255,0.06)] transition-all hover:bg-blue-50"> 
              <FaCheckSquare className="text-cyan-500 text-base" /> 
              The Best Health Care Services 
            </span> 
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
            Get Expert Care <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
              Anytime, Anywhere
            </span>
          </h1>

          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
            Book appointments with top doctors instantly. Fast, reliable, and 
            modern healthcare experience right at your fingertips.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Link
              href="/bookappointment"
              className="group inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-[0_10px_30px_rgba(30,99,255,0.3)] hover:shadow-[0_15px_40px_rgba(30,99,255,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              Book Appointment
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>

            <div className="flex items-center gap-5 px-6 py-3.5 rounded-2xl bg-slate-50/80 backdrop-blur-sm border border-slate-100/80 shadow-sm">
              <div className="flex flex-col gap-1">
                <div className="flex text-amber-400 gap-0.5 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="drop-shadow-[0_2px_4px_rgba(251,191,36,0.2)]" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  5.0 Rating (1,900+ reviews)
                </span>
              </div>

              <div className="w-px h-10 bg-slate-200" />

              <div>
                <p className="text-2xl font-black text-slate-900 tracking-tight">99%</p>
                <p className="text-xs font-semibold text-slate-500">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center lg:mt-0 mt-8">
          

          <div className="absolute w-[440px] h-[440px] bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 blur-3xl rounded-[50px]" />

          
          <div className="relative w-full max-w-[420px] h-[480px] sm:h-[520px] rounded-[38px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.12)] border-4 border-white bg-gradient-to-b from-slate-50 to-slate-100/50 group">
            <Image
              src="/assets/Doctor.jpg"
              alt="Doctor Banner"
              fill
              priority
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="absolute -left-6 bottom-12 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/60 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <p className="text-lg font-black text-slate-900">24/7 Service</p>
            </div>
            <span className="text-xs font-semibold text-slate-500 ml-5 block mt-0.5">
              Always Available
            </span>
          </div>

          <div className="absolute -right-6 top-12 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/60 hover:-translate-y-1 transition-transform duration-300">
            <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">100+</p>
            <span className="text-xs font-semibold text-slate-500 block mt-0.5">
              Expert Doctors
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
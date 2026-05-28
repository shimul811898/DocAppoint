import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaStar, FaArrowRight, FaCheckSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative max-w-7xl mx-auto  mb-24 overflow-hidden rounded-[32px] bg-white shadow-2xl border border-slate-100">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-200/30 blur-[120px] rounded-full" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 lg:px-14 py-16">
        <div className="space-y-7">

          <div> <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-md px-5 py-2 text-sm sm:text-base font-semibold text-[#1E63FF] shadow-[0_4px_15px_rgba(30,99,255,0.04)]"> <FaCheckSquare className="text-[#18C7C9]" /> The Best Health Care Services </span> </div>


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Get Expert Care <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Anytime, Anywhere
            </span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Book appointments with top doctors instantly. Fast, reliable and
            modern healthcare experience at your fingertips.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              href="/bookappointment"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
            >
              Book Appointment
              <FaArrowRight />
            </Link>

            <div className="flex items-center gap-4 px-5 py-3 rounded-xl bg-slate-50 border border-slate-100">

              <div className="flex flex-col">
                <div className="flex text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-xs text-slate-500">
                  5.0 Rating (1900+ reviews)
                </span>
              </div>

              <div className="w-px h-10 bg-slate-200" />

              <div>
                <p className="text-xl font-bold text-slate-900">99%</p>
                <p className="text-xs text-slate-500">Satisfaction</p>
              </div>

            </div>

          </div>
        </div>
        <div className="relative flex justify-center items-center">

          <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-blue-300/20 to-cyan-300/20 blur-3xl rounded-[40px]" />

          <div className="relative w-full max-w-[430px] h-[500px] rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-white/50 bg-gradient-to-b from-white to-slate-50 backdrop-blur-xl">

            <Image
              src="/assets/doctor.png"
              alt="Doctor Banner"
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />

          </div>

          <div className="absolute -left-8 bottom-10 bg-white/90 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl border border-slate-100">
            <p className="text-lg font-bold text-slate-900">24/7 Service</p>
            <span className="text-sm text-slate-500">
              Always Available
            </span>
          </div>

          <div className="absolute -right-8 top-10 bg-white/90 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl border border-slate-100">
            <p className="text-lg font-bold text-slate-900">100+</p>
            <span className="text-sm text-slate-500">
              Expert Doctors
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
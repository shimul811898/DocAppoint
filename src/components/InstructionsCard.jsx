import {
  FaUserMd,
  FaCalendarCheck,
  FaCreditCard,
  FaClock,
  FaFileMedical,
  FaHeadset
} from "react-icons/fa";

const Instructions = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
          Patient Guide
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          How to Get Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Expert Care
          </span>
        </h2>
        <p className="text-slate-500 font-medium text-base">
          Follow these 6 simple steps to easily manage and complete your doctor appointment booking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="group relative bg-gradient-to-br from-blue-50/60 to-white border border-blue-100/50 rounded-[32px] p-8 shadow-[0_16px_40px_rgba(30,99,255,0.02)] hover:shadow-[0_24px_60px_rgba(30,99,255,0.08)] hover:from-blue-50/80 hover:to-white hover:-translate-y-2 transition-all duration-500 ease-out">
          <span className="absolute top-6 right-8 text-5xl font-black text-blue-200/40 group-hover:text-blue-500/10 transition-colors select-none">
            01
          </span>
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <FaUserMd className="w-7 h-7 text-blue-600" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              Find Specialist
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Browse through our verified network of certified doctors and top-rated health specialists.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] rounded-full bg-blue-600 group-hover:w-1/3 transition-all duration-300" />
        </div>

        <div className="group relative bg-gradient-to-br from-cyan-50/60 to-white border border-cyan-100/50 rounded-[32px] p-8 shadow-[0_16px_40px_rgba(6,182,212,0.02)] hover:shadow-[0_24px_60px_rgba(6,182,212,0.08)] hover:from-cyan-50/80 hover:to-white hover:-translate-y-2 transition-all duration-500 ease-out">
          <span className="absolute top-6 right-8 text-5xl font-black text-cyan-200/40 group-hover:text-cyan-500/10 transition-colors select-none">
            02
          </span>
          <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <FaCalendarCheck className="w-7 h-7 text-cyan-500" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-500 transition-colors">
              Select Schedule
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Choose your preferred date and available real-time slot that best matches your daily routine.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] rounded-full bg-cyan-500 group-hover:w-1/3 transition-all duration-300" />
        </div>

        <div className="group relative bg-gradient-to-br from-indigo-50/60 to-white border border-indigo-100/50 rounded-[32px] p-8 shadow-[0_16px_40px_rgba(99,102,241,0.02)] hover:shadow-[0_24px_60px_rgba(99,102,241,0.08)] hover:from-indigo-50/80 hover:to-white hover:-translate-y-2 transition-all duration-500 ease-out">
          <span className="absolute top-6 right-8 text-5xl font-black text-indigo-200/40 group-hover:text-indigo-500/10 transition-colors select-none">
            03
          </span>
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <FaFileMedical className="w-7 h-7 text-indigo-500" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-500 transition-colors">
              Provide Details
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Fill in basic patient details, symptoms, and previous medical history for better diagnosis.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] rounded-full bg-indigo-500 group-hover:w-1/3 transition-all duration-300" />
        </div>

        <div className="group relative bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-100/50 rounded-[32px] p-8 shadow-[0_16px_40px_rgba(16,185,129,0.02)] hover:shadow-[0_24px_60px_rgba(16,185,129,0.08)] hover:from-emerald-50/80 hover:to-white hover:-translate-y-2 transition-all duration-500 ease-out">
          <span className="absolute top-6 right-8 text-5xl font-black text-emerald-200/40 group-hover:text-emerald-500/10 transition-colors select-none">
            04
          </span>
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <FaCreditCard className="w-7 h-7 text-emerald-500" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-500 transition-colors">
              Secure Payment
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Pay securely via digital wallet, cards, or opt for easy cash payment at the chamber counter.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] rounded-full bg-emerald-500 group-hover:w-1/3 transition-all duration-300" />
        </div>

        <div className="group relative bg-gradient-to-br from-amber-50/60 to-white border border-amber-100/50 rounded-[32px] p-8 shadow-[0_16px_40px_rgba(245,158,11,0.02)] hover:shadow-[0_24px_60px_rgba(245,158,11,0.08)] hover:from-amber-50/80 hover:to-white hover:-translate-y-2 transition-all duration-500 ease-out">
          <span className="absolute top-6 right-8 text-5xl font-black text-amber-200/40 group-hover:text-amber-500/10 transition-colors select-none">
            05
          </span>
          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <FaClock className="w-7 h-7 text-amber-500" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-amber-500 transition-colors">
              Instant Ticket
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Receive an instant confirmation message and digital serial card via SMS or active email address.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] rounded-full bg-amber-500 group-hover:w-1/3 transition-all duration-300" />
        </div>


        <div className="group relative bg-gradient-to-br from-purple-50/60 to-white border border-purple-100/50 rounded-[32px] p-8 shadow-[0_16px_40px_rgba(139,92,246,0.02)] hover:shadow-[0_24px_60px_rgba(139,92,246,0.08)] hover:from-purple-50/80 hover:to-white hover:-translate-y-2 transition-all duration-500 ease-out">
          <span className="absolute top-6 right-8 text-5xl font-black text-purple-200/40 group-hover:text-purple-500/10 transition-colors select-none">
            06
          </span>
          <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <FaHeadset className="w-7 h-7 text-purple-500" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-purple-500 transition-colors">
              24/7 Helpline
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              Need to reschedule or cancel? Connect with our dedicated support anytime for instant help.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] rounded-full bg-purple-500 group-hover:w-1/3 transition-all duration-300" />
        </div>

      </div>
    </section>
  );
};

export default Instructions;
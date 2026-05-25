"use client";

import { FaCalendarDays, FaUserDoctor, FaMoneyBillWave, FaClock } from "react-icons/fa6";

const AppointmentCard = ({ allAppoint }) => {
  const {
    imageUrl,
    fee,
    doctorName,
    department,
    specialization,
    experience,
    appointmentDate,
    description,
  } = allAppoint || {};

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          alt={doctorName}
          src={imageUrl}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
          {department}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="flex-grow">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-blue-600">
            <FaUserDoctor className="text-xs" />
            <span>{specialization}</span>
          </div>

          <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
            {doctorName}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <FaClock className="text-xs text-slate-400" />
            <span>{experience} Experience</span>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-sm font-semibold text-slate-600">
            <FaCalendarDays className="text-sm text-blue-500" />
            <span>
              {new Date(appointmentDate).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <p className="mt-4 line-clamp-2 text-xs italic leading-relaxed text-slate-500">
            "{description}"
          </p>
        </div>

       
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Fee</span>
            <span className="flex items-center gap-0.5 text-lg font-bold text-emerald-600">
              <FaMoneyBillWave className="text-sm" />
              <span>${fee}</span>
            </span>
          </div>

          <button className="rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-100">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
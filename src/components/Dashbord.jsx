"use client";

import {
  FaCalendarDays,
  FaUserDoctor,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa6";

const DashBoard = ({ allAppoint }) => {
  const {
    _id,
    imageUrl,
    fee,
    doctorName,
    department,
    specialization,
    experience,
    appointmentDate,
    description,
  } = allAppoint;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl">

      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={doctorName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {department}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
            <FaUserDoctor />
            <span>{specialization}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {doctorName}
          </h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <FaClock className="text-xs" />
            <span>{experience} Experience</span>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-600 border border-slate-100">
            <FaCalendarDays className="text-blue-500" />

            <span>
              {new Date(appointmentDate).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <p className="mt-4 line-clamp-2 text-sm italic text-slate-500">
            "{description}"
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Fee
            </p>

            <div className="mt-1 flex items-center gap-1 text-lg font-bold text-emerald-600">
              <FaMoneyBillWave />
              <span>${fee}</span>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
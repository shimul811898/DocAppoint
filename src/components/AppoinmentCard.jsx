"use client";

import Link from "next/link";
import {
  FaCalendarDays,
  FaUserDoctor,
  FaClock,
  FaStar,
} from "react-icons/fa6";

const AppointmentCard = ({ allAppoint }) => {
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
    rating,
  } = allAppoint;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={doctorName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {department}
        </div>
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold text-amber-500 shadow-md">
          <FaStar />
          <span>{rating}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">

        <div className="flex-1">

          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <FaUserDoctor />
            <span>{specialization}</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {doctorName}
          </h2>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <FaClock className="text-blue-500" />
            <span>{experience} Experience</span>
          </div>
          <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaCalendarDays className="text-blue-500" />

              <span>
                {new Date(appointmentDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

          </div>

          <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-slate-500">
            {description}
          </p>
        </div>


        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div>
            <div className="mt-1 flex items-center gap-2 text-2xl font-bold text-emerald-600">
              <span>${fee}</span>
            </div>
          </div>
          <Link href={`/allAppoint/${_id}`}>
            <button className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
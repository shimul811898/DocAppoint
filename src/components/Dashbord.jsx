"use client";

import { FaUserEdit, FaTrash } from "react-icons/fa";

const DashBoard = ({ allAppoint }) => {
  const {
    name, email, doctorName, gender, phone, date, time
  } = allAppoint;

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl border border-slate-100 shadow-md p-6 hover:shadow-xl transition-all duration-300">


      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-800">
          {name}
        </h2>
        <p className="text-sm text-slate-400">Appointment Details</p>
      </div>


      <div className="space-y-2 text-sm text-slate-600">
        <p><span className="font-semibold">Email:</span>{email} </p>
        <p><span className="font-semibold">Doctor:</span> {doctorName}</p>
        <p><span className="font-semibold">Gender:</span> {gender}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Date:</span> {date}</p>
        <p><span className="font-semibold">Time:</span> {time}</p>
      </div>


      <div className="flex items-center gap-3 mt-6">

        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
          <FaUserEdit />
          Edit
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition">
          <FaTrash />
          Delete
        </button>

      </div>
    </div>
  );
};

export default DashBoard;
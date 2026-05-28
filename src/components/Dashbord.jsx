"use client";

import {  FaTrash } from "react-icons/fa";
import { UpdateUserModal } from "./EditModal";

const DashBoard = ({ allAppoint }) => {
  const {
    patientName , email, doctorName, gender, phone, date, time, age
  } = allAppoint;

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl border border-slate-100 shadow-md p-6 hover:shadow-xl transition-all duration-300">


      <div className="mb-4">
        <p className="text-sm text-slate-400">Appointment Details</p>
      </div>


      <div className="space-y-2 text-sm text-slate-600">
        <p className="font-bold" ><span>patientName:</span>{patientName} </p>
        <p><span className="font-semibold">Email:</span>{email}</p>
        <p><span className="font-semibold">Doctor:</span> {doctorName}</p>
        <p><span className="font-semibold">Gender:</span> {gender}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Date:</span> {date}</p>
        <p><span className="font-semibold">Time:</span> {time}</p>
         <p><span className="font-semibold">Age:</span>{age} </p>
      </div>


      <div className="flex items-center gap-3 mt-6">

        <div >
          
             <UpdateUserModal allAppoint={allAppoint} />
         
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition">
          <FaTrash />
          Delete
        </button>

      </div>
    </div>
  );
};

export default DashBoard;
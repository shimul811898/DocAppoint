import {
    FaUserDoctor,
    FaStethoscope,
    FaBriefcase,
    FaCalendarDays,
    FaMoneyBillWave,
    FaClock,
} from "react-icons/fa6";
import Link from "next/link";


const AllAppointDetailspage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5000/bookappointment/${id}`)
    const bookappointments = await res.json();

    const {
        imageUrl,
        fee,
        doctorName,
        department,
        specialization,
        experience,
        appointmentDate,
        description,
        rating,
        availableDate,
        availableTime,
    } = bookappointments;

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const getFormattedTimeSlot = (timeString) => {
        if (!timeString) return { start: "N/A", end: "N/A" };

       
            const [time, modifier] = timeString.split(" ");
            let [hours, minutes] = time.split(":").map(Number);

            if (modifier === "PM" && hours < 12) hours += 12;
            if (modifier === "AM" && hours === 12) hours = 0;

            const startDate = new Date();
            startDate.setHours(hours, minutes, 0, 0);

            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

            const options = { hour: '2-digit', minute: '2-digit', hour12: true };

            return {
                start: startDate.toLocaleTimeString('en-US', options),
                end: endDate.toLocaleTimeString('en-US', options)
            };
       
    };

    const { start: startTime, end: endTime } = getFormattedTimeSlot(availableTime);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-2xl rounded-[40px] overflow-hidden border border-slate-100">

                    <div className="relative group overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={doctorName}
                            className="w-full h-full object-cover lg:h-[700px] transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="bg-cyan-500 inline-block px-4 py-2 rounded-full text-sm font-semibold shadow-lg mb-4">
                                {department}
                            </p>

                            <h1 className="text-4xl md:text-5xl font-black">
                                Dr. {doctorName}
                            </h1>

                            <p className="text-lg mt-2 text-slate-200">
                                {specialization}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="space-y-8">

                            <div>
                                <h2 className="text-4xl font-black text-slate-800 leading-tight">
                                    Appointment Details
                                </h2>

                                <p className="text-slate-500 mt-3 text-lg">
                                    Professional healthcare consultation with experienced doctor.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 hover:shadow-lg transition">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-cyan-100 p-4 rounded-2xl text-cyan-600 text-2xl">
                                            <FaUserDoctor />
                                        </div>

                                        <div>
                                            <p className="text-slate-500 text-sm">Doctor</p>
                                            <h3 className="font-bold text-slate-800">
                                                Dr. {doctorName}
                                            </h3>
                                        </div>
                                    </div>
                                </div>


                                <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 hover:shadow-lg transition">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-purple-100 p-4 rounded-2xl text-purple-600 text-2xl">
                                            <FaStethoscope />
                                        </div>

                                        <div>
                                            <p className="text-slate-500 text-sm">Specialization</p>
                                            <h3 className="font-bold text-slate-800">
                                                {specialization}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 hover:shadow-lg transition">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 text-2xl">
                                            <FaBriefcase />
                                        </div>

                                        <div>
                                            <p className="text-slate-500 text-sm">Experience</p>
                                            <h3 className="font-bold text-slate-800">
                                                {experience ? (experience.toLowerCase().includes("years") ? experience : `${experience} Years`) : "N/A"}
                                            </h3>
                                        </div>

                                    </div>
                                    <div className="  font-semibold text-xs bg-white mt-4 px-2.5 py-1.5 rounded-xl shadow-sm">
                                        {rating && <p className="text-amber-500 ml-1"><span className="text-emerald-600 text-sm font-bold" >Rating:</span>   ★ {rating}</p>}
                                    </div>


                                </div>


                                <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 hover:shadow-lg transition flex flex-col justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 text-2xl">
                                            <FaCalendarDays />
                                        </div>

                                        <div>
                                            <p className="text-slate-500 text-sm">Available Date</p>
                                            <h3 className="font-bold text-slate-800">
                                                {formatDate(appointmentDate || availableDate)}
                                            </h3>
                                        </div>
                                    </div>


                                    {availableTime && (
                                        <div className="flex flex-wrap gap-2 items-center bg-emerald-50/60 p-2.5 rounded-2xl border border-emerald-100/70">
                                            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-xs bg-white px-2.5 py-1.5 rounded-xl shadow-sm">
                                                <FaClock className="text-xs text-emerald-600" />
                                                <span>Start: {startTime}</span>
                                            </div>
                                            <div className="hidden sm:block text-emerald-400 font-bold text-xs">→</div>
                                            <div className="flex items-center gap-1.5 text-indigo-700 font-semibold text-xs bg-white px-2.5 py-1.5 rounded-xl shadow-sm border border-indigo-50">
                                                <FaClock className="text-xs text-indigo-500" />
                                                <span>End: {endTime}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] p-8 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-cyan-100 mb-2">Consultation Fee</p>
                                        <h2 className="text-5xl font-black">${fee}</h2>
                                    </div>

                                    <div className="bg-white/20 p-5 rounded-3xl text-4xl">
                                        <FaMoneyBillWave />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                    About Doctor
                                </h3>

                                <p className="text-slate-600 leading-8 text-lg">
                                    {description}
                                </p>
                            </div>
                            <Link href={`/bookappointment?doctorName=${encodeURIComponent(doctorName)}`}>
                                <div className="w-full mt-6">
                                    <button className="w-full relative overflow-hidden py-5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold text-lg shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]">
                                        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition duration-500"></span>
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Book Appointment Now
                                        </span>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllAppointDetailspage;
import AppoinmentCard from "@/components/AppoinmentCard"

export const dynamic = 'force-dynamic';

const AllAppointpage = async () => {
    let bookappointments = [];
    try {
        const res = await fetch('http://localhost:5000/bookappointment', { cache: 'no-store' });
        if (res.ok) {
            bookappointments = await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch appointments:", error);
    }

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
                        All Appointments
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        View and manage all booked doctor appointments. Find your scheduled consultations and care details.
                    </p>
                </div>

                {bookappointments.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-lg font-medium">No appointments found. Start by booking one!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {bookappointments.map((appointment) => (
                            <AppoinmentCard key={appointment._id || Math.random().toString()} allAppoint={appointment} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}

export default AllAppointpage


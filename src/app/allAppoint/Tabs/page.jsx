import DashBoard from "@/components/Dashbord";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const dynamic = 'force-dynamic';

const AppoinmentInfo = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const userEmail = user?.email;

    let bookappointments = [];

    const res = await fetch('http://localhost:5000/bookappointment', { cache: 'no-store' });
    bookappointments = await res.json().catch(() => []);

    const filteredAppointments = userEmail
        ? bookappointments.filter(appointment => appointment.email === userEmail)
        : [];

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAppointments.length > 0 ? (
                        filteredAppointments.map(appointment => (
                            <DashBoard key={appointment._id} allAppoint={appointment} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <p className="text-slate-500 font-medium">No bookings found for your account.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default AppoinmentInfo;

import DashBoard from "@/components/Dashbord";

export const dynamic = 'force-dynamic';

const AppoinmentInfo = async () => {
    let bookappointments = [];

    const res = await fetch('http://localhost:5000/bookappointment', { cache: 'no-store' });

    bookappointments = await res.json();



    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bookappointments.map(appointment =>
                        <DashBoard key={appointment._id} allAppoint={appointment} />)
                    }
                </div>

            </div>
        </main>
    )
}

export default AppoinmentInfo

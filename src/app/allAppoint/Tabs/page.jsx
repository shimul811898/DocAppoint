"use client";

import { authClient } from "@/lib/auth-client";
import DashBoard from "@/components/Dashbord";
import { useEffect, useState } from "react";

const AppoinmentInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const [bookappointments, setBookappointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/bookappointment?email=${encodeURIComponent(session.user.email)}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setBookappointments(data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [session?.user?.email]);

  const handleDeleteState = (id) => {
    setBookappointments((prev) => prev.filter((item) => item._id !== id));
  };

  const handleUpdateState = (updatedAppoint) => {
    setBookappointments((prev) =>
      prev.map((item) => (item._id === updatedAppoint._id ? updatedAppoint : item))
    );
  };

  if (isPending || loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 text-sm">Loading your appointments...</p>
        </div>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <p className="text-red-500 font-bold text-lg">Not logged in</p>
          <p className="text-slate-500 text-sm mt-2">Please login to see your appointments.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {bookappointments.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">No appointments found for your account.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookappointments.map((appointment) => (
              <DashBoard
                key={appointment._id}
                allAppoint={appointment}
                onDeleteSuccess={handleDeleteState}
                onUpdateSuccess={handleUpdateState}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AppoinmentInfo;
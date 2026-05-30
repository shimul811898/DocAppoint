'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import AppoinmentCard from "@/components/AppoinmentCard";

const AllAppointpage = () => {
    const [bookappointments, setBookappointments] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, { cache: 'no-store' });
            const data = await res.json().catch(() => []);
            setBookappointments(data);
        };
        fetchData();
    }, []);

    const filteredAppointments = bookappointments.filter((appointment) => {
        if (!searchQuery) return true;

        return Object.values(appointment).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

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

                <div className="max-w-md mx-auto mb-12">
                    <div className="relative flex items-center w-full h-12 rounded-xl border-2 border-slate-200 bg-white px-3 focus-within:border-blue-500 transition-all shadow-sm">
                        <div className="flex items-center pr-2">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>

                        <input
                            type="text"
                            placeholder="Type to search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-full bg-transparent pr-8 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
                        />

                        {searchQuery && (
                            <button
                                className="absolute right-3 focus:outline-none p-1 hover:bg-slate-100 rounded-full transition"
                                type="button"
                                onClick={() => setSearchQuery('')}
                            >
                                <X className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                            </button>
                        )}
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAppointments.map(appointment =>
                        <AppoinmentCard key={appointment._id} allAppoint={appointment} />
                    )}
                </div>

            </div>
        </main>
    );
};

export default AllAppointpage;
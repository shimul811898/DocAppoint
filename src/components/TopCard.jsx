
import AppoinmentCard from "@/components/AppoinmentCard";

export const dynamic = 'force-dynamic';

export const TopCard = async() => {
  let doctors = [];

  
    const res = await fetch('http://localhost:5000/doctors', { cache: 'no-store' });
    doctors = await res.json();


  const topRated = doctors
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm tracking-tight sm:text-5xl">
            Top Rated Doctors
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Meet our highest-rated specialists trusted by patients for exceptional care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRated.map(doctor => (
            <AppoinmentCard key={doctor._id} allAppoint={doctor} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default TopCard;
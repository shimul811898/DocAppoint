import Link from "next/link";
import Image from "next/image";
import { FaCheckSquare, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative max-w-7xl mx-auto mb-32 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#eef5ff] via-white to-[#e6fffb] shadow-[0_20px_80px_rgba(30,99,255,0.12)]">
      
     
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1E63FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#18C7C9]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-14 pt-14 lg:pt-20 gap-12">
        
        
        <div className="lg:w-1/2 space-y-8 z-10">
          
         
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 backdrop-blur-md px-5 py-2 text-sm sm:text-base font-semibold text-[#1E63FF] shadow-lg">
              <FaCheckSquare className="text-[#18C7C9]" />
              The Best Health Care Services
            </span>
          </div>

        
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              Get The Care <br />
              <span className="bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] bg-clip-text text-transparent">
                You Need
              </span>{" "}
              Faster
            </h1>

            <p className="text-gray-600 text-[17px] leading-8 max-w-xl">
              Book appointments instantly with trusted doctors and get
              world-class healthcare services without waiting in long queues.
            </p>
          </div>

        
          <div className="flex flex-wrap items-center gap-6 pt-2">
            
          
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] px-7 py-4 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Discover Now
              <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

          
            <div className="flex items-center gap-6 bg-white/70 backdrop-blur-md px-5 py-4 rounded-2xl shadow-md border border-white">
              
             
              <div className="space-y-1">
                <div className="flex gap-1 text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  5.0/1905 Ratings
                </p>
              </div>
              
              <div className="w-px h-10 bg-gray-300"></div>

             
              <div>
                <h3 className="text-2xl font-bold text-slate-900">99%</h3>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end items-end">
          
       
          <div className="absolute bottom-8 w-[320px] h-[320px] bg-gradient-to-r from-[#1E63FF] to-[#18C7C9] rounded-full blur-3xl opacity-20"></div>

        
          <div className="relative z-10">
            <Image
              src="/assets/doctor.png"
              alt="Doctor Image"
              width={500}
              height={650}
              priority
              className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
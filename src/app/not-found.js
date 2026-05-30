"use client";

import React from 'react';

const NotFound = () => {
  const handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-12 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 text-center transition-all duration-300 hover:shadow-2xl">

        <h1 className="animate-bounce text-7xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent select-none">
          404
        </h1>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-500">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>


        <div className="my-6 border-t border-gray-100" />


        <button
          onClick={handleGoHome}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-[0_4px_15px_rgba(30,99,255,0.15)] hover:shadow-[0_8px_25px_rgba(30,99,255,0.25)] hover:opacity-95 active:scale-[0.98] transition-all duration-300"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
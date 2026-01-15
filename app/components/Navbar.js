"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-700 to-red-800 text-white shadow-xl border-b-4 border-yellow-400 animate-slide-in-down">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-black hover:animate-bounce-soft" style={{
          textShadow: '3px 3px 0px #1a3a93, 6px 6px 0px rgba(0,0,0,0.5)',
          color: '#FFD700',
          letterSpacing: '1px'
        }}>
          ⚡ POKÉMON ⚡
        </h1>
        <div className="space-x-6 flex text-sm md:text-base font-semibold">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-all px-3 py-2 rounded-lg hover:bg-red-600 border-2 border-transparent hover:border-yellow-400 hover:scale-110"
          >
            HOME
          </Link>

          <Link
            href="/about"
            className="hover:text-yellow-300 transition-all px-3 py-2 rounded-lg hover:bg-red-600 border-2 border-transparent hover:border-yellow-400 hover:scale-110"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
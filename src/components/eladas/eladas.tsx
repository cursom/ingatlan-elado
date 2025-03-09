"use client";

import Link from "next/link";
import { FaArrowRight, FaSignInAlt, FaHome } from "react-icons/fa";
import Background from "./background";

export default function Eladas() {
    return (
        <section id="eladas-section" className="relative w-full h-[700px] md:h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
            <Background />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center">
                    <FaHome className="text-6xl text-green-400 drop-shadow-lg animate-pulse" />
                    <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">Szeretnéd eladni az ingatlanod?</h2>
                </div>
                <p className="mt-4 text-lg md:text-xl drop-shadow-md opacity-90 animate-fadeIn delay-150">Jelentkezz be most, és tedd közzé az ingatlanod pár kattintással!</p>
                <div className="mt-8 flex justify-center">
                    <Link href="/">
                        <button className="group px-10 py-4 bg-green-600 hover:bg-green-700 transition-all duration-500 rounded-lg text-lg font-bold shadow-lg flex items-center gap-3 relative overflow-hidden before:absolute before:inset-0 before:bg-green-800 before:scale-0 before:transition-transform before:duration-500 group-hover:before:scale-100">
                            <span className="relative z-10 flex items-center gap-2">
                                <FaSignInAlt className="text-xl animate-fadeInLeft delay-200" />Bejelentkezés
                                <FaArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="mt-8 text-sm opacity-75">
                    <p className="animate-fadeIn delay-300">Több ezer ingatlan már eladásra került rajtunk keresztül!</p>
                </div>
            </div>
        </section>
    );
}
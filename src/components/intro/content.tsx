"use client";

import { FaSearch } from "react-icons/fa";

export default function IntroContent() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <h1 className="text-2xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                Találd meg{" "}
                <span className="relative inline-block">
                    álmaid otthonát!
                    <div className="absolute bottom-[-25px] left-0 w-full md:w-[100%] h-12 bg-no-repeat bg-contain" style={{backgroundImage: "url('/svg/underline.svg')", backgroundPosition: "center bottom", backgroundSize: "contain"}}></div>
                </span>
            </h1>
            <p className="mt-4 text-md md:text-2xl z-10 text-gray-200">Több ezer elérhető ingatlan közvetlen eladótól és ingatlanközvetítőktől.</p>

            <div className="mt-4 w-full max-w-md flex gap-2">
                <input type="text" placeholder="Város, kerület, irányítószám..." className="w-full px-5 py-3 text-white bg-black/40 border border-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300"/>
                <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                    <FaSearch />
                </button>
            </div>
        </div>
    );
}
"use client";

import { useState } from "react";
import IntroBackground from "./background";
import IntroContent from "./content";

export default function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] text-white mt-[80px] overflow-hidden">
            <IntroBackground currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            <IntroContent />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {[...Array(5)].map((_, index) => (
                    <button key={index} className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-green-500 scale-125" : "bg-gray-400"} hover:scale-125`} onClick={() => setCurrentIndex(index)}></button>
                ))}
            </div>
        </div>
    );
}
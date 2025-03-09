"use client";

import { useEffect } from "react";

const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg",
];

interface BackgroundProps {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

export default function IntroBackground({ currentIndex, setCurrentIndex }: BackgroundProps) {
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, setCurrentIndex]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {images.map((img, index) => (
                <div key={index} className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${img})` }}></div>
            ))}
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
    );
}
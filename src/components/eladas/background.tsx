"use client";

import { useEffect, useState } from "react";

const images = [ "/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg", "/images/hero5.jpg" ];

const Background = () => {
    const [scrollY, setScrollY] = useState(0);
    const [randomImages, setRandomImages] = useState<string[][]>([]);

    useEffect(() => {
        const shuffledColumns = Array.from({ length: 4 }, () => 
            [...images].sort(() => Math.random() - 0.5).slice(0, 5)
        );
        setRandomImages(shuffledColumns);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (randomImages.length === 0) return null;

    return (
        <div className="absolute inset-0 flex">
            {randomImages.map((colImages, colIndex) => (
                <div key={colIndex} className="w-1/4 h-full relative">
                    {colImages.map((image, index) => (
                        <div key={index} className="absolute w-full" style={
                            {
                                top: `${index * 100}vh`,
                                transform: `translateY(${(scrollY + index * 100) * (colIndex % 2 === 0 ? -0.1 : 0.1)}px)`,
                                backgroundImage: `url(${image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                height: "100vh",
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Background;
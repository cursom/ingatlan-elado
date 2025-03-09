"use client";

import { useEffect, useState } from "react";

const baseImages = [ "/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg", "/images/hero5.jpg", "/images/hero6.jpg", "/images/hero7.jpg" ];

let images: string[] = [];
while (images.length < 4 * 5) {
	images = [...images, ...baseImages];
}

const shuffleArray = (array: string[]) => {
	return [...array].sort(() => Math.random() - 0.5);
};

const Background = () => {
	const [scrollY, setScrollY] = useState(0);
	const [randomImages, setRandomImages] = useState<string[][]>([]);

	useEffect(() => {
		const newColumns: string[][] = Array.from({ length: 4 }, (_, i) =>
			shuffleArray(images).slice(i * 5, (i + 1) * 5)
		);

		setRandomImages(newColumns);

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (randomImages.length === 0) return null;

	return (
		<div className="absolute inset-0 flex w-full h-full">
			{randomImages.map((colImages, colIndex) => (
				<div key={colIndex} className="w-1/4 h-full relative">
					{colImages.map((image, index) => (
						<div key={index} className="absolute w-full h-[50vh] bg-cover bg-center" style={
                            {
								top: `${index * 50}vh`,
								transform: `translateY(${scrollY * (colIndex % 2 === 0 ? -0.1 : 0.1)}px)`,
								backgroundImage: `url(${image})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								opacity: 1,
								visibility: "visible"
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Background;
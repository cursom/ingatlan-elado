"use client";

import { FaChartLine, FaHome, FaUserCheck, FaHandshake } from "react-icons/fa";
import { useEffect, useState } from "react";

const stats = [
    { id: 1, icon: FaChartLine, label: "Eladások", value: 1250 },
    { id: 2, icon: FaHome, label: "Ingatlanok listázva", value: 3400 },
    { id: 3, icon: FaUserCheck, label: "Elégedett ügyfelek", value: 785 },
    { id: 4, icon: FaHandshake, label: "Sikeres üzletek", value: 1023 }
];

export default function Statistics() {
    const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

    useEffect(() => {
        stats.forEach((stat, index) => {
            const interval = setInterval(() => {
                setAnimatedStats((prev) => {
                    const newValue = Math.min(prev[index] + Math.floor(stat.value / 50), stat.value);
                    return prev.map((v, i) => (i === index ? newValue : v));
                });
            }, 20);
            setTimeout(() => clearInterval(interval), 1000);
        });
    }, []);

    return (
        <section className="py-16">
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.id} className="p-6 bg-white rounded-xl shadow-lg transition-all hover:scale-105 transform hover:shadow-2xl">
                            <Icon className="text-green-500 text-5xl mx-auto mb-4" />
                            <h3 className="text-3xl font-semibold text-gray-800">{animatedStats[index]}</h3>
                            <p className="text-xl text-gray-600">{stat.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
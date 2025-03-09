"use client";

import { ingatlanokData } from "./json/data";
import { FaArrowRight, FaBed, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

export default function Ingatlanok() {
    return (
        <section className="w-full">
            <div className="container max-w-screen-xl px-4 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ingatlanokData.map((ingatlan) => (
                        <div key={ingatlan.id} className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                            <img src={ingatlan.image} alt="" className="w-full h-40 sm:h-48 object-cover rounded-t-3xl"/>
                            
                            <div className="p-4 sm:p-6 flex flex-col gap-2">
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 truncate">{ingatlan.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">{ingatlan.description}</p>
                                <div className="flex justify-between items-center text-emerald-500 text-xs sm:text-sm font-medium">
                                    <div className="flex items-center gap-2 truncate">
                                        <FaMapMarkerAlt className="text-lg" />
                                        <span className="truncate">{ingatlan.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaBed className="text-lg" />
                                        <span>{ingatlan.rooms} szoba</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                                    <FaUserAlt className="text-emerald-500" />
                                    <span>{ingatlan.postedBy}</span>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-semibold text-emerald-600">
                                        {ingatlan.price.toLocaleString()} Ft
                                    </span>
                                </div>
                                <button className="w-full bg-emerald-600 text-white py-2 sm:py-3 px-6 rounded-lg hover:bg-emerald-700 flex items-center justify-center gap-2 transition">
                                    <FaArrowRight className="text-white" /> Részletek
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

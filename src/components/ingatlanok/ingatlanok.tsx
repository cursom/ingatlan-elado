"use client";

import { ingatlanokData } from "./json/data";
import { FaArrowRight, FaBed, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

export default function Ingatlanok() {
    return (
        <section className="w-full">
            <div className="container max-w-screen-xl px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ingatlanokData.map((ingatlan) => (
                        <div key={ingatlan.id} className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                            <img src={ingatlan.image} alt="" className="w-full h-48 object-cover rounded-t-3xl"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-emerald-600 transition">{ingatlan.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{ingatlan.description}</p>
                                
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="flex items-center text-emerald-500">
                                        <FaMapMarkerAlt className="mr-1" />
                                        {ingatlan.location}
                                    </span>
                                    <span className="flex items-center text-emerald-500">
                                        <FaBed className="mr-1" />3 szoba
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <FaUserAlt className="text-emerald-500" />
                                    <span className="text-sm text-gray-600">{ingatlan.postedBy}</span>
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-semibold text-emerald-600">
                                        {ingatlan.price.toLocaleString()} Ft
                                    </span>
                                </div>

                                <button className="w-full bg-emerald-600 text-white py-3 px-8 rounded-lg hover:bg-emerald-700 flex items-center justify-center gap-2 transition">
                                    <FaArrowRight className="text-white" />Részletek
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
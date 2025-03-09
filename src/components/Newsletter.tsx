"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Feliratkozás:", email);
        setEmail("");
    };

    return (
        <section className="py-12">
            <div className="container max-w-xl mx-auto px-6">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Iratkozz fel hírlevelünkre!</h2>
                <p className="text-lg text-gray-600 mb-6">Értesülj elsőként az új eladó ingatlanokról és ajánlatokról. Ne maradj le semmiről!</p>
                <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                    <FaEnvelope className="text-green-500 ml-4 text-2xl" />
                    <input type="email" placeholder="Add meg az email címed" className="flex-1 p-4 outline-none text-gray-700 rounded-full transition-all" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" className="px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105">
                        <FaPaperPlane className="text-xl" />
                    </button>
                </form>
            </div>
        </section>
    );
}
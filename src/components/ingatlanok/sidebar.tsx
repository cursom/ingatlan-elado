"use client";

import { FaMapMarkerAlt, FaMoneyBillWave, FaHome, FaBed, FaRulerCombined, FaBuilding, FaTools } from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl max-w-[95%] sm:max-w-full mx-auto">
            <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center justify-center gap-2">Ingatlan szűrés</h2>
                <hr className="border-t-2 border-gray-400 opacity-75 mb-4" />

                <label className="block mb-2 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-emerald-500 text-lg" /> Város
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition">
                    <option value="">Válassz várost</option>
                    <option value="budapest">Budapest</option>
                    <option value="debrecen">Debrecen</option>
                    <option value="pecs">Pécs</option>
                    <option value="nyiregy">Nyíregyháza</option>
                </select>

                <label className="block mt-4 mb-2 flex items-center gap-2">
                    <FaMoneyBillWave className="text-emerald-500 text-lg" /> Ár (Ft)
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <input type="number" placeholder="Min" className="p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition" />
                    <input type="number" placeholder="Max" className="p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition" />
                </div>

                <label className="block mt-4 mb-2 flex items-center gap-2">
                    <FaHome className="text-emerald-500 text-lg" /> Ingatlan típusa
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition">
                    <option value="">Válassz típust</option>
                    <option value="lakas">Lakás</option>
                    <option value="haz">Ház</option>
                    <option value="telek">Telek</option>
                </select>

                <label className="block mt-4 mb-2 flex items-center gap-2">
                    <FaBed className="text-emerald-500 text-lg" /> Szobák száma
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition">
                    <option value="">Bármennyi</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>

                <label className="block mt-4 mb-2 flex items-center gap-2">
                    <FaRulerCombined className="text-emerald-500 text-lg" /> Alapterület (m²)
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <input type="number" placeholder="Min" className="p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition" />
                    <input type="number" placeholder="Max" className="p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition" />
                </div>

                <label className="block mt-4 mb-2 flex items-center gap-2">
                    <FaBuilding className="text-emerald-500 text-lg" /> Építés éve
                </label>
                <input type="number" placeholder="Pl. 2000" className="w-full p-2 border rounded-lg focus:ring focus:ring-emerald-300 focus:border-emerald-500 transition" />

                <label className="block mt-4 mb-2 flex items-center gap-2">
                    <FaTools className="text-emerald-500 text-lg" /> Extrák
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-emerald-500" /> Erkély
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-emerald-500" /> Garázs
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-emerald-500" /> Kert
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-emerald-500" /> Medence
                    </label>
                </div>
            </div>
        </aside>
    );
}
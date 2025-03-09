"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaGlobe, FaClock, FaGavel, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#292524' }} className="relative text-gray-300 py-8 lg:py-20 overflow-hidden">
            <div className="container max-w-screen-xl mx-auto py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-start text-left">
                    <div className="flex flex-col mb-8 sm:mb-0">
                        <Image src="/logo.png" alt="Logo" width={220} height={80} />
                        <p className="mt-4 text-sm leading-relaxed max-w-sm">Ez az oldal kizárólag webfejlesztés céljából készült. Az oldalon található adatok, képek és egyéb tartalmak teljes mértékben fikciók. A forráskódot a <Link href="https://github.com/cursom/ingatlan-elado/" className="text-green-400 hover:text-green-600 transition-colors">GitHub-on</Link> találhatod meg.</p>
                    </div>
                    <div className="flex flex-col mb-8 sm:mb-0">
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Navigáció</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-white transition">Rólunk</Link></li>
                            <li><Link href="/" className="hover:text-white transition">Ingatlanok</Link></li>
                            <li><Link href="/" className="hover:text-white transition">Eladás</Link></li>
                            <li><Link href="/" className="hover:text-white transition">GYIK</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-8 sm:mb-0">
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Jogi Információk</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaGavel className="text-green-400" />
                                <Link href="/terms" className="hover:text-white transition">Felhasználási feltételek</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaShieldAlt className="text-green-400" />
                                <Link href="/privacy" className="hover:text-white transition">Adatvédelmi szabályzat</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaClock className="text-green-400" />
                                <Link href="/cookies" className="hover:text-white transition">Sütik kezelése</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaGlobe className="text-green-400" />
                                <Link href="/disclaimer" className="hover:text-white transition">Jogi nyilatkozat</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Kapcsolat</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-green-400" />
                                <span>Budapest, idk út 10, Magyarország</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-green-400" />
                                <a href="tel:+36201234567" className="hover:text-white transition">+36 20 123 4567</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-green-400" />
                                <a href="mailto:info@example.hu" className="hover:text-white transition">info@example.hu</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaBuilding className="text-green-400" />
                                <span>Hétfő - Péntek: 08:00 - 18:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 opacity-50"></div>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-6 px-4">
                    <p>&copy; 2025 Minden jog egyáltalán nincs fenntartva.</p>
                    <p className="mt-2 md:mt-0">Developed by{" "}
                    <a href="https://github.com/cursom/ingatlan-elado/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold hover:text-white transition-transform transform hover:scale-110">cursom</a></p>
                </div>
            </div>
        </footer>
    );
}

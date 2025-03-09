"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUser, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MobileMenu from "./mobileMenu";
import Animation from "./countAnimation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full bg-[#F1F2EB] shadow-md z-50">
            <div className="container max-w-screen-xl p-4 mx-auto flex justify-between items-center py-2 mt-1 text-sm text-[#4A4A48] md:flex-row flex-col">
                <Animation />
                <div className="flex gap-6 mt-2 md:mt-0">
                    <div className="flex gap-6 mt-2 md:mt-0">
                        <Link href="/login" className="flex items-center gap-1 text-[#4A4A48] hover:text-[#566246] transition-colors duration-300">
                            <FaUser /><span>Bejelentkezés</span>
                        </Link>
                        <Link href="/register" className="flex items-center gap-1 text-[#4A4A48] hover:text-[#566246] transition-colors duration-300">
                            <FaUserPlus /><span>Regisztráció</span>
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="border-t border-[#D8DAD3] mt-1" />

            <div className="container max-w-screen-xl p-4 mx-auto flex justify-between items-center py-4 relative">
                <Image src="/logo.png" alt="Ingatlan logó" width={220} height={70} className="h-auto w-40" />
                <button onClick={() => setIsMenuOpen(true)} className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden text-2xl">
                    <FaBars />
                </button>
                <div className="hidden md:flex gap-6 text-[#4A4A48]">
                    <Link href="/" className="relative group">
                        <span className="relative z-10 transition-all duration-300 group-hover:text-[#566246]">Kezdőlap</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#566246] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/" className="relative group">
                        <span className="relative z-10 transition-all duration-300 group-hover:text-[#566246]">Ingatlanok</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#566246] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/" className="relative group">
                        <span className="relative z-10 transition-all duration-300 group-hover:text-[#566246]">Eladás</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#566246] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/" className="relative group">
                        <span className="relative z-10 transition-all duration-300 group-hover:text-[#566246]">Kapcsolat</span>
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#566246] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            </div>

            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    );
}
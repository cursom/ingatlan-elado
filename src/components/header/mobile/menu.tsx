import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#F1F2EB] shadow-xl transform transition-transform duration-500 z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-5 flex justify-between items-center">
                    <Image src="/logo.png" alt="Ingatlan logó" width={180} height={55} className="h-auto w-32"/>
                    <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-[#566246] hover:text-[#4A4A48] transition-colors">
                        <FaTimes />
                    </button>
                </div>

                <div className="flex flex-col items-start px-5 gap-4 text-lg text-[#4A4A48]">
                    <Link href="/" className="w-full py-2 border-b border-[#D8DAD3] text-left group hover:text-[#566246] transition-all duration-300">
                        <span className="relative group-hover:pl-2 transition-all duration-300">Kezdőlap</span>
                    </Link>
                    <Link href="/" className="w-full py-2 border-b border-[#D8DAD3] text-left group hover:text-[#566246] transition-all duration-300">
                        <span className="relative group-hover:pl-2 transition-all duration-300">Ingatlanok</span>
                    </Link>
                    <Link href="/" className="w-full py-2 border-b border-[#D8DAD3] text-left group hover:text-[#566246] transition-all duration-300">
                        <span className="relative group-hover:pl-2 transition-all duration-300">Eladás</span>
                    </Link>
                    <Link href="/" className="w-full py-2 text-left group hover:text-[#566246] transition-all duration-300">
                        <span className="relative group-hover:pl-2 transition-all duration-300">Kapcsolat</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
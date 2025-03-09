"use client";

import Header from "@/components/header/header";
import Intro from "@/components/intro/intro";
import Sidebar from "@/components/ingatlanok/sidebar";
import Ingatlanok from "@/components/ingatlanok/ingatlanok";
import Eladas from "@/components/eladas/eladas";
import Statistics from "@/components/Statistics";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <div className="flex justify-center p-4 py-20">
                <div className="container max-w-screen-xl grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 relative">
                    <div className="relative h-fit order-1 md:order-none">
                        <Image src="/svg/blob-1.svg" alt="" width={500} height={500} className="absolute top-[-75px] left-[-75px] z-[-1] w-[60%]" />
                        <Sidebar />
                        <Image src="/svg/blob-2.svg" alt="" width={500} height={500} className="absolute bottom-[-75px] right-[-75px] z-[-1] w-[60%]" />
                    </div>
                    <main className="order-2 md:order-none">
                        <Ingatlanok />
                    </main>
                </div>
            </div>
            <Eladas />
            <Statistics />
            <Newsletter />
            <Footer />
        </>
    );
}

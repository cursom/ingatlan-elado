"use client";

import Header from "@/components/header/header";
import Intro from "@/components/intro/intro";
import Sidebar from "@/components/ingatlanok/sidebar";
import Ingatlanok from "@/components/ingatlanok/ingatlanok";

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <div className="flex justify-center p-4 py-20">
                <div className="container max-w-screen-xl flex gap-6">
                    <Sidebar />
                    <main className="flex-1">
                        <Ingatlanok />
                    </main>
                </div>
            </div>
        </>
    );
}
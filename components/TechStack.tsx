'use client';

import { technologies } from "@/data/siteData";

export default function TechStack() {
    return (
        <section className="max-w-7xl mx-auto py-20">
            <h2 className="lg:text-5xl text-4xl text-center lg:text-left font-bold mb-12">TECH STACK</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col items-center gap-4 hover:bg-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300">
                        <img src={tech.icon} alt={tech.name} className="w-12 h-12" />

                        <div className="hidden sm:block font-semibold">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

'use client';

import { experiences } from "@/data/siteData";

export default function WorkExperience() {

    return (
        <section id="experience" className="max-w-7xl mx-auto px-0 lg:px-0 py-20">
            <h2 className="lg:text-5xl text-4xl text-center lg:text-left font-bold mb-12">WORK EXPERIENCE</h2>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-blue-500/50 pl-8 relative">
                        <div className="absolute -left-[6px] top-0 w-3 h-3 bg-blue-500 rounded-full" />
                        <div className="text-gray-400 text-sm mb-2">{exp.date}</div>
                        <h3 className="text-3xl font-bold mb-1">{exp.title}</h3>
                        <div className="text-blue-500 text-2xl font-semibold mb-2">{exp.company}</div>
                        <p className="text-gray-400 hidden lg:block">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
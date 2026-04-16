'use client';

import { useState } from 'react';
import { techCategories } from '@/data/siteData';

export default function TechStack() {
    const [openStates, setOpenStates] = useState<boolean[]>(
        () => techCategories.map(() => true)
    );

    const toggle = (index: number) => {
        setOpenStates(prev =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    return (
        <section className="max-w-7xl mx-auto py-20">
            <h2 className="lg:text-5xl text-4xl text-center lg:text-left font-bold mb-12">TECH STACK</h2>

            <div className="space-y-4">
                {techCategories.map((category, index) => (
                    <div key={category.label} className="border border-white/10 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between px-6 py-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
                        >
                            <span className="text-lg font-semibold tracking-wide">{category.label}</span>
                            <svg
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openStates[index] ? 'rotate-180' : 'rotate-0'}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {openStates[index] && (
                            <div className="px-6 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {category.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="bg-white/[0.03] border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col items-center gap-4 hover:bg-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                                        <div className="hidden sm:block font-semibold">{tech.name}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

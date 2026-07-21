'use client';

import { useState } from 'react';
import { experiences } from "@/data/siteData";

export default function WorkExperience() {
    const [openStates, setOpenStates] = useState<boolean[]>(
        () => experiences.map(() => false)
    );

    const toggle = (index: number) => {
        setOpenStates(prev =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    return (
        <section id="experience" className="scroll-mt-24 max-w-7xl mx-auto py-20">
            <div className="mb-12 text-center lg:text-left">
                <span className="text-accent font-semibold tracking-widest text-sm">CAREER SO FAR</span>
                <h2 className="lg:text-5xl text-4xl font-bold mt-2">Work Experience</h2>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-accent/40 pl-8 relative">
                        <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 bg-accent rounded-full ring-4 ring-accent/20" />
                        <div className="text-gray-400 text-sm mb-2">{exp.date}</div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-1">{exp.title}</h3>
                        <div className="text-accent text-xl lg:text-2xl font-semibold mb-3">{exp.company}</div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {exp.stack.map((tech) => (
                                <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-400 mb-3 leading-relaxed">{exp.description}</p>

                        <button
                            onClick={() => toggle(index)}
                            aria-expanded={openStates[index]}
                            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-200"
                        >
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${openStates[index] ? 'rotate-180' : 'rotate-0'}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            {openStates[index] ? 'Hide details' : 'Show details'}
                        </button>

                        {openStates[index] && (
                            <ul className="mt-3 space-y-2">
                                {exp.details.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                                        <span className="text-accent mt-1.5 shrink-0">▸</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

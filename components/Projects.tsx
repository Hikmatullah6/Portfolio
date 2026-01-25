'use client';

import { projects } from "@/data/siteData";
import Link from "next/link";

export default function Projects() {

    return (
        <section id="projects" className="max-w-7xl mx-auto px-0 lg:px-0 py-20">
            <h2 className="lg:text-5xl text-4xl text-center lg:text-left font-bold mb-12">PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="min-h-48 flex items-center justify-center">
                            <img src={project.image} alt="" />
                        </div>
                        <div className="p-6 space-y-2">
                            <h3 className="mt-1.5 text-xl font-bold">{project.title}</h3>
                            <div className="text-gray-400 font-semibold">{project.subtitle}</div>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-md text-xs outline-1 outline-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="font-semibold inline-block items-center justify-center px-4 py-2 text-black bg-white/70 border border-white/80 rounded-lg text-sm hover:bg-white hover:scale-105 hover:shadow-2xl hover:shadow-white/20 outline-1 outline-black transition-all">
                                    <span className="inline-flex items-center"><img src="/icons/globe_light.svg" alt="" className="h-6" />LIVE DEMO</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
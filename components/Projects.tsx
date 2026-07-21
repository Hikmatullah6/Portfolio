'use client';

import { projects } from "@/data/siteData";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 max-w-7xl mx-auto py-20">
            <div className="mb-12 text-center lg:text-left">
                <span className="text-accent font-semibold tracking-widest text-sm">THINGS I&apos;VE BUILT</span>
                <h2 className="lg:text-5xl text-4xl font-bold mt-2">Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-surface/40 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.02]">
                            <Image
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6 space-y-3">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <div className="text-accent text-sm font-semibold">{project.subtitle}</div>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex gap-2 flex-wrap pt-1">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-accent/10 text-accent-light px-3 py-1 rounded-md text-xs font-medium border border-accent/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-black rounded-lg text-sm font-semibold hover:bg-accent-light hover:scale-105 transition-all duration-300"
                                >
                                    Live Demo
                                    <span aria-hidden>→</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

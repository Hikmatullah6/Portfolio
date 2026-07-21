"use client";

import LinkedInIcon from "./icons/LinkedIn";
import GithubIcon from "./icons/Github";
// import Typewriter from "./Typewriter"; // Typewriter disabled for now

export default function Hero() {
    return (
        <section className="relative max-w-7xl md:mx-auto py-20 lg:py-16">
            {/* Ambient amber glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-accent-dark/10 blur-[120px]"
            />

            <div className="relative grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left space-y-5">
                    {/* Availability badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        Open to opportunities
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1]">
                        Hello, <span className="text-7xl lg:text-8xl inline-block animation-wave">👋</span><br />
                        I&apos;m{" "}
                        <span className="bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
                            Hussain!
                        </span>
                        <br />
                        {/* Typewriter disabled for now — static title instead */}
                        {/* <Typewriter /> */}
                        <span>Software Engineer</span>
                    </h1>

                    <p className="text-gray-400 text-2xl lg:text-3xl">
                        Recent Graduate <br />BSc Honours in Computer Science
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-1">
                        <a
                            href="mailto:hussain.hz994@gmail.com"
                            className="text-lg inline-block bg-accent text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-accent-light hover:scale-105 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                        >
                            Email Me
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg inline-block border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-lg text-gray-400 justify-center md:justify-start">
                        <span className="text-2xl">🏠</span>
                        <span>Ontario, Canada</span>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end z-10">
                    <div>
                        {/* SVG asset — next/image offers no optimization for SVGs */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Hikmatullah_HussainZada.svg"
                            alt="Hikmatullah Hussainzada"
                            className="w-75"
                        />
                        <div className="flex gap-6 pt-4 text-lg justify-center">
                            <a
                                href="https://www.linkedin.com/in/hikmatullahhussainzada"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                            >
                                <span className="w-5"><LinkedInIcon /></span>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/Hikmatullah6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                            >
                                <span className="w-5"><GithubIcon /></span>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

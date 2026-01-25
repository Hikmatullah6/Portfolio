"use client";

import Link from "next/link";
import LinkedInIcon from "./icons/LinkedIn";
import GithubIcon from "./icons/Github";
import Image from "next/image";
import Typewriter from "./Typewriter";

export default function Hero() {
    return (
        <section className="max-w-7xl md:mx-auto px-0 lg:px-0 py-20 lg:py-10 md:justify-items-normal justify-items-center">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left space-y-2 w-sm sm:w-max">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        Hello, <span className="text-8xl inline-block animation-wave">👋</span><br />
                        I'm <span className="text-blue-500">Hussain!</span><br />
                        <Typewriter />
                    </h1>
                    <p className=" text-gray-400 text-3xl lg:max-w-lg max-w-sm">
                        Recent Graduate <br />BSc Honours in Computer Science
                    </p>
                    <a
                        href="mailto:hussain.hz994@gmail.com"
                        className="text-lg inline-block bg-white text-black px-10 py-3.5 my-2 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
                    >
                        Email Me
                    </a>
                    <div className="md:flex items-center gap-2 text-lg text-gray-400">
                        <span className="text-2xl">🏠</span>
                        <span>Ontario, Canada</span>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end z-10">
                    <div className="">
                        <img src="/Hikmatullah_HussainZada.svg" alt="" className="w-75" />
                        <div className="flex gap-6 pt-4 text-lg justify-center">
                            <a href="https://www.linkedin.com/in/hikmatullahhussainzada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-1xl text-gray-400 hover:text-blue-500 transition-colors">
                                <span className="w-5"><LinkedInIcon /></span>
                                LinkedIn
                            </a>
                            <a href="https://github.com/Hikmatullah6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-1xl text-gray-400 hover:text-blue-500 transition-colors">
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

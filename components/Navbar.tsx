"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-bold hover:text-blue-500 transition-colors"
                >
                    Hussain
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10">
                    <Link href="#experience" className="hover:text-blue-500 transition-colors font-semibold">
                        Work Experience
                    </Link>
                    <Link href="#projects" className="hover:text-blue-500 transition-colors font-semibold">
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:text-blue-500 transition-colors font-semibold">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-6">
                    <nav className="flex flex-col gap-6">
                        <Link
                            href="#experience"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-500 transition-colors font-semibold"
                        >
                            Work Experience
                        </Link>
                        <Link
                            href="#projects"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-500 transition-colors font-semibold"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="hover:text-blue-500 transition-colors font-semibold"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { href: "#experience", label: "Work Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight hover:text-accent transition-colors"
                >
                    Hussain<span className="text-accent">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-9">
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-gray-300 hover:text-accent transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold px-4 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-black transition-all duration-300"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Button (animated hamburger → X) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden relative w-7 h-7 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div id="mobile-menu" className="md:hidden px-6 pb-6 border-t border-white/5">
                    <nav className="flex flex-col gap-5 pt-5">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="font-semibold text-gray-300 hover:text-accent transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="font-semibold text-center px-4 py-2.5 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-black transition-all"
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

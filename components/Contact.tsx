
'use client';

import Link from 'next/link';
import EmailIcon from './icons/Email';
import LinkedInIcon from './icons/LinkedIn';
import GithubIcon from './icons/Github';

export default function Contact() {
    return (
        <section id="contact" className="max-w-7xl mx-auto px-0 lg:px-0 py-20 text-center">
            <h2 className="lg:text-5xl text-4xl text-center lg:text-left font-bold mb-8">CONTACT</h2>
            <div className="text-gray-400 text-2xl mb-8 font-semibold">Connect with me</div>
            <div className="flex flex-wrap justify-center gap-6">
                <a
                    href="mailto:hussain.hz994@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500 hover:-translate-y-1 transition-all"
                >
                    <EmailIcon /><span className='font-semibold hidden lg:block'>hussain.hz994@gmail.com</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/hikmatullahhussainzada" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500 hover:-translate-y-1 transition-all"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://github.com/Hikmatullah6" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500 hover:-translate-y-1 transition-all"
                >
                    <GithubIcon />
                </a>
            </div>
        </section>
    );
}
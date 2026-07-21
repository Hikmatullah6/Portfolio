'use client';

import EmailIcon from './icons/Email';
import LinkedInIcon from './icons/LinkedIn';
import GithubIcon from './icons/Github';

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto py-20 text-center">
            <span className="text-accent font-semibold tracking-widest text-sm">GET IN TOUCH</span>
            <h2 className="lg:text-5xl text-4xl font-bold mt-2 mb-4">Contact</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
                Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="mailto:hussain.hz994@gmail.com"
                    aria-label="Email Hussain"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-200 hover:bg-white/10 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
                >
                    <EmailIcon /><span className='font-semibold hidden lg:block'>hussain.hz994@gmail.com</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/hikmatullahhussainzada" target="_blank" rel="noopener noreferrer"
                    aria-label="Hussain on LinkedIn"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-200 hover:bg-white/10 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://github.com/Hikmatullah6" target="_blank" rel="noopener noreferrer"
                    aria-label="Hussain on GitHub"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-200 hover:bg-white/10 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all"
                >
                    <GithubIcon />
                </a>
            </div>
        </section>
    );
}

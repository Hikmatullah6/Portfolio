"use client";

import { useEffect, useState } from "react";

const titles = ["Software Engineer", "Full-Stack Developer", "Backend Developer", "Always Learning"];

export default function Typewriter() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="typewriter">
            <span className="sec-text">
                {titles[index]}
            </span>
        </div>
    );
}

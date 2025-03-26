'use client'

import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "glass py-3 shadow-sm" : "py-5"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="font-medium text-xl transition-opacity hover:opacity-80"
                >
                    ColorConvert
                </Link>

                <nav className="hidden md:flex space-x-8">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/">Convert</NavLink>
                    <NavLink href="/">Palettes</NavLink>
                    <NavLink href="/">Tools</NavLink>
                </nav>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
                    </button>

                    <button
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md active:scale-95">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

const NavLink = ({href, children}: { href: string; children: React.ReactNode }) => {
    return (
        <Link
            href={href}
            className="text-foreground/80 hover:text-foreground transition-colors relative group"
        >
            {children}
            <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"/>
        </Link>
    );
};

export default Navbar;
'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {SwitchTheme} from "@/components/switch-theme";
import {cn} from "@/lib/utils";
import Logo from "@/components/layout/logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300  py-5', {"shadow-sm bg-background dark:bg-background": scrolled})}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Logo/>

                <nav className="hidden md:flex space-x-8">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/">Convert</NavLink>
                    <NavLink href="/">Palettes</NavLink>
                    <NavLink href="/">Tools</NavLink>
                    <NavLink href="/about">About</NavLink>
                </nav>

                <div className="flex items-center space-x-4">
                    <SwitchTheme/>

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
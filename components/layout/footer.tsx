import {Github, Linkedin, Twitter} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t py-12 mt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">ColorConvert</h3>
                        <p className="text-sm text-muted-foreground">
                            A modern tool for color conversion and palette generation.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://github.com" icon={<Github size={18}/>}/>
                            <SocialLink href="https://twitter.com" icon={<Twitter size={18}/>}/>
                            <SocialLink href="https://linkedin.com" icon={<Linkedin size={18}/>}/>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Tools</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/">RGB to HEX</FooterLink>
                            <FooterLink href="/">HEX to RGB</FooterLink>
                            <FooterLink href="/">HSL to RGB</FooterLink>
                            <FooterLink href="/">RGB to HSL</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/">Color Palettes</FooterLink>
                            <FooterLink href="/">Accessibility</FooterLink>
                            <FooterLink href="/">Color Theory</FooterLink>
                            <FooterLink href="/">Blog</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <FooterLink href="/">Privacy Policy</FooterLink>
                            <FooterLink href="/">Terms of Service</FooterLink>
                            <FooterLink href="/">Cookie Policy</FooterLink>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} ColorConvert. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        Designed with precision. Built with care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({href, icon}: { href: string; icon: React.ReactNode }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
        >
            {icon}
        </a>
    );
};

const FooterLink = ({href, children}: { href: string; children: React.ReactNode }) => {
    return (
        <li>
            <Link
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
            >
                {children}
            </Link>
        </li>
    );
};

export default Footer;
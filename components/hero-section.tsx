import Link from "next/link";
import {ArrowRight} from "lucide-react";

const HeroSection = () => {
    return (<section className="py-16 md:py-24">
        <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up"
                 style={{animationDelay: "100ms"}}>
                <div
                    className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Simple. Precise. Elegant.
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance leading-tight">
                    Color conversion with <span className="text-primary">pixel-perfect</span> precision
                </h1>
                <p className="text-xl text-muted-foreground mt-6 text-balance">
                    A modern color conversion tool designed with simplicity and accuracy in mind.
                    Convert between RGB, HEX, HSL, and more with ease.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all hover:shadow-md active:scale-95"
                    >
                        Try Now <ArrowRight size={18}/>
                    </Link>
                    <Link
                        href="/"
                        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-secondary/80"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    </section>)
}

export default HeroSection
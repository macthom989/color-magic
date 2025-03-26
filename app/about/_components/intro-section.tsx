import {Palette} from "lucide-react"

export default function IntroSection() {
    return (
        <section>
            <div className="mb-6 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Palette className="h-6 w-6 text-primary"/>
                    <h2 className="text-3xl font-bold tracking-tight">Color Converter</h2>
                </div>
                <p className="text-xl text-muted-foreground">
                    A modern tool for converting between color formats with precision and ease.
                </p>
            </div>

            <div className="prose prose-gray max-w-none dark:prose-invert">
                <p>
                    Color Converter is a powerful utility designed to help designers, developers, and digital artists
                    work with
                    colors more efficiently. Our tool provides instant conversion between various color formats
                    including HEX,
                    RGB, HSL, CMYK, and more.
                </p>
                <p>
                    Built with the latest web technologies including Next.js 15, Tailwind CSS v4, and TypeScript, Color
                    Converter
                    offers a seamless, responsive experience across all devices.
                </p>
            </div>
        </section>
    )
}


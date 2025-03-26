import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/contexts/theme-provider";
import Navbar from "@/components/layout/nav-bar";
import Footer from "@/components/layout/footer";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Color Converter",
    description: "Convert colors between different formats",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={inter.className}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <div
                className="grid grid-rows-[auto_1fr_auto] h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Navbar/>
                <main className="flex-1 pt-24 pb-10 container mx-auto px-4 sm:px-6 animate-fade-in">
                    {children}
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}

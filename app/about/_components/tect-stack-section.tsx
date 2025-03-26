import {Zap} from "lucide-react"

export default function TechStackSection() {
    return (
        <section>
            <h2 className="mb-6 text-2xl font-bold">Technology Stack</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary"/>
                        <h3 className="font-semibold">Frontend</h3>
                    </div>
                    <ul className="ml-7 list-disc text-muted-foreground">
                        <li>Next.js 15 with App Router</li>
                        <li>TypeScript for type safety</li>
                        <li>Tailwind CSS v4 for styling</li>
                        <li>shadcn/ui component library</li>
                        <li>React Server Components</li>
                    </ul>
                </div>

                <div className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary"/>
                        <h3 className="font-semibold">Features</h3>
                    </div>
                    <ul className="ml-7 list-disc text-muted-foreground">
                        <li>Client-side color conversion</li>
                        <li>Responsive design for all devices</li>
                        <li>Dark and light mode support</li>
                        <li>Keyboard shortcuts for power users</li>
                        <li>Offline support with PWA capabilities</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


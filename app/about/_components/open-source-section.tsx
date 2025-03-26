import {Github} from "lucide-react"
import {Button} from "@/components/ui/button"
import Link from "next/link";

export default function OpenSourceSection() {
    return (
        <section className="rounded-lg  ">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-2xl font-bold">Open Source</h2>
                <p className="max-w-2xl text-muted-foreground">
                    Color Converter is an open-source project. We welcome contributions from the community to help make
                    this tool
                    even better.
                </p>
                <Button variant="outline" className="gap-2" asChild>
                    <Link href={'https://github.com/macthom989'}>
                        <Github className="h-4 w-4"/>
                        View on GitHub
                    </Link>
                </Button>
            </div>
        </section>
    )
}


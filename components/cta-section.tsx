import {ArrowRight} from "lucide-react";
import Link from "next/link";

const CTASection = () => {
    return (<section className="py-20">
        <div className="container mx-auto">
            <div className="glass rounded-2xl p-12 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-medium mb-4">Ready to transform your color workflow?</h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    Join thousands of designers and developers who use ColorConvert daily.
                </p>
                <Link
                    href="/"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all hover:shadow-md active:scale-95"
                >
                    Get Started <ArrowRight size={18}/>
                </Link>
            </div>
        </div>
    </section>)
}

export default CTASection;
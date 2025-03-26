import {Droplet, Grid3X3, Palette, Sparkles} from "lucide-react";
import FeatureCard from "@/components/feature-card";

const FeaturesSection = () => {
    return (<section className="py-20">
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium text-center mb-16">Everything you need for color
                management</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                    icon={<Palette/>}
                    title="Color Conversion"
                    description="Convert colors between RGB, HEX, HSL, CMYK and more with precision."
                    delay="0ms"
                />
                <FeatureCard
                    icon={<Droplet/>}
                    title="Color Picker"
                    description="Extract colors from images or pick them directly from your screen."
                    delay="100ms"
                />
                <FeatureCard
                    icon={<Grid3X3/>}
                    title="Palette Generator"
                    description="Create harmonious color palettes with intelligent algorithms."
                    delay="200ms"
                />
                <FeatureCard
                    icon={<Sparkles/>}
                    title="Accessibility"
                    description="Check color contrast and ensure your designs meet WCAG standards."
                    delay="300ms"
                />
            </div>
        </div>
    </section>)
}

export default FeaturesSection;
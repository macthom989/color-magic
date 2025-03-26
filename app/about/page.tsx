'use client'

import IntroSection from "@/app/about/_components/intro-section";
import FeaturesSection from "@/app/about/_components/features-section";
import TechStackSection from "@/app/about/_components/tect-stack-section";
import OpenSourceSection from "@/app/about/_components/open-source-section";
import {Separator} from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <div className=" mx-auto  py-10 px-4 sm:px-6">
            <div className="grid gap-8">
                <IntroSection/>
                <Separator className="my-6 border-gray-300 dark:border-gray-700"/>
                <FeaturesSection/>
                <Separator className="my-6 border-gray-300 dark:border-gray-700"/>
                <TechStackSection/>
                <Separator className="my-6 border-gray-300 dark:border-gray-700"/>
                <OpenSourceSection/>
            </div>
        </div>
    );
}
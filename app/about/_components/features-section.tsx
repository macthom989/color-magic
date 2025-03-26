import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {features} from "@/app/about/_data/constants";


export default function FeaturesSection() {
    return (
        <section>
            <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

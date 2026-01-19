import { PageHeader } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
    {
        title: "Building Demolition",
        description: "We provide comprehensive demolition services for multi-story residential and commercial buildings. Our methods include high-reach mechanical excavation and controlled dismantling.",
        useCases: ["Old Apartments", "Commercial Complexes", "Dilapidated Structures"],
        safety: "Full perimeter fencing and dust suppression systems deployed.",
        image: "/services/building-demolition.webp"
    },
    {
        title: "Interior Dismantling",
        description: "Specialized interior strip-out services for renovations. We remove non-load-bearing walls, flooring, ceilings, and MEP systems while preserving the building shell.",
        useCases: ["Office Renovations", "Retail Stores", "Hotel Refurbishment"],
        safety: "Noise usage monitoring and structural integrity checks.",
        image: "/services/interior-dismantling.webp"
    },
    {
        title: "RCC Cutting",
        description: "Precision cutting of Reinforced Cement Concrete (RCC) structures using advanced diamond cutting tools. Ideal for modifications, door/window openings, and slab removal.",
        useCases: ["Core Cutting", "Slab Cutting", "Beam Removal"],
        safety: "Vibration-free methods to protect structural integrity.",
        image: "/services/rcc-cutting.webp"
    },
    {
        title: "Scrap Dismantling",
        description: "Professional dismantling of metal structures and scrapping services. We handle the dismantling of factories, sheds, and machinery with value recovery focus.",
        useCases: ["Industrial Sheds", "Old Machinery", "Metal Structures"],
        safety: "Strict hazmat handling and worker PPE compliance.",
        image: "/services/scrap-dismantling.webp"
    }
]

export const metadata = {
    title: "Demolition Services in Chennai | Aliya Demolition",
    description: "Explore our range of demolition services including building demolition, factory dismantling, and interior strip-outs."
}

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="Expert demolition solutions tailored to your project needs."
            />

            <section className="py-20 bg-white">
                <div className="container-custom space-y-24">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
                            <div className="lg:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-orange-600" /> Ideal Use Cases:
                                    </h4>
                                    <ul className="list-disc list-inside text-slate-600 ml-2">
                                        {service.useCases.map((useCase, i) => (
                                            <li key={i}>{useCase}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-slate-900 text-sm block mb-1">Safety Focus</span>
                                            <p className="text-sm text-slate-600">{service.safety}</p>
                                        </div>
                                    </div>
                                </div>

                                <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
                                    <Link href="/contact">Get a Quote for this Service</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

import { PageHeader } from "@/components/ui/PageHeader"
import Image from "next/image"
import { ShieldCheck, Target, Users } from "lucide-react"

export const metadata = {
    title: "About Us | Aliya Demolition Chennai",
    description: "Learn about Aliya Demolition, Chennai's leading demolition contractors dedicated to safety, speed, and integrity."
}

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Us"
                subtitle="Building the future by safely dismantling the past."
            />

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Aliya Demolition is a premier demolition and dismantling service provider based in Chennai. With over 15 years of industry experience, we have successfully completed hundreds of projects ranging from small residential demolitions to large-scale industrial dismantling.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our success is built on a foundation of safety, precision, and reliability. We employ advanced machinery and trained professionals to ensure every project is executed with minimal disruption and maximum efficiency.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946-499ea784137d?auto=format&fit=crop&q=80&w=800"
                                alt="Aliya Team at work"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <Target className="h-10 w-10 text-orange-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                            <p className="text-slate-600">To provide safe, eco-friendly, and cost-effective demolition solutions while adhering to the highest standards of quality and compliance.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <ShieldCheck className="h-10 w-10 text-orange-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Safety First</h3>
                            <p className="text-slate-600">Zero accidents is our goal. We implement rigorous safety protocols, regular training, and mandatory PPE for all our workforce.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <Users className="h-10 w-10 text-orange-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Skilled Team</h3>
                            <p className="text-slate-600">Our team comprises licensed engineers, experienced supervisors, and certified machine operators who understand the nuances of demolition.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

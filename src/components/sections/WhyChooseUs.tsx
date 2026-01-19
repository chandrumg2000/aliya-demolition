"use client"

import { ShieldCheck, HardHat, Clock, Wind } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
    {
        icon: ShieldCheck,
        title: "Government Licensed",
        description: "Fully compliant with local regulations and certified for hazardous demolitions."
    },
    {
        icon: HardHat,
        title: "Safety First",
        description: "Strict adherence to safety protocols ensuring zero-accident worksites."
    },
    {
        icon: Clock,
        title: "On-Time Completion",
        description: "We respect your project timelines and deliver swift, scheduled handovers."
    },
    {
        icon: Wind,
        title: "Dust Controlled",
        description: "Eco-friendly debris management with advanced dust suppression systems."
    }
]

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Why Choose Aliya?</h2>
                    <p className="text-lg text-slate-500">
                        We combine decades of experience with modern machinery to deliver the safest demolition services in Chennai.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/15 hover:border-orange-500/20 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors" />

                            <div className="relative h-14 w-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                <item.icon className="h-7 w-7" />
                            </div>
                            <h3 className="relative text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                            <p className="relative text-slate-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

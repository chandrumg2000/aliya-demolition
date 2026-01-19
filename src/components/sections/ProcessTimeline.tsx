"use client"

import { Calendar, FileText, ShieldAlert, Hammer, Recycle } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: Calendar,
        title: "1. Site Visit & Assessment",
        description: "We inspect your site to understand the structure and surroundings."
    },
    {
        icon: FileText,
        title: "2. Quote & Planning",
        description: "You receive a detailed transparent quote and method statement."
    },
    {
        icon: ShieldAlert,
        title: "3. Safety Prep",
        description: "We secure the perimeter, disconnect utilities, and obtain permits."
    },
    {
        icon: Hammer,
        title: "4. Demolition",
        description: "Controlled dismantling using manual breakdown or heavy machinery."
    },
    {
        icon: Recycle,
        title: "5. Cleanup & Handover",
        description: "Debris is cleared and recycled, leaving a clean leveled site."
    }
]

export function ProcessTimeline() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">How We Work</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">Our Process</h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-slate-100 -z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 group-hover:border-orange-500 transition-colors z-10">
                                    <step.icon className="h-6 w-6 text-slate-400 group-hover:text-orange-600 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-500">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

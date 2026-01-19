"use client"

import { ServiceCard } from "@/components/features/ServiceCard"
import { motion } from "framer-motion"

const services = [
    {
        title: "Building Demolition",
        description: "Complete structural demolition of multi-story commercial and residential buildings using advanced machinery and safety protocols.",
        imageUrl: "/services/building-demolition.webp",
        link: "/services/building-demolition"
    },
    {
        title: "Interior Dismantling",
        description: "Selective demolition for renovations, removing non-structural elements, flooring, and ceilings while preserving the shell.",
        imageUrl: "/services/interior-dismantling.webp",
        link: "/services/interior-demolition"
    },
    {
        title: "RCC Cutting",
        description: "Precision concrete breaking and cutting for modifications, slab removals, and creating openings in reinforced structures.",
        imageUrl: "/services/rcc-cutting.webp",
        link: "/services/rcc-cutting"
    },
    {
        title: "Scrap Dismantling",
        description: "Efficient dismantling of metal structures, machinery, and industrial scrap with a focus on material recovery and safety.",
        imageUrl: "/services/scrap-dismantling.webp",
        link: "/services/scrap-dismantling"
    }
]

export function ServicesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-3"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"
                    >
                        Comprehensive Demolition Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500"
                    >
                        From small residential teardowns to large-scale industrial dismantling, we have the machinery and manpower to handle it all.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

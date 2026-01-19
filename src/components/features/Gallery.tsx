"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
    {
        id: 1,
        category: "Industrial",
        title: "Car Factory Demolition",
        image: "/projects/car-factory.webp"
    },
    {
        id: 2,
        category: "Residential",
        title: "High Rise Dismantling",
        image: "/projects/high-rise.webp"
    },
    {
        id: 3,
        category: "Commercial",
        title: "Shopping Mall Renovation",
        image: "/projects/mall.webp"
    },
    {
        id: 4,
        category: "Interior",
        title: "Office Strip-out",
        image: "/projects/interior.webp"
    },
    {
        id: 5,
        category: "Industrial",
        title: "Industrial Complex",
        image: "/projects/factory.webp"
    },
    {
        id: 6,
        category: "Residential",
        title: "Old Villa Demolition",
        image: "/projects/villa.webp"
    }
]

const categories = ["All", "Residential", "Commercial", "Industrial", "Interior"]

export function Gallery() {
    const [filter, setFilter] = React.useState("All")
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <div className="space-y-10">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-bold transition-all",
                            filter === cat
                                ? "bg-orange-600 text-white shadow-lg scale-105"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={project.id}
                            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                            onClick={() => setSelectedImage(project.image)}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                                <ZoomIn className="text-white h-10 w-10 drop-shadow-md" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-transform duration-300 translate-y-0">
                                <motion.div
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</p>
                                    <p className="text-white font-bold text-lg">{project.title}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-4 right-4 text-white p-2">
                            <X className="h-8 w-8" />
                        </button>
                        <div className="relative w-full max-w-4xl h-[80vh]">
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

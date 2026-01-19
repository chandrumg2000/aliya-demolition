"use client"

import { ProjectCard } from "@/components/features/ProjectCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        title: "Old Textile Factory Demolition",
        category: "Industrial",
        location: "Ambattur Industrial Estate",
        imageUrl: "/projects/factory.webp"
    },
    {
        title: "Luxury Villa Reconstruction",
        category: "Residential",
        location: "ECR, Chennai",
        imageUrl: "/projects/villa.webp"
    },
    {
        title: "Commercial Complex Strip-out",
        category: "Commercial",
        location: "T. Nagar, Chennai",
        imageUrl: "/projects/mall.webp"
    }
]

export function FeaturedProjects() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Recent Work</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">Latest Projects</h2>
                    </div>
                    <Button asChild variant="outline" className="gap-2">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

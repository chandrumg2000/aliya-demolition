import Image from "next/image"
import { MapPin } from "lucide-react"

interface ProjectCardProps {
    title: string
    category: string
    location: string
    imageUrl: string
}

export function ProjectCard({ title, category, location, imageUrl }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/3] cursor-pointer">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2 block">{category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <div className="flex items-center text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <MapPin className="h-3 w-3 mr-1" />
                    {location}
                </div>
            </div>
        </div>
    )
}

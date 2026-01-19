import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
    title: string
    description: string
    imageUrl: string
    link: string
}

export function ServiceCard({ title, description, imageUrl, link }: ServiceCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
            </div>
            <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {description}
                </p>
                <div className="mt-auto">
                    <Link href={link} className="inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-700">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

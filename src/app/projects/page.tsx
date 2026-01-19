import { PageHeader } from "@/components/ui/PageHeader"
import { Gallery } from "@/components/features/Gallery"

export const metadata = {
    title: "Our Project Gallery | Aliya Demolition",
    description: "View our portfolio of residential, commercial, and industrial demolition projects across Chennai."
}

export default function ProjectsPage() {
    return (
        <>
            <PageHeader
                title="Our Projects"
                subtitle="A showcase of our recent demolition and dismantling work."
            />

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <Gallery />
                </div>
            </section>
        </>
    )
}

import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Property Developer",
        content: "Aliya Demolition handled our complex factory dismantling in Ambattur with extreme professionalism. They finished 2 days ahead of schedule.",
        rating: 5
    },
    {
        name: "Senthil Nathan",
        role: "Homeowner",
        content: "We hired them for demolishing our old ancestral house. They reused a lot of materials and cleared the debris perfectly. Highly recommended!",
        rating: 5
    },
    {
        name: "Priya Menon",
        role: "Architect",
        content: "Best interior strip-out team in Chennai. They were careful not to damage the structural columns during the renovation prep.",
        rating: 5
    },
    {
        name: "Karthik R.",
        role: "Construction Manager",
        content: "Safety standards are top-notch. Their team wore full PPE and followed all compliance norms. Very impressive for a local company.",
        rating: 4
    },
    {
        name: "Anand Srinivasan",
        role: "Business Owner",
        content: "Quick response and transparent pricing. No hidden charges. The site was left broom-clean after the demolition work.",
        rating: 5
    },
    {
        name: "David Johnson",
        role: "Industrial Consultant",
        content: "Reliable service for heavy machinery dismantling. Their crane operators are very skilled. Will definitely use them again.",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Client Reviews</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">What Our Clients Say</h2>
                    <p className="text-lg text-slate-500">
                        Trusted by homeowners, developers, and businesses across Chennai.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < item.rating ? "text-orange-500 fill-orange-500" : "text-slate-300"}`} />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed">"{item.content}"</p>
                            <div>
                                <h4 className="font-bold text-slate-900">{item.name}</h4>
                                <p className="text-xs text-slate-500 uppercase tracking-wide">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { ShieldCheck, HardHat, Clock, Wind } from "lucide-react"

const features = [
    {
        icon: ShieldCheck,
        title: "Government Licensed",
        desc: "Fully compliant with local regulations"
    },
    {
        icon: HardHat,
        title: "Safety First",
        desc: "Strict adherence to safety protocols"
    },
    {
        icon: Clock,
        title: "On-Time Completion",
        desc: "We respect your project timelines"
    },
    {
        icon: Wind,
        title: "Dust Controlled",
        desc: "Eco-friendly debris management"
    }
]

export function TrustBar() {
    return (
        <section className="bg-slate-50 py-12 border-b border-slate-200">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                <item.icon className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{item.title}</h3>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

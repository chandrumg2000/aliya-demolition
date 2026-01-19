import { ContactForm } from "@/components/features/ContactForm"
import { CheckCircle } from "lucide-react"

export const metadata = {
    title: "Get a Free Demolition Quote | Aliya Demolition",
    description: "Request a fast, free, and no-obligation quote for your demolition project in Chennai."
}

const benefits = [
    "Response within 30 minutes",
    "Free Site Visit & Consultation",
    "Transparent Pricing - No Hidden Costs",
    "Detailed Method Statement Included"
]

export default function QuotePage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
            {/* Visual Side */}
            <div className="lg:w-1/2 bg-slate-900 p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946-499ea784137d?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-20" />
                <div className="relative z-10">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        Ready to Start Your Project?
                    </h1>
                    <p className="text-xl text-slate-300 mb-12">
                        Get the most reliable demolition team in Chennai on your side. Safe, fast, and compliant.
                    </p>

                    <ul className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-4 text-lg">
                                <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                                    <CheckCircle className="h-5 w-5 text-white" />
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-6 lg:p-12 flex items-center justify-center bg-white">
                <div className="w-full max-w-lg">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

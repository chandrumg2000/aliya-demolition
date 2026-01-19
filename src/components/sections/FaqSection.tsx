"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "Do you provide demolition services all over Chennai?",
        answer: "Yes, we cover all areas in and around Chennai, including OMR, ECR, Anna Nagar, T. Nagar, Tambaram, and industrial zones like Ambattur and Guindy."
    },
    {
        question: "Is your demolition process safe and insured?",
        answer: "Absolutely. Safety is our top priority. We follow strict safety protocols, provide PPE to our workers, and carry comprehensive liability insurance for all projects."
    },
    {
        question: "How much does demolition cost in Chennai?",
        answer: "Costs vary based on the building size, structure type (concrete vs. brick), and location. We offer a free site visit and obligation-free quote to give you an accurate estimate."
    },
    {
        question: "Do you handle debris removal and disposal?",
        answer: "Yes, we handle the complete lifecycle including debris removal. We transport waste to authorized dumping grounds and recycle materials wherever possible."
    },
    {
        question: "How long does it take to demolish a house?",
        answer: "A standard independent house can typically be demolished in 3-5 days, including site clearance. Larger commercial buildings will take longer based on complexity."
    },
    {
        question: "Do I need to get permission for demolition?",
        answer: "Yes, a demolition permit from the local municipal corporation is usually required. We can guide you through the process or assist in obtaining the necessary approvals."
    },
    {
        question: "Can you demolish a building without damaging the neighbor's property?",
        answer: "Yes, we specialize in controlled demolition. We use manual dismantling techniques near shared walls and install protective screens to prevent damage to neighboring properties."
    },
    {
        question: "Do you buy old building materials (salvage value)?",
        answer: "Yes, we assess the value of salvageable materials like steel, wood, and doors/windows. This value is often deducted from the total demolition cost, saving you money."
    }
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0)

    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-500">
                        Everything you need to know about our demolition services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-200"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "h-5 w-5 text-slate-500 transition-transform duration-200",
                                        openIndex === index && "transform rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

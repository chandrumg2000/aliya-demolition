import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"

export function CtaBanner() {
    return (
        <section className="py-20 bg-orange-600">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 max-w-4xl mx-auto leading-tight">
                    Need Demolition Work in Chennai?<br />
                    <span className="text-orange-100">Get a Quote in 30 Minutes!</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-white text-orange-600 hover:bg-slate-100 border-none shadow-xl">
                        <Link href="https://wa.me/+917358742214?text=Hey%20there">
                            Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg bg-orange-700 text-white border-orange-500 hover:bg-orange-800 shadow-xl">
                        <Link href="tel:+917358742214">
                            <Phone className="mr-2 h-5 w-5" />
                            Call +91 73587 42214
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

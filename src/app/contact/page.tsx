import { PageHeader } from "@/components/ui/PageHeader"
import { ContactForm } from "@/components/features/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
    title: "Contact Us | Aliya Demolition",
    description: "Get a free quote for demolition services in Chennai. Call us or send an inquiry online."
}

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch for a free site visit and quote."
            />

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Info & Map */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Have a demolition project in mind? Reach out to us for expert advice and competitive pricing. We are available 24/7 for emergency services.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Phone</h4>
                                            <p className="text-slate-600">+91 73587 42214</p>
                                            <p className="text-slate-600 text-sm mt-1">+91 80727 84865</p>
                                            <p className="text-slate-500 text-sm">Mon-Sat 8am to 8pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Email</h4>
                                            <p className="text-slate-600">info@aliyademolition.com</p>
                                            <p className="text-slate-500 text-sm">Online support 24x7</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Office Location</h4>
                                            <p className="text-slate-600">
                                                No.8 Lenin Nagar 5th cross street,<br />
                                                Ambattur, Chennai 600053
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Embedded Map */}
                            <div className="h-80 w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.9702283008!2d80.20786566977539!3d13.004051650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526786c26783d1%3A0x6b443586aa0b4578!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705574000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

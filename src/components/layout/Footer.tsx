import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-5">
                            <div className="relative h-24 w-24">
                                <Image
                                    src="/logo.webp"
                                    alt="Aliya Demolition Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-extrabold tracking-tight text-white uppercase">Aliya</span>
                                <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase">Demolition</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Chennai's most trusted demolition and dismantling service provider. Safety, speed, and compliance are our core values.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-orange-500 transition-colors"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-orange-500 transition-colors">All Services</Link></li>
                            <li><Link href="/projects" className="hover:text-orange-500 transition-colors">Our Projects</Link></li>
                            <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPin className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                                <span>
                                    No.8 Lenin Nagar 5th cross street,<br />
                                    Ambattur, Chennai 600053<br />
                                    Tamil Nadu, India
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="h-5 w-5 text-orange-600 shrink-0" />
                                <div className="flex flex-col">
                                    <span>+91 73587 42214</span>
                                    <span>+91 80727 84865</span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="h-5 w-5 text-orange-600 shrink-0" />
                                <span>info@aliyademolition.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Business Hours</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center justify-between">
                                <span>Mon - Sat:</span>
                                <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Sunday:</span>
                                <span className="text-white font-medium">Closed</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-800">
                            <div className="flex gap-2 text-orange-500 mb-1">
                                <Clock className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase">Emergency Service</span>
                            </div>
                            <p className="text-xs text-slate-400">Available 24/7 for urgent demolition requirements.</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 mt-16 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Aliya Demolition Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

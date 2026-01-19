"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
            <div className="container-custom flex h-28 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-5">
                    <div className="relative h-24 w-24">
                        <Image
                            src="/logo.webp"
                            alt="Aliya Demolition Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">Aliya</span>
                        <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase">Demolition</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-bold uppercase tracking-wide transition-colors hover:text-orange-600",
                                pathname === link.href ? "text-orange-600" : "text-slate-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" size="sm" className="gap-2 hidden lg:flex border-orange-600 text-orange-600 hover:bg-orange-50">
                        <Phone className="h-4 w-4" />
                        <span>+91 73587 42214</span>
                    </Button>
                    <Button asChild size="sm" className="gap-2">
                        <Link href="https://wa.me/+917358742214?text=Hey%20there">
                            <MessageCircle className="h-4 w-4" />
                            <span>Get Quote</span>
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t bg-white"
                    >
                        <div className="container-custom py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block py-2 text-lg font-bold uppercase tracking-wide",
                                            pathname === link.href ? "text-orange-600" : "text-slate-600"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <hr className="my-2" />
                            <Button asChild className="w-full gap-2 text-lg h-12">
                                <Link href="tel:+917358742214">
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </Link>
                            </Button>
                            <Button asChild variant="secondary" className="w-full gap-2 text-lg h-12">
                                <Link href="https://wa.me/+917358742214?text=Hey%20there">
                                    <MessageCircle className="h-5 w-5" />
                                    WhatsApp Quote
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

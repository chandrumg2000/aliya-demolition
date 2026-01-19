"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for Hero Image - In production use next/image */}
                <div className="w-full h-full bg-[url('/hero-banner.webp')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
            </div>

            <div className="container-custom relative z-10 pt-12 pb-20 lg:pt-20 lg:pb-28 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="max-w-3xl lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400 mb-6 backdrop-blur-sm"
                        >
                            <ShieldCheck className="h-4 w-4" />
                            <span>Top-Rated Licensed Demolition Experts in Chennai</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
                        >
                            Safe & Professional <br />
                            <span className="text-orange-500">Demolition Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
                        >
                            From residential buildings to industrial factories, we deliver fast, dust-controlled, and compliant demolition solutions across Chennai.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button asChild size="lg" className="text-lg gap-2 h-14 px-8 bg-orange-600 hover:bg-orange-700 border-none shadow-lg shadow-orange-900/20">
                                <Link href="https://wa.me/+917358742214?text=Hey%20there">
                                    <MessageCircle className="h-5 w-5" />
                                    Get Free Quote
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-lg gap-2 h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                                <Link href="tel:+917358742214">
                                    <Phone className="h-5 w-5" />
                                    Call +91 73587 42214
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 text-sm font-medium text-slate-400"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Government Licensed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Insurance Coverage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span>On-Time Completion</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated Image */}
                    <div className="relative mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-orange-500/20 w-full max-w-lg mx-auto aspect-square lg:aspect-[5/4]"

                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                                <Image
                                    src="/hero-side-image.webp"
                                    alt="Demolition Work in Progress"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Decorative Background Elements */}
                            <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

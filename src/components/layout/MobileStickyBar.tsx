"use client"

import { Phone, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export function MobileStickyBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between safe-area-bottom">
            <Link href="tel:+917358742214" className="flex flex-col items-center justify-center flex-1 py-3 text-slate-700 hover:bg-slate-50 active:bg-slate-100 border-r border-slate-100">
                <Phone className="h-5 w-5 mb-1 text-slate-600" />
                <span className="text-xs font-bold uppercase">Call Now</span>
            </Link>
            <Link href="https://wa.me/+917358742214?text=Hey%20there" className="flex flex-col items-center justify-center flex-1 py-3 text-green-600 hover:bg-green-50 active:bg-green-100 border-r border-slate-100">
                <MessageCircle className="h-5 w-5 mb-1" />
                <span className="text-xs font-bold uppercase">WhatsApp</span>
            </Link>
            <Link href="/contact" className="flex flex-col items-center justify-center flex-1 py-3 text-orange-600 hover:bg-orange-50 active:bg-orange-100 bg-orange-50/50">
                <FileText className="h-5 w-5 mb-1" />
                <span className="text-xs font-bold uppercase">Get Quote</span>
            </Link>
        </div>
    )
}

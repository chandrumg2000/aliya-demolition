import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-slate-50 text-center px-4">
            <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">Page Not Found</h2>
            <p className="text-slate-500 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex gap-4">
                <Button asChild size="lg">
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
    )
}

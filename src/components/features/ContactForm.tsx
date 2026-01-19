"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    service: z.string().min(1, "Please select a service"),
    location: z.string().min(2, "Please enter the location"),
    message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Something went wrong. Please try again.")
            }

            setIsSuccess(true)
            reset()
        } catch (err) {
            setError("Failed to submit inquiry. Please call us directly.")
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Request Received!</h3>
                <p className="text-green-700 mb-6">
                    Thank you for reaching out. Our team will call you shortly to discuss your demolition requirement.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="text-green-700 border-green-200 hover:bg-green-100">
                    Send Another Request
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Get a Free Quote</h3>
            <p className="text-slate-500 mb-6 text-sm">Fill out the form below and we'll get back to you within 30 minutes.</p>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                        id="name"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Enter your mobile number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                    <select
                        id="service"
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                    >
                        <option value="">Select a service...</option>
                        <option value="building-demolition">Building Demolition</option>
                        <option value="house-demolition">House Demolition</option>
                        <option value="factory-demolition">Factory/Industrial Demolition</option>
                        <option value="interior-demolition">Interior Strip-Out</option>
                        <option value="debris-removal">Debris Removal</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Project Location</label>
                    <input
                        id="location"
                        {...register("location")}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="e.g. Anna Nagar, Chennai"
                    />
                    {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Details (Optional)</label>
                    <textarea
                        id="message"
                        {...register("message")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                        placeholder="Briefly describe your project..."
                    />
                </div>
            </div>

            {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}

            <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg font-bold">
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Get Free Quote"
                )}
            </Button>

            <p className="text-xs text-center text-slate-400 mt-4">
                Your data is secure. We never spam.
            </p>
        </form>
    )
}

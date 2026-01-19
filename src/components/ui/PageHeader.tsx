export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="bg-slate-900 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent" />
            <div className="container-custom relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-slate-300 max-w-2xl">{subtitle}</p>}
            </div>
        </div>
    )
}

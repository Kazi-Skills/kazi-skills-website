const stats = [
    { val: '1,284+', label: 'Active Learners', sub: 'Across Uganda' },
    { val: '47', label: 'Live Courses', sub: '5 categories' },
    { val: 'UGX 4.2M', label: 'Creator Earnings', sub: 'This month' },
    { val: '4.9★', label: 'App Rating', sub: 'From learners' },
]

export default function Stats() {
    return (
        <section className="py-16 border-y border-white/10 bg-black/40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(s => (
                        <div key={s.label} className="text-center">
                            <div className="text-3xl lg:text-4xl font-black gradient-text mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
                                {s.val}
                            </div>
                            <div className="text-white font-semibold text-sm">{s.label}</div>
                            <div className="text-white/40 text-xs mt-0.5">{s.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

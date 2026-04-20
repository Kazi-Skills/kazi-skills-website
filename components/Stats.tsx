const stats = [
    { val: '1,284+', label: 'Active Learners', sub: 'Across Uganda' },
    { val: '47', label: 'Live Courses', sub: '5 categories' },
    { val: 'UGX 4.2M', label: 'Creator Earnings', sub: 'This month' },
    { val: '4.9', label: 'App Rating', sub: 'From learners' },
]

export default function Stats() {
    return (
        <section className="py-32 lg:py-48 bg-gray-50 relative overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div key={s.label} className="relative p-8 glass rounded-[32px] border border-gray-100 modern-shadow-hover group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <div className="w-16 h-16 rounded-full bg-purple-600" />
                            </div>
                            <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {s.val}
                            </div>
                            <div className="text-purple-600 font-extrabold text-sm uppercase tracking-wider mb-1">{s.label}</div>
                            <div className="text-gray-500 text-sm font-medium">{s.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

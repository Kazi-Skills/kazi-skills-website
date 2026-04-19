const testimonials = [
    {
        name: 'Brenda Nakato',
        role: 'Beauty Entrepreneur · Kampala',
        initials: 'BN',
        text: 'I watched the makeup course on a Sunday. By Wednesday I had my first paying client. Kazi Skills changed everything for me.',
        earn: 'Now earning UGX 450K/month',
        color: 'from-pink-600 to-rose-500',
    },
    {
        name: 'Trevor Byaruhanga',
        role: 'Social Media Manager · Kampala',
        initials: 'TB',
        text: 'The pitch template in the Social Media course alone was worth 10x the price. I landed my first client 3 days after watching.',
        earn: 'Now earning UGX 800K/month',
        color: 'from-blue-600 to-blue-500',
    },
    {
        name: 'Grace Apio',
        role: 'Urban Farmer · Ntinda',
        initials: 'GA',
        text: 'Started with tomatoes on my balcony after the Green Skills course. Now I supply 3 restaurants in Ntinda every week.',
        earn: 'Now earning UGX 380K/month',
        color: 'from-green-600 to-emerald-500',
    },
    {
        name: 'Sandra Kiconco',
        role: 'AI Consultant · Kampala',
        initials: 'SK',
        text: 'I use AI to write all my client proposals now. My conversion rate doubled and I work half the hours I used to.',
        earn: 'Saves 10+ hours per week',
        color: 'from-violet-600 to-purple-500',
    },
]

export default function Testimonials() {
    return (
        <section id="about" className="py-24 bg-[#0D0520]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                        Real People. <span className="gradient-text">Real Income.</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Over 1,284 Ugandans are already earning from skills they learned on Kazi Skills.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-black text-white text-sm`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{t.name}</div>
                                    <div className="text-white/40 text-xs">{t.role}</div>
                                </div>
                                <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">"{t.text}"</p>
                            <div className="text-green-400 text-xs font-bold bg-green-400/10 px-3 py-1.5 rounded-full inline-block">
                                💰 {t.earn}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

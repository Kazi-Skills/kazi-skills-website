const steps = [
    {
        num: '01',
        icon: '📲',
        title: 'Download the App',
        desc: 'Get Kazi Skills free on Android. Sign up in 30 seconds — no credit card needed.',
        color: 'from-purple-600 to-purple-400',
    },
    {
        num: '02',
        icon: '🎯',
        title: 'Pick Your Skill',
        desc: 'Browse 47+ courses across Beauty, Digital, Food Business, Green Skills, and AI & Tech.',
        color: 'from-blue-600 to-blue-400',
    },
    {
        num: '03',
        icon: '🎓',
        title: 'Watch & Learn',
        desc: '5–15 minute videos designed for your phone. Watch offline, learn at your own pace.',
        color: 'from-teal-600 to-teal-400',
    },
    {
        num: '04',
        icon: '💰',
        title: 'Start Earning',
        desc: 'Apply your skills, log your income, and track your progress toward financial freedom.',
        color: 'from-green-600 to-green-400',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
                        <span className="text-purple-400 text-xs font-semibold tracking-wide uppercase">Simple Process</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        From zero to earning in 4 simple steps. No experience needed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                {step.icon}
                            </div>
                            <div className="text-purple-400/50 text-xs font-black mb-2 tracking-widest">{step.num}</div>
                            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                                {step.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

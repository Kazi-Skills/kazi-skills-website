const steps = [
    {
        num: '01',
        title: 'Download the App',
        desc: 'Get Kazi Skills free on Android. Sign up in 30 seconds — no credit card needed.',
        color: 'bg-purple-100 text-purple-700',
    },
    {
        num: '02',
        title: 'Pick Your Skill',
        desc: 'Browse courses across Beauty, Digital, Food Business, Green Skills, and AI & Tech.',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        num: '03',
        title: 'Watch & Learn',
        desc: '5–15 minute videos designed for your phone. Watch offline, learn at your own pace.',
        color: 'bg-violet-100 text-violet-700',
    },
    {
        num: '04',
        title: 'Start Earning',
        desc: 'Apply your skills, log your income, and track your progress toward financial freedom.',
        color: 'bg-green-100 text-green-700',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-40 lg:py-60 bg-white relative scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="section-label">Simple Process</div>
                        <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]" style={{ fontFamily: 'Syne, sans-serif' }}>
                            From zero to earning in <span className="gradient-text">4 steps.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xl max-w-sm mb-2 font-medium">
                        No prior experience needed. We provide the tools, you provide the hustle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-16 left-0 w-full h-px bg-gray-100 -z-10" />
                    
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center font-black text-3xl mb-8 modern-shadow transition-transform group-hover:-translate-y-2 group-hover:rotate-3`} style={{ fontFamily: 'Syne, sans-serif' }}>
                                {step.num}
                            </div>
                            <h3 className="text-gray-900 font-extrabold text-2xl mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-medium">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

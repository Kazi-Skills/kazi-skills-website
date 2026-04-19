export default function Hero() {
    return (
        <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — Copy */}
                <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span className="text-teal-400 text-xs font-semibold tracking-wide uppercase">Now Live in Uganda 🇺🇬</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
                        Learn a Skill.{' '}
                        <span className="gradient-text">Start Earning.</span>
                    </h1>

                    <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg">
                        Uganda's AI-powered micro-learning marketplace. Watch 5–15 minute skill videos from local creators and start earning income from your phone today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="#download"
                            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 animate-pulse-glow text-center">
                            Download Free App
                        </a>
                        <a href="#how-it-works"
                            className="glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all text-center">
                            See How It Works →
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-2">
                            {['AB', 'NK', 'TM', 'PK'].map((init, i) => (
                                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 border-2 border-black flex items-center justify-center text-xs font-bold text-white">
                                    {init}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">1,284+ learners</div>
                            <div className="text-white/50 text-xs">already earning from their skills</div>
                        </div>
                    </div>
                </div>

                {/* Right — Phone mockup */}
                <div className="flex justify-center lg:justify-end animate-float">
                    <div className="relative">
                        {/* Phone frame */}
                        <div className="w-72 h-[580px] bg-gradient-to-b from-[#1A0A2E] to-[#0A0A0A] rounded-[44px] border border-white/20 shadow-2xl shadow-purple-900/50 overflow-hidden relative">
                            {/* Status bar */}
                            <div className="flex justify-between items-center px-6 pt-4 pb-2">
                                <span className="text-white/60 text-xs">9:41</span>
                                <div className="w-24 h-5 bg-black rounded-full" />
                                <div className="flex gap-1">
                                    <div className="w-4 h-2 bg-white/60 rounded-sm" />
                                    <div className="w-1.5 h-2 bg-white/60 rounded-sm" />
                                </div>
                            </div>

                            {/* App header */}
                            <div className="px-5 py-3 flex items-center justify-between">
                                <span className="text-purple-400 font-black text-base" style={{ fontFamily: 'var(--font-syne)' }}>KAZI SKILLS</span>
                                <div className="w-8 h-8 rounded-full bg-purple-900/60 flex items-center justify-center">
                                    <span className="text-sm">🔔</span>
                                </div>
                            </div>

                            {/* Hero banner */}
                            <div className="mx-4 rounded-2xl bg-gradient-to-br from-purple-800 to-purple-600 p-4 mb-4">
                                <div className="text-white/70 text-xs mb-1">Good morning 👋</div>
                                <div className="text-white font-black text-lg mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Level Up Today</div>
                                <div className="text-white/60 text-xs">5–15 min skill videos</div>
                            </div>

                            {/* Course cards */}
                            {[
                                { cat: 'Beauty', title: 'Makeup for African Skin', price: '15K', color: 'from-pink-500 to-rose-600' },
                                { cat: 'Digital', title: 'Social Media Management', price: '25K', color: 'from-blue-500 to-blue-700' },
                                { cat: 'AI & Tech', title: 'ChatGPT to Cash', price: '30K', color: 'from-violet-500 to-purple-700' },
                            ].map((c, i) => (
                                <div key={i} className="mx-4 mb-3 bg-white/5 rounded-xl overflow-hidden flex">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                                        {i === 0 ? '💄' : i === 1 ? '📱' : '🤖'}
                                    </div>
                                    <div className="p-2.5 flex-1">
                                        <div className="text-purple-400 text-[9px] font-bold uppercase tracking-wide">{c.cat}</div>
                                        <div className="text-white text-xs font-bold leading-tight">{c.title}</div>
                                        <div className="text-green-400 text-xs font-bold mt-0.5">UGX {c.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -left-12 top-20 glass rounded-2xl px-3 py-2 text-xs font-bold text-white whitespace-nowrap">
                            ⭐ 4.9 Rating
                        </div>
                        <div className="absolute -right-10 bottom-32 glass rounded-2xl px-3 py-2 text-xs font-bold text-green-400 whitespace-nowrap">
                            💰 UGX 500K/mo
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

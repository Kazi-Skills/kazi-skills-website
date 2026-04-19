const cats = [
    { icon: '💄', name: 'Beauty & Makeup', courses: 18, earn: 'UGX 200K–500K/mo', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30' },
    { icon: '💻', name: 'Digital Hustles', courses: 16, earn: 'UGX 400K–1M/mo', color: 'from-blue-500/20 to-blue-700/20', border: 'border-blue-500/30' },
    { icon: '🍰', name: 'Food Business', courses: 13, earn: 'UGX 300K–800K/mo', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30' },
    { icon: '🌱', name: 'Green Skills', courses: 6, earn: 'UGX 200K–600K/mo', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30' },
    { icon: '🤖', name: 'AI & Tech', courses: 8, earn: 'Save 10h/week', color: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/30' },
]

export default function Categories() {
    return (
        <section id="categories" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#0D0520]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                        Skills That <span className="gradient-text">Pay</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Every category is chosen for its income potential in the Ugandan market.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cats.map((cat, i) => (
                        <div key={i} className={`glass rounded-2xl p-6 border ${cat.border} hover:scale-105 transition-all cursor-pointer group`}>
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl mb-4`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'var(--font-syne)' }}>
                                {cat.name}
                            </h3>
                            <p className="text-white/40 text-sm mb-3">{cat.courses} courses available</p>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 text-xs font-bold bg-green-400/10 px-3 py-1 rounded-full">
                                    💰 {cat.earn}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* CTA card */}
                    <div className="glass rounded-2xl p-6 border border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex flex-col justify-between">
                        <div>
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                                Are you a Creator?
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Upload your skills, set your price, and earn 85% of every sale. We handle the rest.
                            </p>
                        </div>
                        <a href="#download" className="mt-6 bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-xl text-sm font-bold text-center transition-all block">
                            Start Creating →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

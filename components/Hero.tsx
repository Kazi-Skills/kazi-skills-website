import Image from 'next/image'

export default function Hero() {
    return (
        <section className="pt-24 pb-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Copy */}
                    <div className="animate-fade-up">
                        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-purple-700 text-xs font-semibold tracking-wide uppercase">Now Live in Uganda</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>
                            Learn a Skill.{' '}
                            <span className="gradient-text">Start Earning.</span>
                        </h1>

                        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                            Uganda's AI-powered micro-learning marketplace. Watch 5–15 minute skill videos from local creators and start earning income from your phone today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="#download"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all text-center animate-pulse-glow">
                                Download Free App
                            </a>
                            <a href="#how-it-works"
                                className="border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-base transition-all text-center">
                                See How It Works
                            </a>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {['AB', 'NK', 'TM', 'PK'].map((init, i) => (
                                    <div key={i} className="w-9 h-9 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                                        {init}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="text-gray-900 font-bold text-sm">1,284+ learners</div>
                                <div className="text-gray-400 text-xs">already earning from their skills</div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Phone mockup */}
                    <div className="flex justify-center lg:justify-end animate-float">
                        <div className="relative">
                            {/* Glow behind phone */}
                            <div className="absolute inset-0 bg-purple-200 rounded-[44px] blur-3xl opacity-40 scale-90" />

                            {/* Phone frame */}
                            <div className="relative w-72 h-[560px] bg-gray-900 rounded-[44px] border-4 border-gray-800 shadow-2xl overflow-hidden">
                                {/* Status bar */}
                                <div className="flex justify-between items-center px-6 pt-4 pb-2">
                                    <span className="text-white/60 text-xs">9:41</span>
                                    <div className="w-20 h-4 bg-gray-800 rounded-full" />
                                    <div className="flex gap-1">
                                        <div className="w-4 h-2 bg-white/50 rounded-sm" />
                                        <div className="w-1.5 h-2 bg-white/50 rounded-sm" />
                                    </div>
                                </div>

                                {/* App header with logo */}
                                <div className="px-5 py-2 flex items-center justify-between bg-gray-900">
                                    <Image src="/logo.png" alt="Kazi Skills" width={80} height={26} className="object-contain" />
                                    <div className="w-7 h-7 rounded-full bg-purple-900/60 flex items-center justify-center">
                                        <div className="w-3 h-3 border-2 border-purple-400 rounded-full" />
                                    </div>
                                </div>

                                {/* Hero banner */}
                                <div className="mx-4 rounded-2xl bg-purple-700 p-4 mb-4">
                                    <div className="text-purple-200 text-xs mb-1">Good morning</div>
                                    <div className="text-white font-black text-base mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Level Up Today</div>
                                    <div className="text-purple-200 text-xs">5–15 min skill videos</div>
                                </div>

                                {/* Course cards */}
                                {[
                                    { cat: 'Beauty', title: 'Makeup for African Skin', price: '15K', bg: 'bg-pink-600' },
                                    { cat: 'Digital', title: 'Social Media Management', price: '25K', bg: 'bg-blue-600' },
                                    { cat: 'AI & Tech', title: 'ChatGPT to Cash', price: '30K', bg: 'bg-violet-600' },
                                ].map((c, i) => (
                                    <div key={i} className="mx-4 mb-3 bg-white/5 rounded-xl overflow-hidden flex">
                                        <div className={`w-14 h-14 ${c.bg} flex items-center justify-center flex-shrink-0`}>
                                            <div className="w-6 h-6 bg-white/30 rounded-md" />
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
                            <div className="absolute -left-14 top-20 bg-white border border-gray-200 shadow-lg rounded-2xl px-3 py-2 text-xs font-bold text-gray-800 whitespace-nowrap">
                                4.9 Rating
                            </div>
                            <div className="absolute -right-12 bottom-32 bg-white border border-gray-200 shadow-lg rounded-2xl px-3 py-2 text-xs font-bold text-green-600 whitespace-nowrap">
                                UGX 500K/mo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

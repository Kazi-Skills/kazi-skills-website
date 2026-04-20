import FlipButton from './FlipButton'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-56 bg-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-purple-50 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:pr-16 lg:pl-28">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    {/* Left — Copy */}
                    <div className="relative z-10 flex flex-col items-start pl-3 sm:pl-6 lg:pl-10 lg:ml-6">
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.2] text-gray-900 tracking-tight mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
                            Learn a Skill.<br />
                            <span className="gradient-text">Start Earning.</span>
                        </h1>

                        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-xl font-medium tracking-wide">
                            The AI-powered micro-learning marketplace for the next generation of Ugandan creators.
                        </p>

                        <div className="h-16 lg:h-20" />

                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <FlipButton 
                                text1="Download App" 
                                text2="Download app" 
                                href="#download" 
                            />
                            <FlipButton 
                                text1="How It Works" 
                                text2="How it works" 
                                href="#how-it-works" 
                                primary={false}
                            />
                        </div>
                    </div>

                    {/* Right — Phone mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Decorative rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-100 rounded-full -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-purple-50 rounded-full -z-10" />

                        <div className="relative animate-float">
                            {/* Glow behind phone */}
                            <div className="absolute inset-0 bg-purple-400 rounded-[60px] blur-[100px] opacity-20 scale-110" />

                            {/* Phone frame */}
                            <div className="relative w-80 h-[640px] bg-gray-950 rounded-[54px] border-[8px] border-gray-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                                {/* Dynamic Island */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-2xl z-20" />

                                {/* Status bar */}
                                <div className="flex justify-between items-center px-10 pt-8 pb-4">
                                    <span className="text-white/80 text-sm font-bold">9:41</span>
                                    <div className="flex gap-2">
                                        <div className="w-5 h-2.5 bg-white/40 rounded-sm" />
                                        <div className="w-2.5 h-2.5 bg-white/40 rounded-sm" />
                                    </div>
                                </div>

                                {/* App content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-purple-400 font-black text-lg tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>KAZI</span>
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-purple-400 rounded-full" />
                                        </div>
                                    </div>

                                    <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 p-6 mb-8 shadow-xl">
                                        <div className="text-purple-200 text-sm font-medium mb-1">Good morning</div>
                                        <div className="text-white font-black text-2xl mb-1 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>Ready to<br />Level Up?</div>
                                        <div className="text-purple-100 text-sm opacity-80 mt-2">5–15 min skill videos</div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { cat: 'Beauty', title: 'Makeup Artistry', bg: 'from-pink-500 to-rose-600' },
                                            { cat: 'Digital', title: 'Content Creation', bg: 'from-blue-500 to-cyan-600' },
                                            { cat: 'AI & Tech', title: 'AI for Business', bg: 'from-violet-500 to-purple-600' },
                                        ].map((c, i) => (
                                            <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden flex items-center p-2 pr-6 border border-white/5 shadow-lg">
                                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center flex-shrink-0 shadow-inner`}>
                                                    <div className="w-6 h-6 bg-white/20 rounded-lg" />
                                                </div>
                                                <div className="ml-4 flex-1">
                                                    <div className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-0.5">{c.cat}</div>
                                                    <div className="text-white text-[14px] font-bold leading-tight">{c.title}</div>
                                                </div>
                                                <div className="text-purple-400 text-[12px] font-black uppercase tracking-widest">Enroll</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Download() {
    return (
        <section id="download" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-purple-900/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-6 text-center relative">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">Free to Download</span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                    Start Your Journey{' '}
                    <span className="gradient-text">Today</span>
                </h2>

                <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join 1,284+ Ugandans already learning and earning. Download Kazi Skills free on Android.
                </p>

                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    {/* Play Store */}
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 glass hover:bg-white/10 border border-white/20 hover:border-purple-500/50 px-6 py-4 rounded-2xl transition-all group"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z" fill="url(#play-grad)" />
                                <defs>
                                    <linearGradient id="play-grad" x1="3" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#A78BFA" />
                                        <stop offset="1" stopColor="#7C3AED" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="text-left">
                            <div className="text-white/50 text-xs">Get it on</div>
                            <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>Google Play</div>
                        </div>
                    </a>

                    {/* APK Direct */}
                    <a
                        href="#"
                        className="flex items-center gap-4 bg-purple-600 hover:bg-purple-500 px-6 py-4 rounded-2xl transition-all group animate-pulse-glow"
                    >
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                            📱
                        </div>
                        <div className="text-left">
                            <div className="text-purple-200 text-xs">Direct Download</div>
                            <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>Download APK</div>
                        </div>
                    </a>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                    {[
                        { icon: '🆓', label: 'Free to download' },
                        { icon: '📶', label: 'Works offline' },
                        { icon: '🇺🇬', label: 'Made for Uganda' },
                    ].map(f => (
                        <div key={f.label} className="text-center">
                            <div className="text-2xl mb-2">{f.icon}</div>
                            <div className="text-white/50 text-xs font-medium">{f.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

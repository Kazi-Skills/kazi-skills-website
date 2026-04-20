import FlipButton from './FlipButton'

export default function Download() {
    return (
        <section id="download" className="py-32 bg-gray-900 relative overflow-hidden scroll-mt-20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-20" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 mb-10 shadow-xl">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-white text-xs font-black tracking-[0.2em] uppercase">Free to Download</span>
                </div>

                <h2 className="text-6xl lg:text-8xl font-black text-white mb-10 leading-[1.05] tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Start Your <span className="gradient-text">Journey</span> Today
                </h2>

                <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                    Start learning and earning today. Your skills are your currency.
                </p>

                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
                    <FlipButton 
                        text1="Google Play Store" 
                        text2="Install Android App" 
                        href="https://play.google.com/store"
                        className="!rounded-[32px] !py-8 !px-12"
                        primary={false}
                    />
                    <FlipButton 
                        text1="Download APK" 
                        text2="Direct Download" 
                        href="#"
                        className="!rounded-[32px] !py-8 !px-12"
                    />
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    {[
                        { label: 'Free Forever', icon: 'M12 8v4l3 3' },
                        { label: 'Works Offline', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3' },
                        { label: 'Local Creators', icon: 'M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z' },
                    ].map(f => (
                        <div key={f.label} className="text-center group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[24px] mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-600/50 transition-all duration-300">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-400 group-hover:text-purple-300" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d={f.icon} strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="text-gray-400 text-sm font-black tracking-wide">{f.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

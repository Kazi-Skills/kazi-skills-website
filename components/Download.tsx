'use client'
import { motion } from 'framer-motion'
import FlipButton from './FlipButton'

export default function Download() {
    return (
        <section id="download" className="py-24 lg:py-40 bg-[#050505] relative overflow-hidden scroll-mt-20">
            {/* Massive background glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2.5 mb-10 shadow-2xl">
                        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.5)]"></span>
                        <span className="text-white text-xs font-black tracking-[0.2em] uppercase">Free to Download</span>
                    </div>

                    <h2 className="text-4xl lg:text-7xl font-black text-white mb-10 leading-[1] tracking-[-0.05em]" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Ready to <span className="gradient-text italic">Level Up?</span>
                    </h2>

                    <p className="text-gray-400 text-lg lg:text-xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                        Join 5,000+ creators in Uganda building their future, one skill at a time.
                    </p>

                    {/* Download buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
                        <FlipButton 
                            text1="Google Play Store" 
                            text2="Install for Android" 
                            href="https://play.google.com/store"
                            className="rounded-[24px]! py-7! px-12! text-lg!"
                            primary={true}
                        />
                        <FlipButton 
                            text1="Download APK" 
                            text2="Direct Download" 
                            href="#"
                            className="rounded-[24px]! py-7! px-12! text-lg!"
                            primary={false}
                        />
                    </div>

                    {/* Features Bento */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { label: 'Free Forever', sub: 'No hidden costs', icon: '💎' },
                            { label: 'Offline Ready', sub: 'Learn without data', icon: '📶' },
                            { label: 'Local Experts', sub: 'Ugandan creators', icon: '🇺🇬' },
                        ].map((f, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                key={f.label} 
                                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-colors duration-500"
                            >
                                <div className="text-3xl mb-4">{f.icon}</div>
                                <div className="text-white text-lg font-black mb-1">{f.label}</div>
                                <div className="text-gray-500 font-medium">{f.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

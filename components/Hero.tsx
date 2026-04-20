'use client'
import { motion } from 'framer-motion'
import FlipButton from './FlipButton'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left — Copy */}
                    <div className="lg:col-span-7 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center gap-3 bg-purple-50 border border-purple-100 px-5 py-2.5 rounded-full mb-10 shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                                <span className="text-purple-700 text-xs font-black tracking-[0.15em] uppercase">Now Live in Uganda</span>
                            </div>

                            <h1 className="text-5xl lg:text-8xl font-black leading-[0.95] text-gray-900 tracking-[-0.04em] mb-10" style={{ fontFamily: 'Syne, sans-serif' }}>
                                Learn a Skill.<br />
                                <span className="gradient-text italic">Start Earning.</span>
                            </h1>

                            <p className="text-gray-500 text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium mb-16">
                                The AI-powered micro-learning marketplace for the next generation of Ugandan creators. 5–15 min lessons. Real world results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 items-start">
                                <FlipButton 
                                    text1="Download App" 
                                    text2="Join 5,000+ others" 
                                    href="#download" 
                                    className="rounded-[28px]! py-7! px-12! text-xl!"
                                />
                                <a href="#how-it-works" className="group flex items-center gap-4 text-gray-900 font-black text-lg tracking-tight px-4 py-7 transition-all">
                                    <span className="w-14 h-14 rounded-2xl border-2 border-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </span>
                                    How it works
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Phone mockup */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Glow behind phone */}
                            <div className="absolute inset-0 bg-purple-400 rounded-[80px] blur-[120px] opacity-20 scale-125" />
                            
                            {/* Main Phone */}
                            <div className="relative w-[300px] h-[600px] bg-gray-950 rounded-[56px] border-8 border-gray-900 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden z-20">
                                {/* Screen content placeholder */}
                                <div className="absolute inset-0 bg-linear-to-b from-purple-900/40 to-black pointer-events-none" />
                                
                                <div className="p-8 pt-20">
                                    <div className="text-white font-black text-3xl mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Level Up.</div>
                                    <div className="text-purple-300 font-medium mb-12">Pick a 15-min skill.</div>

                                    <div className="space-y-6">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="h-24 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Floating Cards */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-20 top-40 w-56 p-6 glass rounded-[32px] modern-shadow z-30"
                            >
                                <div className="text-purple-600 font-black text-sm mb-1 uppercase tracking-widest">Earning</div>
                                <div className="text-gray-900 font-black text-2xl tracking-tighter">+UGX 50,000</div>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -right-12 bottom-40 w-56 p-6 glass rounded-[32px] modern-shadow z-30"
                            >
                                <div className="text-green-600 font-black text-sm mb-1 uppercase tracking-widest">New Skill</div>
                                <div className="text-gray-900 font-black text-2xl tracking-tighter italic">AI for Business</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

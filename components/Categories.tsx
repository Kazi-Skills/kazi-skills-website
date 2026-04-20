'use client'
import { motion } from 'framer-motion'
import FlipButton from './FlipButton'

const cats = [
    { name: 'Beauty & Makeup', earn: 'UGX 500K/mo+', bg: 'from-pink-500 to-rose-600', icon: '✨' },
    { name: 'Digital Marketing', earn: 'UGX 1M/mo+', bg: 'from-blue-500 to-indigo-600', icon: '📱' },
    { name: 'Food Business', earn: 'UGX 800K/mo+', bg: 'from-orange-500 to-amber-600', icon: '🥘' },
    { name: 'Green Skills', earn: 'UGX 600K/mo+', bg: 'from-green-500 to-emerald-600', icon: '🌱' },
    { name: 'AI & Tech', earn: 'UGX 1.5M/mo+', bg: 'from-violet-500 to-purple-600', icon: '🤖' },
]

export default function Categories() {
    return (
        <section id="categories" className="py-40 lg:py-64 bg-gray-50 scroll-mt-20 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-32">
                    <div className="section-label mx-auto">Market Opportunities</div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-[-0.04em]" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Skills that <span className="gradient-text italic">actually pay.</span>
                    </h2>
                    <p className="text-gray-500 text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                        We analyze the Ugandan market to bring you skills that are in high demand right now.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {cats.map((cat, i) => (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i} 
                            className="group relative rounded-[48px] p-12 bg-white border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-3 overflow-hidden"
                        >
                            <div className={`w-20 h-20 rounded-[28px] bg-linear-to-br ${cat.bg} flex items-center justify-center text-4xl mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                {cat.icon}
                            </div>
                            
                            <h3 className="text-gray-900 font-black text-3xl mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {cat.name}
                            </h3>
                            
                            <div className="flex items-center gap-3">
                                <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Potential</span>
                                <span className="text-purple-600 font-black text-lg">{cat.earn}</span>
                            </div>

                            {/* Decorative background number */}
                            <div className="absolute -right-8 -bottom-8 text-[120px] font-black text-gray-50 -z-10 group-hover:text-purple-50 transition-colors duration-500 select-none">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}

                    {/* Creator Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="group relative rounded-[48px] p-12 bg-gray-900 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(124,58,237,0.4)] transition-all duration-500 hover:-translate-y-3"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-white font-black text-4xl mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                                    Are you an <br /><span className="text-purple-400 italic">Expert Creator?</span>
                                </h3>
                                <p className="text-gray-400 text-xl leading-relaxed font-medium mb-12">
                                    Monetize your knowledge. Join our elite network and earn <span className="text-white font-bold">85% commission</span> on your courses.
                                </p>
                            </div>
                            <FlipButton 
                                text1="Apply to Create" 
                                text2="Start Earning Today" 
                                href="#download"
                                className="rounded-3xl! py-7! text-lg!"
                                primary={false}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

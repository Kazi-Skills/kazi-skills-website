'use client'
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: 'Brenda Nakato',
        role: 'Beauty Entrepreneur · Kampala',
        text: 'I watched the makeup course on a Sunday. By Wednesday I had my first paying client. Kazi Skills changed everything for me.',
        earn: 'UGX 450K/month',
        color: 'from-pink-500 to-rose-600',
        size: 'lg:col-span-2'
    },
    {
        name: 'Trevor Byaruhanga',
        role: 'Social Media · Kampala',
        text: 'The pitch template alone was worth 10x the price. Landed my first client 3 days after watching.',
        earn: 'UGX 800K/month',
        color: 'from-blue-500 to-indigo-600',
        size: 'lg:col-span-1'
    },
    {
        name: 'Grace Apio',
        role: 'Urban Farmer · Ntinda',
        text: 'Started with tomatoes on my balcony after the Green Skills course. Now I supply 3 restaurants every week.',
        earn: 'UGX 380K/month',
        color: 'from-green-500 to-emerald-600',
        size: 'lg:col-span-1'
    },
    {
        name: 'Sandra Kiconco',
        role: 'AI Consultant · Kampala',
        text: 'I use AI to write all my client proposals now. My conversion rate doubled and I work half the hours I used to.',
        earn: 'Saves 10h/week',
        color: 'from-violet-500 to-purple-600',
        size: 'lg:col-span-2'
    },
]

export default function Testimonials() {
    return (
        <section id="about" className="py-40 lg:py-64 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-32">
                    <div className="section-label mx-auto">Success Stories</div>
                    <h2 className="text-6xl lg:text-[90px] font-black text-gray-900 mb-8 tracking-[-0.04em]" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Real People. <span className="gradient-text italic">Real Income.</span>
                    </h2>
                    <p className="text-gray-500 text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                        Join thousands of Ugandans who have transformed their lives with Kazi Skills.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i} 
                            className={`${t.size} relative bg-gray-50 rounded-[48px] p-10 lg:p-14 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-gray-100 group`}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className={`w-16 h-16 rounded-[24px] bg-linear-to-br ${t.color} flex items-center justify-center font-black text-white text-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-black text-xl tracking-tight">{t.name}</div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                                
                                <blockquote className="text-gray-700 text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
                                    &quot;{t.text}&quot;
                                </blockquote>

                                <div className="mt-auto flex items-center">
                                    <div className="h-px flex-1 bg-gray-200 mr-8" />
                                    <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
                                        <span className="text-green-600 text-sm font-black tracking-wide uppercase">{t.earn}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

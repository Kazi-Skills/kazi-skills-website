'use client'
import { motion } from 'framer-motion'

const steps = [
    {
        num: '01',
        title: 'Get the App',
        desc: 'Download Kazi Skills for free. Sign up in seconds with just your phone number.',
        color: 'from-purple-500 to-indigo-600',
    },
    {
        num: '02',
        title: 'Choose a Skill',
        desc: 'Browse hundreds of courses. From Makeup to AI, pick what suits your hustle.',
        color: 'from-blue-500 to-cyan-600',
    },
    {
        num: '03',
        title: 'Learn Offline',
        desc: 'Watch high-quality videos even without data. Practical, hands-on learning.',
        color: 'from-violet-500 to-purple-600',
    },
    {
        num: '04',
        title: 'Start Earning',
        desc: 'Apply your new skills, find clients, and track your growing income in-app.',
        color: 'from-green-500 to-emerald-600',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-40 lg:py-64 bg-white relative scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
                    <div className="max-w-3xl">
                        <div className="section-label">Your Path to Income</div>
                        <h2 className="text-6xl lg:text-[90px] font-black text-gray-900 leading-[0.95] tracking-[-0.04em]" style={{ fontFamily: 'Syne, sans-serif' }}>
                            Zero to earning in <span className="gradient-text italic">4 simple steps.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xl lg:text-2xl max-w-sm mb-4 font-medium leading-relaxed">
                        No degree required. Just your phone and the drive to level up.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {steps.map((step, i) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            key={i} 
                            className="relative group"
                        >
                            <div className={`w-24 h-24 rounded-[32px] bg-linear-to-br ${step.color} flex items-center justify-center font-black text-3xl text-white mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} style={{ fontFamily: 'Syne, sans-serif' }}>
                                {step.num}
                            </div>
                            <h3 className="text-gray-900 font-black text-3xl mb-6 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed font-medium">{step.desc}</p>
                            
                            {/* Decorative line for desktop */}
                            {i < 3 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-100 -z-10 -translate-x-12" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

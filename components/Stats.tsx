import { motion } from 'framer-motion'

const stats = [
    { val: '5,000+', label: 'Active Learners', sub: 'Building futures in Uganda' },
    { val: '120', label: 'Pro Courses', sub: 'Curated for the local market' },
    { val: 'UGX 15M', label: 'Creator Payouts', sub: 'Empowering local talent' },
    { val: '4.9/5', label: 'User Rating', sub: 'Average app store rating' },
]

export default function Stats() {
    return (
        <section className="relative -mt-24 pb-32 z-30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={s.label} 
                            className="glass modern-shadow p-10 rounded-[48px] border border-white/40 hover:scale-[1.02] transition-all duration-500 group"
                        >
                            <div className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-[-0.04em]" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {s.val}
                            </div>
                            <div className="text-purple-600 font-black text-sm uppercase tracking-widest mb-2">{s.label}</div>
                            <div className="text-gray-400 text-sm font-medium leading-relaxed">{s.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import FlipButton from './FlipButton'

const cats = [
    { name: 'Beauty & Makeup', earn: 'UGX 200K–500K/mo', bg: 'bg-pink-50', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-700' },
    { name: 'Digital Hustles', earn: 'UGX 400K–1M/mo', bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
    { name: 'Food Business', earn: 'UGX 300K–800K/mo', bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
    { name: 'Green Skills', earn: 'UGX 200K–600K/mo', bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
    { name: 'AI & Tech', earn: 'Save 10h/week', bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700' },
]

export default function Categories() {
    return (
        <section id="categories" className="py-40 lg:py-60 bg-gray-50 scroll-mt-20 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="section-label mx-auto">Market Opportunities</div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Skills That <span className="gradient-text">Pay.</span>
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
                        High-demand skills specifically curated for the Ugandan economy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cats.map((cat, i) => (
                        <div key={i} className={`group relative rounded-[40px] p-10 border border-gray-100 bg-white hover:border-purple-200 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 cursor-pointer overflow-hidden`}>
                            {/* Decorative background shape */}
                            <div className={`absolute -right-4 -top-4 w-32 h-32 rounded-full ${cat.bg} opacity-20 group-hover:scale-150 transition-transform duration-500`} />
                            
                            <div className="relative z-10">
                                <h3 className="text-gray-900 font-extrabold text-3xl mb-6 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                                    {cat.name}
                                </h3>
                                
                                <div className={`inline-flex items-center gap-2 text-sm font-black px-5 py-2.5 rounded-2xl ${cat.badge} shadow-sm`}>
                                    <span className="text-[10px] opacity-70 uppercase tracking-widest">Potential:</span>
                                    {cat.earn}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA card */}
                    <div className="group relative rounded-[40px] p-10 bg-gray-900 overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-2">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-white font-extrabold text-3xl mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                                    Are you a <span className="text-purple-400">Creator?</span>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    Join our network of elite creators and earn <span className="text-white font-bold">85% commission</span> on your courses.
                                </p>
                            </div>
                            <div className="mt-12">
                                <FlipButton 
                                    text1="Start Creating" 
                                    text2="Earn 85% →" 
                                    href="#download"
                                    primary={false}
                                    className="!rounded-[20px] !py-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

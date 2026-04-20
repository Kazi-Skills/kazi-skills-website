const testimonials = [
    {
        name: 'Brenda Nakato',
        role: 'Beauty Entrepreneur · Kampala',
        initials: 'BN',
        text: 'I watched the makeup course on a Sunday. By Wednesday I had my first paying client. Kazi Skills changed everything for me.',
        earn: 'Now earning UGX 450K/month',
        color: 'bg-pink-600',
    },
    {
        name: 'Trevor Byaruhanga',
        role: 'Social Media Manager · Kampala',
        initials: 'TB',
        text: 'The pitch template in the Social Media course alone was worth 10x the price. I landed my first client 3 days after watching.',
        earn: 'Now earning UGX 800K/month',
        color: 'bg-blue-600',
    },
    {
        name: 'Grace Apio',
        role: 'Urban Farmer · Ntinda',
        initials: 'GA',
        text: 'Started with tomatoes on my balcony after the Green Skills course. Now I supply 3 restaurants in Ntinda every week.',
        earn: 'Now earning UGX 380K/month',
        color: 'bg-green-600',
    },
    {
        name: 'Sandra Kiconco',
        role: 'AI Consultant · Kampala',
        initials: 'SK',
        text: 'I use AI to write all my client proposals now. My conversion rate doubled and I work half the hours I used to.',
        earn: 'Saves 10+ hours per week',
        color: 'bg-violet-600',
    },
]

export default function Testimonials() {
    return (
        <section id="about" className="py-32 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="section-label mx-auto">Success Stories</div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Real People. <span className="gradient-text">Real Income.</span>
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
                        Join thousands of Ugandans who have transformed their lives with Kazi Skills.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="group relative bg-gray-50 rounded-[48px] p-10 lg:p-14 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-gray-100">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className={`w-16 h-16 rounded-[24px] ${t.color} flex items-center justify-center font-black text-white text-xl shadow-lg flex-shrink-0`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-extrabold text-xl tracking-tight">{t.name}</div>
                                        <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{t.role}</div>
                                    </div>
                                    <div className="ml-auto flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                
                                <blockquote className="text-gray-700 text-2xl lg:text-3xl font-medium leading-[1.4] mb-12 italic">
                                    "{t.text}"
                                </blockquote>

                                <div className="mt-auto flex items-center">
                                    <div className="h-px flex-1 bg-gray-200 mr-6" />
                                    <span className="text-green-600 text-sm font-black bg-green-50 border border-green-100 px-6 py-3 rounded-2xl shadow-sm tracking-wide">
                                        {t.earn}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

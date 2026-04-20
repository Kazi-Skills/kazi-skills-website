
export default function Footer() {
    return (
        <footer className="bg-white pt-32 pb-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                                K
                            </div>
                            <span className="font-extrabold text-2xl text-gray-900 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                                KAZI<span className="text-purple-600">SKILLS</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-sm mb-10">
                            Empowering the next generation of Ugandan creators through AI-powered micro-learning.
                        </p>
                        <div className="flex gap-4">
                            {['FB', 'IG', 'TW', 'LI'].map(s => (
                                <div key={s} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 font-bold text-xs hover:bg-purple-600 hover:text-white transition-all cursor-pointer">
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-8">Platform</h4>
                        <ul className="space-y-4">
                            {['How it Works', 'Categories', 'Success Stories', 'Download'].map(l => (
                                <li key={l}><a href="#" className="text-gray-500 hover:text-purple-600 font-bold transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-8">Creators</h4>
                        <ul className="space-y-4">
                            {['Apply to Create', 'Creator Dashboard', 'Guidelines', 'Payouts'].map(l => (
                                <li key={l}><a href="#" className="text-gray-500 hover:text-purple-600 font-bold transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-8">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                                <li key={l}><a href="#" className="text-gray-500 hover:text-purple-600 font-bold transition-colors">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-gray-400 font-medium text-sm">
                        © 2026 Kazi Skills Ltd. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-gray-400 text-sm font-bold">Made with ❤️ in Kampala</div>
                        <div className="h-4 w-px bg-gray-200" />
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Systems Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                                <span className="text-white font-black text-sm">K</span>
                            </div>
                            <span className="font-black text-xl text-white" style={{ fontFamily: 'var(--font-syne)' }}>KAZI SKILLS</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Uganda's AI-powered micro-learning marketplace. Building a future where your skill, not your background, determines your income.
                        </p>
                        <div className="mt-4 text-white/30 text-xs">🇺🇬 Kampala, Uganda · East Africa · 2025</div>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="text-white font-bold text-sm mb-4" style={{ fontFamily: 'var(--font-syne)' }}>Platform</div>
                        <div className="space-y-2">
                            {['Browse Courses', 'For Creators', 'AI Learning Coach', 'Income Tracker', 'Certificates'].map(l => (
                                <a key={l} href="#" className="block text-white/40 hover:text-white text-sm transition-colors">{l}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="text-white font-bold text-sm mb-4" style={{ fontFamily: 'var(--font-syne)' }}>Company</div>
                        <div className="space-y-2">
                            {['About Us', 'Our Team', 'Contact', 'Privacy Policy', 'Terms of Service'].map(l => (
                                <a key={l} href="#" className="block text-white/40 hover:text-white text-sm transition-colors">{l}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-white/30 text-xs">© 2025 Kazi Skills. All rights reserved.</div>
                    <div className="text-white/30 text-xs">Built with ❤️ for Uganda's youth</div>
                </div>
            </div>
        </footer>
    )
}

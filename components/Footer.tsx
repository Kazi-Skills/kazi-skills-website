import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Image src="/logo-white-bg.jpeg" alt="Kazi Skills" width={130} height={44} className="object-contain mb-4" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Uganda's AI-powered micro-learning marketplace. Building a future where your skill, not your background, determines your income.
                        </p>
                        <div className="mt-4 text-gray-300 text-xs">Kampala, Uganda · East Africa · 2025</div>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="text-gray-900 font-bold text-sm mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Platform</div>
                        <div className="space-y-2">
                            {['Browse Courses', 'For Creators', 'AI Learning Coach', 'Income Tracker', 'Certificates'].map(l => (
                                <a key={l} href="#" className="block text-gray-400 hover:text-purple-600 text-sm transition-colors">{l}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="text-gray-900 font-bold text-sm mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Company</div>
                        <div className="space-y-2">
                            {['About Us', 'Our Team', 'Contact', 'Privacy Policy', 'Terms of Service'].map(l => (
                                <a key={l} href="#" className="block text-gray-400 hover:text-purple-600 text-sm transition-colors">{l}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-300 text-xs">© 2025 Kazi Skills. All rights reserved.</div>
                    <div className="text-gray-300 text-xs">Built with care for Uganda's youth</div>
                </div>
            </div>
        </footer>
    )
}

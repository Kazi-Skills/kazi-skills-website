import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'How it Works', href: '#how-it-works' },
        { label: 'Categories', href: '#categories' },
        { label: 'Success Stories', href: '#about' },
        { label: 'For Creators', href: '#download' },
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
                scrolled ? 'py-4' : 'py-6'
            }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className={`relative flex items-center justify-between p-4 lg:p-5 rounded-[28px] transition-all duration-500 ${
                        scrolled ? 'glass modern-shadow' : 'bg-transparent'
                    }`}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-black text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>K</span>
                            </div>
                            <span className="font-extrabold text-2xl text-gray-900 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                                KAZI<span className="text-purple-600">SKILLS</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map(link => (
                                <a key={link.label} href={link.href}
                                    className="text-gray-600 hover:text-purple-600 text-[15px] font-bold transition-all relative group">
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="#download"
                                className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-2xl text-base font-bold transition-all shadow-lg hover:shadow-black/10 active:scale-95">
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <button 
                            className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-90 bg-white pt-32 px-6 md:hidden"
                    >
                        <div className="space-y-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-4xl font-black text-gray-900 tracking-tighter"
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8"
                            >
                                <a href="#download"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full bg-purple-600 text-white py-5 rounded-3xl text-xl font-bold flex items-center justify-center shadow-xl shadow-purple-200"
                                >
                                    Download App
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

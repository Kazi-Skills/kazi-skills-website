'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                        <span className="text-white font-black text-sm">K</span>
                    </div>
                    <span className="font-black text-xl text-white tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                        KAZI SKILLS
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['How it Works', 'Categories', 'About', 'For Creators'].map(item => (
                        <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#download"
                        className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105">
                        Download App
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden glass border-t border-white/10 px-6 py-4 space-y-3">
                    {['How it Works', 'Categories', 'About', 'For Creators'].map(item => (
                        <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                            className="block text-white/70 hover:text-white text-sm font-medium py-2"
                            onClick={() => setOpen(false)}>
                            {item}
                        </a>
                    ))}
                    <a href="#download"
                        className="block bg-purple-600 text-white px-5 py-3 rounded-xl text-sm font-bold text-center mt-2">
                        Download App
                    </a>
                </div>
            )}
        </nav>
    )
}

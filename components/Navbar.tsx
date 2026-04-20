'use client'
import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const linksRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!menuRef.current) return

        if (open) {
            document.body.style.overflow = 'hidden'
            gsap.set(menuRef.current, { display: 'block', pointerEvents: 'auto' })
            gsap.fromTo(
                menuRef.current,
                { y: -16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' }
            )
            gsap.fromTo(
                '.mobile-link',
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out', delay: 0.08 }
            )
        } else {
            document.body.style.overflow = ''
            gsap.to(menuRef.current, {
                y: -16,
                opacity: 0,
                duration: 0.25,
                ease: 'power2.in',
                onComplete: () => {
                    if (menuRef.current) {
                        gsap.set(menuRef.current, { display: 'none', pointerEvents: 'none', y: 0 })
                    }
                }
            })
        }
    }, { dependencies: [open], scope: containerRef })

    const toggleMenu = () => setOpen(!open)

    return (
        <div className="relative" ref={containerRef}>
            {/* Spacer to prevent content from going behind fixed navbar */}
            <div className="h-20" />
            
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100 shadow-sm h-20 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-200">
                            <span className="text-white font-black text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>K</span>
                        </div>
                        <span className="font-extrabold text-xl text-gray-900 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
                            KAZI<span className="text-purple-600">SKILLS</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {[
                            { label: 'How it Works', href: '#how-it-works' },
                            { label: 'Categories', href: '#categories' },
                            { label: 'Stories', href: '#about' },
                            { label: 'For Creators', href: '#download' },
                        ].map(item => (
                            <a key={item.label} href={item.href}
                                className="text-gray-600 hover:text-purple-600 text-sm font-semibold transition-all relative group">
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a href="#download"
                            className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-2xl text-base font-bold transition-all shadow-md hover:shadow-xl active:scale-95">
                            Download App
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-gray-700 p-2 rounded-xl hover:bg-gray-50 transition-colors focus:outline-none" 
                        onClick={toggleMenu} 
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`block w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300 origin-left ${open ? 'rotate-45 translate-x-1 -translate-y-0.5' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${open ? 'opacity-0 -translate-x-2' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-gray-900 rounded-full transition-all duration-300 origin-left ${open ? '-rotate-45 translate-x-1 translate-y-0.5' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* GSAP Animated Mobile menu */}
                <div
                    ref={menuRef}
                    className="fixed top-20 bottom-0 left-3 right-3 sm:left-4 sm:right-4 md:hidden hidden opacity-0 pointer-events-none bg-white/98 backdrop-blur-sm border border-gray-100 rounded-t-3xl shadow-2xl"
                >
                    <div ref={linksRef} className="h-full overflow-y-auto">
                        <div className="max-w-7xl mx-auto px-10 sm:px-14 py-12 space-y-10">
                        {[
                            { label: 'How it Works', href: '#how-it-works' },
                            { label: 'Categories', href: '#categories' },
                            { label: 'Stories', href: '#about' },
                            { label: 'For Creators', href: '#download' },
                        ].map(item => (
                            <a key={item.label} href={item.href}
                                className="mobile-link block rounded-2xl px-4 py-3 text-gray-900 font-extrabold text-3xl tracking-tight hover:text-purple-600 transition-colors"
                                onClick={() => setOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                        <div className="mobile-link pt-8">
                            <a href="#download"
                                onClick={() => setOpen(false)}
                                className="inline-flex mx-auto bg-purple-600 text-white px-10 py-4 rounded-[24px] text-xl font-bold text-center shadow-lg shadow-purple-200 active:scale-95 transition-transform">
                                Download Free App
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

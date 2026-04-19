import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import Categories from '@/components/Categories'
import Testimonials from '@/components/Testimonials'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

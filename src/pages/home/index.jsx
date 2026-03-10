import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import { Link } from 'react-router-dom'
import Footer from '@/components/footer'
import Topbar from '@/components/topbar'
import igIcon from '@/assets/images/social-media/instagram.svg'
import ttIcon from '@/assets/images/social-media/tiktok.svg'
import ytIcon from '@/assets/images/social-media/youtube.svg'
import liIcon from '@/assets/images/social-media/linkedin.svg'
import xIcon from '@/assets/images/social-media/x.png'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Topbar />
      {/* Hero Section */}
      <Hero />

      {/* Brief About Section */}
      <section className="py-24 bg-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Membangun Literasi Keuangan Mahasiswa</h2>
            <p className="text-lg text-default-600 mb-10">
              IPB Finance Club (IFC) di bawah naungan Departemen Manajemen IPB University berdedikasi menjadi pusat pengembangan kemampuan investasi
              dan analisis bisnis bagi mahasiswa.
            </p>
            <Link to="/pages/about" className="text-primary font-bold border-b-2 border-primary pb-1">
              Pelajari Struktur Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <FeatureSection type="projects" />

      {/* News Preview */}
      <div className="bg-default-50/50">
        <FeatureSection type="news" />
      </div>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container">
          <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 size-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

            <h2 className="text-4xl font-bold mb-6">Tertarik Bekerjasama?</h2>
            <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
              Hubungi kami untuk kolaborasi sponsorship, media partner, atau pelatihan finansial.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://wa.me/628563258753"
                className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-yellow-50 transition-all flex items-center gap-2">
                Sponsorship (Ririn)
              </a>
              <a
                href="https://wa.me/62895326191816"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
                Media Partner (Faiz)
              </a>
            </div>

            {/* Social Media Logos */}
            <div className="flex justify-center gap-6 border-t border-white/20 pt-8">
              {[igIcon, ttIcon, ytIcon, liIcon, xIcon].map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt="social icon"
                  className="h-7 w-auto opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home

import Icon from '@/components/wrappers/Icon'
import { Link } from 'react-router-dom'

// Social Media Imports
import igIcon from '@/assets/images/social-media/instagram.svg'
import ttIcon from '@/assets/images/social-media/tiktok.svg'
import ytIcon from '@/assets/images/social-media/youtube.png'
import liIcon from '@/assets/images/social-media/linkedin.png'
import xIcon from '@/assets/images/social-media/x.png'

const ContactPage = () => {
  const socialLinks = [
    { img: igIcon, url: 'https://instagram.com/ipbfinanceclub' },
    { img: ttIcon, url: 'https://tiktok.com/@ipbfinanceclub' },
    { img: ytIcon, url: 'https://www.youtube.com/@ipbfinanceclub' },
    { img: liIcon, url: 'https://www.linkedin.com/company/investment-gallery-idx-finance-club-fem-ipb' },
    { img: xIcon, url: 'https://x.com/ipbfinanceclub' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-default-100 lg:pt-28 sm:pb-36 pb-16 pt-36 relative">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-7/12 text-center">
              <h1 className="text-5xl/relaxed text-default-700 font-bold">Contact Us</h1>
              <p className="mb-6 md:text-lg text-default-500">Hubungi kami secara langsung melalui WhatsApp atau ikuti media sosial kami.</p>
            </div>
          </div>
        </div>
        {/* Wave Decor */}
        <div className="absolute -bottom-1 w-full">
          <svg className="w-full h-full" viewBox="0 0 1440 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g fill="#fff">
                <path d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z" />
              </g>
            </g>
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="lg:pb-24 py-12 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* WhatsApp Direct Links */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6 text-default-800">Direct Message</h3>
                <a
                  href="https://wa.me/628563258753"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-white border border-default-200 rounded-2xl hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Icon icon="tabler:brand-whatsapp" className="size-7 text-green-600" />
                    </div>
                    <span className="font-semibold text-default-700">Sponsorship (Ririn)</span>
                  </div>
                  <Icon icon="tabler:chevron-right" className="size-5 text-default-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/62895326191816"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-white border border-default-200 rounded-2xl hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Icon icon="tabler:brand-whatsapp" className="size-7 text-green-600" />
                    </div>
                    <span className="font-semibold text-default-700">Media Partner (Faiz)</span>
                  </div>
                  <Icon icon="tabler:chevron-right" className="size-5 text-default-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Social Media & Email Info */}
              <div className="bg-default-50 p-8 rounded-3xl border border-default-200 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-default-800">Our Office</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <Icon icon="solar:letter-opened-bold-duotone" className="size-6 text-primary shrink-0" />
                    <p className="text-default-600 font-medium text-sm">ipbfinanceclub@gmail.com</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon icon="solar:map-point-bold-duotone" className="size-6 text-teal-500 shrink-0" />
                    <p className="text-default-600 font-medium text-sm">Investment Gallery FEM IPB, Bogor, Indonesia</p>
                  </div>
                </div>

                <p className="font-bold text-default-800 mb-4">Follow Our Journey</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                      <img src={social.img} alt="social" className="h-8" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

import { currentYear } from '@/assets/data/constants'
import logoDark from '@/assets/images/logo-dark.png'
import Icon from '@/components/wrappers/Icon'
import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/pages/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Activity',
    links: [
      { label: 'Our Projects', href: '/pages/projects' },
      { label: 'Latest News', href: '/pages/news' },
      { label: 'Events', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-default-100 mt-20">
      <div className="py-12 border-b border-default-200">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-default-900">IPB Finance Club</h2>
              <p className="text-default-500 max-w-sm">Developing the next generation of financial and investment leaders in Indonesia.</p>
            </div>
            <div className="flex justify-start lg:justify-end gap-4">
              <Link to="/contact" className="bg-primary text-white rounded-xl py-3 px-8 font-bold hover:shadow-lg transition-all">
                Join our Community
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
          <div>
            <Link to="/">
              <img src={logoDark} alt="IFC Logo" className="h-10 w-auto mb-6" />
            </Link>
            <p className="text-default-500 lg:w-4/5 leading-relaxed">
              IPB Finance Club (IFC) adalah organisasi mahasiswa yang berfokus pada literasi keuangan, manajemen portofolio, dan analisis pasar modal.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:justify-between">
            {footerSections.map((section) => (
              <div key={section.title} className="min-w-[120px]">
                <h5 className="mb-5 uppercase text-sm font-bold tracking-wider text-default-900">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className="text-default-500 hover:text-primary transition-all">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-default-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-default-500 text-sm">{currentYear} © IPB Finance Club. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="text-default-500 hover:text-primary transition-all">
              <Icon icon="tabler:brand-instagram" className="size-6" />
            </Link>
            <Link to="#" className="text-default-500 hover:text-primary transition-all">
              <Icon icon="tabler:brand-linkedin" className="size-6" />
            </Link>
            <Link to="#" className="text-default-500 hover:text-primary transition-all">
              <Icon icon="tabler:brand-youtube" className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

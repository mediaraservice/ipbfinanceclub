import logodark from '@/assets/images/logo-dark.png';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const footerSections = [{
  title: 'About',
  links: [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Portfolio',
    href: '/portfolio'
  }, {
    label: 'Resources',
    href: '/resources'
  }, {
    label: 'Blog',
    href: '/blog'
  }]
}, {
  title: 'Company',
  links: [{
    label: 'About',
    href: '/about'
  }, {
    label: 'Career',
    href: '/career'
  }, {
    label: 'Clients',
    href: '/clients'
  }]
}];
const socialLinks = [{
  name: 'Facebook',
  icon: 'tabler:brand-facebook',
  href: 'https://facebook.com'
}, {
  name: 'Twitter',
  icon: 'tabler:brand-x',
  href: 'https://twitter.com'
}, {
  name: 'Instagram',
  icon: 'tabler:brand-instagram',
  href: 'https://instagram.com'
}, {
  name: 'LinkedIn',
  icon: 'tabler:brand-linkedin',
  href: 'https://linkedin.com'
}];
const languages = [{
  code: 'fr',
  name: 'Francais'
}, {
  code: 'en',
  name: 'English'
}];
const Footer = () => {
  return <footer className="bg-default-100 pt-14 pb-5">
      <div className="container">
        <div className="grid grid-cols-4 gap-14">
          <div className="xl:col-span-1 col-span-4">
            <Link to="/">
              <img src={logodark} alt="Prompt Logo" className="h-8" width={126} height={32} />
            </Link>
            <p className="text-default-500/80 mt-5">300 Park Avenue, 12th Floor New York, NY 10022</p>
            <p className="text-default-500/80 mt-2">1499 Burwell Heights Road Port Arthur Meadow Nashville, TX 77642</p>
          </div>

          <div className="xl:col-span-3 col-span-4 xl:mx-20">
            <div className="flex flex-col sm:flex-row gap-14 flex-wrap justify-between">
              {footerSections.map(section => <div key={section.title}>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-base font-medium mb-3">{section.title}</h5>
                    {section.links.map(link => <Link key={link.href} to={link.href} className="text-default-500/80 hover:text-primary transition-colors">
                        {link.label}
                      </Link>)}
                  </div>
                </div>)}

              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-base font-medium mb-3">Get in touch</h5>
                  <Link to="mailto:hello@Prompt.com" className="text-default-500/80 hover:text-primary transition-colors">
                    hello@Prompt.com
                  </Link>
                  <div className="flex gap-4 mt-2">
                    {socialLinks.map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-default-400 hover:text-primary transition-colors" aria-label={social.name}>
                        <Icon icon={social.icon} className="size-5" />
                      </a>)}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-base font-medium mb-3">Languages</h5>
                  {languages.map(lang => <button key={lang.code} className="text-default-500/80 hover:text-primary transition-colors text-left">
                      {lang.name}
                    </button>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-default-200 my-5" />
        <div className="text-center">
          <p className="text-default-500/80 text-sm">
            © {new Date().getFullYear()} Prompt. All rights reserved. Crafted by{' '}
            <a href="https://coderthemes.com" target="_blank" rel="noopener noreferrer" className="text-default-800 hover:text-primary transition-colors">
              Coderthemes
            </a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
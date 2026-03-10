import { currentYear } from '@/assets/data/constants';
import logoDark from '@/assets/images/logo-dark.png';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const footerSections = [{
  title: 'Platform',
  links: [{
    label: 'Demo',
    href: '#'
  }, {
    label: 'Pricing',
    href: '/pages/pricing'
  }, {
    label: 'Integrations',
    href: '#'
  }, {
    label: 'Status',
    href: '#'
  }]
}, {
  title: 'Knowledge Base',
  links: [{
    label: 'Blog',
    href: '/pages/blog'
  }, {
    label: 'Help Center',
    href: '/pages/help'
  }, {
    label: 'Sales Tools catalog',
    href: '#'
  }, {
    label: 'API',
    href: '#'
  }]
}, {
  title: 'Company',
  links: [{
    label: 'About us',
    href: '#'
  }, {
    label: 'Career',
    href: '/pages/careers'
  }, {
    label: 'Contact Us',
    href: '/contact'
  }]
}, {
  title: 'Legal',
  links: [{
    label: 'Usage Policy',
    href: '#'
  }, {
    label: 'Privacy Policy',
    href: '#'
  }, {
    label: 'Terms of Service',
    href: '#'
  }, {
    label: 'Trust',
    href: '#'
  }]
}];
const Footer = () => {
  return <footer className="bg-default-100">
      <div className="container">
        <div className="grid xl:grid-cols-5 gap-6 py-12">
          <div className="xl:col-span-2">
            <Link to="/">
              <img src={logoDark} alt="Prompt" className="h-8 w-auto" width={126} height={32} />
            </Link>
            <p className="text-default-500/80 mt-5 lg:w-4/5">Make your web application stand out with high-quality landing page</p>
          </div>

          <div className="xl:col-span-3 col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {footerSections.map(section => <div key={section.title}>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">{section.title}</h5>
                    <ul className="space-y-3">
                      {section.links.map(link => <li key={link.href}>
                          <Link to={link.href}>{link.label}</Link>
                        </li>)}
                    </ul>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        <div className="border-t border-default-200 py-6">
          <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
            <div>
              <p className="text-default-500/80 text-sm">
                {currentYear} © Prompt. All rights reserved. Crafted by{' '}
                <Link to="#" className="text-default-800 hover:text-primary transition-all">
                  Coderthemes
                </Link>
              </p>
            </div>
            <div className="flex justify-center sm:justify-end gap-7">
              <span>
                <Link to="#">
                  <Icon icon="tabler:brand-facebook" className="size-5 hover:text-primary transition-all" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <Icon icon="tabler:brand-x" className="size-5 hover:text-primary transition-all" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <Icon icon="tabler:brand-instagram" className="size-5 hover:text-primary transition-all" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
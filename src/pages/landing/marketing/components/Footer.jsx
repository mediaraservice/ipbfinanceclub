import { currentYear } from '@/assets/data/constants';
import darklogo from '@/assets/images/logo-dark.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <>
      <footer className="bg-default-100">
        <div className="py-6">
          <div className="container">
            <div className="grid lg:grid-cols-2 items-center">
              <div>
                <h1 className="text-2xl font-medium mt-3 mb-2">Ready to get started?</h1>
                <p className="text-default-500">Create your free 14-day trial account now</p>
              </div>
              <div className="flex flex-wrap items-center justify-start lg:justify-end gap-7 mt-5 lg:mt-0">
                <button className="flex items-center">
                  <a href="#" className="bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4">
                    Try it free for 14 days
                  </a>
                </button>
                <Link to="#" className="transition-all hover:text-primary">
                  Chat with us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-default-200" />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 py-6">
            <div>
              <Link to="/">
                <img alt="" src={darklogo} className="h-8" width={126} height={32} />
              </Link>
              <p className="text-default-500/80 mt-5 w-4/5">Make your web application stand out with high-quality landing page</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-14 flex-wrap sm:flex-nowrap justify-between">
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">PLATFORM</h5>
                    <div className="text-default-500/80">
                      <Link to="">Demo</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Pricing</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Integrations</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Status</Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">COMPANY</h5>
                    <div className="text-default-500/80">
                      <Link to="">About us</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Career</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Contact Us</Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">LEGAL</h5>
                    <div className="text-default-500/80">
                      <Link to="">Usage Policy</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Privacy Policy</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Terms of Service</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Trust</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-default-200" />
          <div className="flex justify-center gap-6 py-5">
            <p className="text-default-500/80 text-sm">
            {currentYear}  © Prompt. All rights reserved. Crafted by{' '}
              <Link to="#" className="text-default-800 hover:text-primary transition-all">
                Coderthemes
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>;
};
export default Footer;
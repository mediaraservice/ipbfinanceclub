import { currentYear } from '@/assets/data/constants';
import logoDark from '@/assets/images/logo-dark.png';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <>
      <footer className="bg-default-100">
        <div className="container">
          <div className="grid xl:grid-cols-5 gap-6 py-12">
            <div className="xl:col-span-2">
              <Link to="/">
                <img src={logoDark} alt='' className="h-8" width={128} height={32} />
              </Link>
              <p className="text-default-500/80 mt-5 lg:w-4/5">Make your web application stand out with high-quality landing page</p>
            </div>
            <div className="xl:col-span-3 col-span-4">
              <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Platform</h5>
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
                    <h5 className="mb-3 uppercase">Knowledge Base</h5>
                    <div className="text-default-500/80">
                      <Link to="">Blog</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Help Center</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">Sales Tools catalog</Link>
                    </div>
                    <div className="text-default-500/80">
                      <Link to="">API</Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Company</h5>
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
                    <h5 className="mb-3 uppercase">Legal</h5>
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
          <div className="border-t border-default-200 py-6">
            <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
              <div>
                <p className="text-default-500/80 text-sm">
                {currentYear}  © Prompt. All rights reserved. Crafted by{' '}
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
      </footer>
    </>;
};
export default Footer;
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
                      <a href="">Demo</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Pricing</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Integrations</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Status</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Knowledge Base</h5>
                    <div className="text-default-500/80">
                      <a href="">Blog</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Help Center</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Sales Tools catalog</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">API</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Company</h5>
                    <div className="text-default-500/80">
                      <a href="">About us</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Career</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Contact Us</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Legal</h5>
                    <div className="text-default-500/80">
                      <a href="">Usage Policy</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Privacy Policy</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Terms of Service</a>
                    </div>
                    <div className="text-default-500/80">
                      <a href="">Trust</a>
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
                  <a href="#" className="text-default-800 hover:text-primary transition-all">
                    Coderthemes
                  </a>
                </p>
              </div>
              <div className="flex justify-center sm:justify-end gap-7">
                <span>
                  <a href="#">
                    <Icon icon="tabler:brand-facebook" className="size-5 hover:text-primary transition-all" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <Icon icon="tabler:brand-x" className="size-5 hover:text-primary transition-all" />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <Icon icon="tabler:brand-instagram" className="size-5 hover:text-primary transition-all" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>;
};
export default Footer;
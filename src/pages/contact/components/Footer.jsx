import { currentYear } from '@/assets/data/constants';
import logoDark from '@/assets/images/logo-dark.png';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <>
      <footer className="bg-default-100 pt-14 pb-5">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div className="md:col-span-2">
              <div>
                <Link to="/">
                  <img src={logoDark} alt="" className="h-7" width={110} height={28} />
                </Link>
                <p className="text-default-500/80 mt-5 lg:w-1/2">
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3">Resources</h5>
                  <div className="text-sm text-default-500/80">
                    <Link to="">Blog</Link>
                  </div>
                  <div className="text-sm text-default-500/80">
                    <Link to="">Faq</Link>
                  </div>
                  <div className="text-sm text-default-500/80">
                    <Link to="">Team of Service</Link>
                  </div>
                  <div className="text-sm text-default-500/80">
                    <Link to="">Privacy Policy</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3">Company</h5>
                  <div className="text-sm text-default-500/80">
                    <Link to="">About</Link>
                  </div>
                  <div className="text-sm text-default-500/80">
                    <Link to="">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-default-200 my-5" />
          <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
            <div>
              <p className="text-default-500/80 text-sm">
                {currentYear} © Prompt. All rights reserved. Crafted by
                <Link to="#" className="text-default-800 hover:text-primary transition-all">
                  Coderthemes
                </Link>
              </p>
            </div>
            <div className="flex justify-center sm:justify-end gap-7">
              <span>
                <Link to="#">
                  <Icon icon="tabler-brand-facebook" className="size-5 hover:text-primary transition-all" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <Icon icon="tabler-brand-x" className="size-5 hover:text-primary transition-all" />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <Icon icon="tabler-brand-instagram" className="size-5 hover:text-primary transition-all" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>;
};
export default Footer;
import { currentYear } from '@/assets/data/constants';
import logodark from '@/assets/images/logo-dark.png';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <>
      <footer className="bg-default-100">
        <div className="container">
          <div className="py-14 pb-10">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 pt-14">
              <div>
                <Link to="/">
                  <img src={logodark} alt="" className="w-32 mb-3" />
                </Link>
                <p className="text-sm/relaxed tracking-wider text-default-500">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.
                </p>
              </div>
              <div>
                <div className="flex justify-start sm:justify-end lg:gap-32 gap-14">
                  <div>
                    <div className="flex flex-col gap-4 text-sm">
                      <h5 className="mb-3">Resources</h5>
                      <div className="text-default-500/80">
                        <a href="">Blog</a>
                      </div>
                      <div className="text-default-500/80">
                        <a href="">FAQ</a>
                      </div>
                      <div className="text-default-500/80">
                        <a href="">Team of service</a>
                      </div>
                      <div className="text-default-500/80">
                        <a href="">Privacy policy</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4 text-sm">
                      <h5 className="mb-3">Company</h5>
                      <div className="text-default-500/80">
                        <a href="">About</a>
                      </div>
                      <div className="text-default-500/80">
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-default-200" />
          <div className="py-5">
            <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
              <div>
                <p className="text-default-500/80 text-sm">
                 {currentYear} © Prompt. All rights reserved. Crafted by
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
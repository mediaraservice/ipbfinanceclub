import { currentYear } from '@/assets/data/constants';
import logodark from '@/assets/images/logo-dark.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <>
      <footer className="pt-10 pb-6">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl/tight font-medium my-5">Be the first to know!</h2>
            <p className="text-default-500">We&apos;ll inform you about new updates, features, but no spam, we promise.</p>
            <div className="flex flex-wrap items-center justify-center gap-2 my-10">
              <div className="flex items-center">
                <input type="text" id="email-input" name="email-input" placeholder="Your email" className="w-full text-sm rounded border-default-200 focus:border-default-400 focus:ring-0 bg-transparent py-2 px-4" />
              </div>
              <a href="#" className="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-default-200" />
        <div className="container">
          <div className="text-center mt-10">
            <p className="text-default-600 mb-7">
             {currentYear} © Prompt. All rights reserved. Crafted by{' '}
              <Link to="#" className="text-default-800 hover:text-primary transition-all">
                Coderthemes
              </Link>
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-10 mb-8">
              <li>
                <Link to="#">Changelog</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Press kit</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary">
                  Careers
                  <span className="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">We&apos;re hiring</span>
                </Link>
              </li>
            </ul>
            <Link to="/">
              <img src={logodark} alt='' className="h-8 mx-auto" width={126} height={32} />
            </Link>
          </div>
        </div>
      </footer>
    </>;
};
export default Footer;
import { currentYear } from '@/assets/data/constants';
import { Link } from 'react-router-dom';
import { FaMinus } from 'react-icons/fa6';
const footerLinks = ['About', 'Privacy', 'Terms', 'Developers', 'Support'];
const Footer = () => {
  return <>
      <section className="bg-white py-6 relative">
        <div className="container">
          <div className="flex items-center flex-wrap">
            <div className="grow">
              <div className="flex items-center gap-3">
                {footerLinks.map((item, idx) => <div className="inline-flex items-center" key={idx}>
                    <Link to="" className="flex items-center">
                      {item} <FaMinus size={14} />
                    </Link>
                  </div>)}

                <div className="inline-flex items-center">
                  <Link to="">
                    Careers
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-semibold bg-green-500/10 text-green-500">
                      We&apos;re hiring
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="shrink md:text-end mt-4 lg:mt-0">
              <p className="text-sm mb-0">
                {currentYear} © Prompt. All rights reserved. Crafted by <Link to="https://coderthemes.com/">Coderthemes</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Footer;
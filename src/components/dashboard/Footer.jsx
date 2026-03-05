import { currentYear } from '@/assets/data/constants';
import { Link } from 'react-router-dom';
import { FaMinus } from 'react-icons/fa6';
const footerLinks = ['About', 'Privacy', 'Terms', 'Developers', 'Support'];
const Footer = () => {
  return <>
      <section className="bg-white py-6 relative">
        <div className="container">
          <div className="flex items-center flex-wrap">
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
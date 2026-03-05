import darklogo from '@/assets/images/logo-dark.png';
import { currentYear } from '@/assets/data/constants';
import { Link } from 'react-router-dom';
import { FaBagShopping } from 'react-icons/fa6';
const Footer = () => {
  return <>
      <section className="py-10">
        <div className="container">
          <div className="text-center">
            <div>
              <h2 className="md:text-3xl text-xl font-semibold my-5">Start creating delightful user experience</h2>
              <p className="text-default-500">
                Start working with <span className="text-primary">Prompt</span> to showcase your app to thousands of people.
              </p>
              <div className="my-14">
                <a href="#demo" className="mx-auto flex gap-3 items-center w-fit py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                  <FaBagShopping /> View Demos
                </a>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap items-center justify-center gap-5">
                <li className="after:content-['-'] after:text-default-500 after:font-extrabold">
                  <Link to="#" className="hover:text-primary me-4">
                    About
                  </Link>
                </li>
                <li className="after:content-['-'] after:text-default-500 after:font-extrabold">
                  <Link to="#" className="hover:text-primary me-4">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary">
                    Version
                  </Link>
                </li>
              </ul>
              <p className="my-5">© {currentYear} Prompt. All rights reserved. Crafted by</p>
              <Link to="/">
                <img alt="" src={darklogo} className="h-8 mx-auto img-fluid" width={126} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Footer;
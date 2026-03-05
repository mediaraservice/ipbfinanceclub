import crypto from '@/assets/images/hero/crypto.png';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
const Hero = () => {
  return <>
      <section className="pt-40 pb-20 bg-primary/5 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div>
              <h1 className="md:text-5xl/tight text-3xl font-semibold mb-7">
                The&nbsp;
                <span className="relative after:bg-green-200 md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                  Fastest
                </span>
                &amp; Secure way to Buy, Sell and Trade with&nbsp;
                <ReactTyped strings={['Crypto', 'NFT']} className="typewrite" typeSpeed={100} backSpeed={50} loop />
              </h1>
              <p className="text-default-500 leading-7">
                A seamless, flexible and diverse platform to buy, sell and manage your cryptocurrency portfolio
              </p>
              <div className="py-14">
                <div className="flex flex-wrap items-center gap-4">
                  <input type="text" id="fname" name="fname" placeholder="Enter Your Email" className="form-input pe-10 text-sm font-medium focus:ring-0 focus:border-default-500 rounded border-default-400" />
                  <Link to="#" className="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                    Get Started
                  </Link>
                </div>
                <p className="text-default-4
                  00 mt-2">
                  Already using Prompt?
                  <Link to="" className="text-default-800 hover:text-primary">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
            <div className="2xl:w-[130%] relative ms-20">
              <div className="p-3 rounded-md bg-white shadow-lg">
                <img src={crypto} alt="" className="rounded-md" />
              </div>
              <div className="hidden sm:block">
                <div className="after:w-32 after:h-32 after:absolute after:-bottom-10 after:-start-12 after:-z-10 after:bg-[url('../images/pattern/dot2.svg')]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;
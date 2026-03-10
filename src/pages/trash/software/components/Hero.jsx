import desktop from '@/assets/images/hero/desktop.png';
import whitewave from '@/assets/images/shapes/white-wave.svg';
import { FaAngleDown, FaDownload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <>
      <section className="bg-gradient-to-t from-yellow-50/80 relative">
        <section className="relative py-16 sm:py-24 md:py-44">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="order-2 lg:order-1 text-center sm:text-start">
                <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                  Speed up your&nbsp;
                  <span className="relative z-0 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                    performance
                  </span>
                </h1>
                <p className="text-default-500">Prompt makes it easier to build better website and application more quickly and with less effort</p>
                <div className="inline-flex items-center bg-primary text-white rounded mt-14 pe-4">
                  <a href="#" className="flex text-center py-2 px-4 rounded border border-primary hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                    <FaDownload className="me-2" /> Download for Ubuntu 19.04
                  </a>
                  <div>
                    <div className="hs-dropdown relative [--placement:bottom-right] inline-flex">
                      <button type="button" className="hs-dropdown-toggle bg-default-500/5 hover:bg-default-500/10  py-1.5  rounded transition-all flex items-center justify-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <FaAngleDown className="ms-2" />
                      </button>
                      <div className="hs-dropdown-menu transition-[opacity,margin] z-10 duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 mt-2 bg-white shadow-md border border-default-200 rounded" role="menu" aria-orientation="vertical">
                        <div className="p-1 space-y-1">
                          <a className="flex items-center py-2.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-default-500 hover:bg-default-100 dark:text-default-400 dark:hover:bg-default-700 dark:hover:text-default-200" href="">
                            Windows 7/8/10
                          </a>
                          <hr className="-mx-1" />
                          <a className="flex items-center py-2.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-default-500 hover:bg-default-100 dark:text-default-400 dark:hover:bg-default-700 dark:hover:text-default-300" href="">
                            Mac OS
                          </a>
                          <hr className="-mx-1" />
                          <a className="flex items-center py-1.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-default-500 hover:bg-default-100 dark:text-default-400 dark:hover:bg-default-700 dark:hover:text-default-300" href="">
                            Ubuntu 18.04
                          </a>
                          <a className="flex items-center py-1.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-default-500 hover:bg-default-100 dark:text-default-400 dark:hover:bg-default-700 dark:hover:text-default-300" href="">
                            Ubuntu 16.04
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="inline-flex bg-yellow-600/10 text-sm rounded-lg py-2 px-5 gap-1">
                    Looking for other platforms?
                    <Link to="" className="font-semibold">
                      Click Here
                    </Link>
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative 2xl:w-[128%]">
                  <div className="before:w-28 before:h-28 sm:before:absolute before:-z-10 before:-bottom-8 before:-start-8 before:bg-[url('../images/pattern/dot3.svg')] hidden sm:block"></div>
                  <img src={desktop} alt="desktop-img" className="w-full h-full bg-white p-2 rounded-lg shadow-lg shadow-black/5" data-aos="fade-left" data-aos-duration={600} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full -scale-x-100 -scale-y-100" />
        </div>
      </section>
    </>;
};
export default Hero;
import blog1 from '@/assets/images/blog/blog-1.png';
import blog2 from '@/assets/images/blog/blog-2.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
const Navigation = () => {
  return <>
      <section className="py-14">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 items-center py-7 border-y border-default-200">
            <div>
              <div>
                <div className="flex items-center justify-start">
                  <div className="hs-tooltip inline-block">
                    <button type="button" className="flex gap-3 items-center hs-tooltip-toggle border border-default-300 rounded-md text-sm tracking-wider transition-all duration-300 hover:shadow-lg py-2 px-5">
                      <FaArrowLeft className="" />
                      Awesome Saas App
                      <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-white shadow-lg rounded-md z-50 p-4 w-72" role="tooltip">
                        <div className="flex items-center gap-5">
                          <img src={blog1} alt="" className="w-16 rounded" />
                          <div>
                            <h6 className="text-sm">Introducing new blazzing fast user interface</h6>
                            <p className="text-sm text-default-500">by Emily Blunt</p>
                          </div>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-center">
              <a href="#" className="border border-default-300 rounded-md text-sm tracking-wider transition-all duration-300 hover:shadow-lg py-2 px-5">
                View All
              </a>
            </div>
            <div>
              <div className="flex items-center md:justify-end justify-start">
                <div className="hs-tooltip overflow-hidden">
                  <button className="flex gap-3 items-center  hs-tooltip-toggle border border-default-300 rounded-md text-sm tracking-wider transition-all duration-300 hover:shadow-lg py-2 px-5">
                    Desktop App
                    <FaArrowRight className="ms-2" />
                    <div className="hs-tooltip-content bg-white shadow-lg hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible rounded-md transition-all opacity-0 invisible z-50 p-4 w-72" role="tooltip">
                      <div className="flex items-center gap-5">
                        <img src={blog2} alt="" className="w-16 rounded" />
                        <div>
                          <h6 className="text-sm">What you should know before...</h6>
                          <p className="text-sm text-default-500">by Emily Blunt</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Navigation;
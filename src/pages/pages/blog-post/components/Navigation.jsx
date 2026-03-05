import avatar2 from '@/assets/images/avatars/img-2.jpg';
import blog2 from '@/assets/images/blog/blog-2.png';
import blog3 from '@/assets/images/blog/blog-3.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return <>
      <section>
        <div className="container">
          <div className="border-t border-default-200 mb-5" />
          <div className="grid md:grid-cols-4 grid-cols-1 items-center">
            <div>
              <div className="flex items-center justify-start">
                <div className="hs-tooltip overflow-hidden">
                  <button className="flex items-center hs-tooltip-toggle border border-default-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5">
                    <FaArrowLeft className="me-2" /> Prev Post
                    <div className="hs-tooltip-content bg-white shadow-lg hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible rounded-md transition-all opacity-0 invisible z-50 p-4 w-72" role="tooltip">
                      <div className="flex items-center gap-5">
                        <img src={blog3} alt='' className="w-16 rounded" />
                        <div>
                          <h6 className="text-sm">Introducing new blazzing fast user interface</h6>
                          <p className="text-sm text-default-500">by Emily Blunt</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="my-5 md:my-0">
                <div className="flex md:justify-center justify-start items-center gap-4">
                  <img src={avatar2} alt='' className="h-12 w-12 rounded-full" />
                  <div>
                    <h6 className="text-sm transition-all hover:text-primary">
                      <Link to="">Emily Blunt</Link>
                    </h6>
                    <p className="text-sm text-default-500">I write about the latest trend in web design and development.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:justify-end justify-start">
              <div className="hs-tooltip overflow-hidden">
                <button className="flex items-center hs-tooltip-toggle border border-default-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5">
                  Prev Post <FaArrowRight className="ms-2" />
                  <div className="hs-tooltip-content bg-white shadow-lg hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible rounded-md transition-all opacity-0 invisible z-50 p-4 w-72" role="tooltip">
                    <div className="flex items-center gap-5">
                      <img src={blog2} alt='' className="w-16 rounded" />
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
          <div className="border-b border-default-200 mt-5" />
        </div>
      </section>
    </>;
};
export default Navigation;
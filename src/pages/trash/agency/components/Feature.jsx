import agency1 from '@/assets/images/features/agency1.jpg';
import agency2 from '@/assets/images/features/agency2.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
const Feature = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Latest</span>
            <h1 className="text-3xl font-medium my-3">Featured Work</h1>
            <p className="font-medium text-default-400 mt-5 mb-4">Explore some of our latest website projects</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project</h3>
                    <p className="font-medium text-default-500 pe-8">Branding, Interaction, Web Design</p>
                  </div>
                  <div>
                    <img src={agency1} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                    <Link to="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project 2</h3>
                    <p className="font-medium text-default-500 pe-8">Branding, Web Design &amp; Development</p>
                  </div>
                  <div>
                    <img src={agency2} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                    <Link to="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-duration={800}>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project 3</h3>
                    <p className="font-medium text-default-500 pe-8">Branding, Interaction, Web Design</p>
                  </div>
                  <div>
                    <img src={agency2} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                    <Link to="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project 4</h3>
                    <p className="font-medium text-default-500 pe-8"> Branding, Web Design &amp; Development</p>
                  </div>
                  <div>
                    <img src={agency1} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300">
                    <Link to="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-black rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <a href="#" className="flex items-center py-3 px-6 rounded border border-black hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500">
              Explore All Work <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
      </section>
    </>;
};
export default Feature;
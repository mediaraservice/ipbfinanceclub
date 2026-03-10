import agency1 from '@/assets/images/features/agency1.jpg';
import agency2 from '@/assets/images/features/agency2.jpg';
import { FaArrowRight } from 'react-icons/fa6';
const Portfolio = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <h1 className="text-3xl font-medium my-3">Latest Projects</h1>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <p>
                <a href="" className="font-medium text-blue-600">
                  UI/UX Design
                </a>
              </p>
              <p>
                <a href="" className="font-medium hover:text-blue-600">
                  Branding
                </a>
              </p>
              <p>
                <a href="" className="font-medium hover:text-blue-600">
                  Marketing
                </a>
              </p>
              <p>
                <a href="" className="font-medium hover:text-blue-600">
                  Web Development
                </a>
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 bg-default-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project</h3>
                    <p className="font-medium text-default-500 pe-8">Branding, Interaction, Web Design</p>
                  </div>
                  <div>
                    <img src={agency1} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
                    <a href="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 bg-default-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project 2</h3>
                    <p className="font-medium text-default-500 pe-8">Branding, Web Design &amp; Development</p>
                  </div>
                  <div>
                    <img src={agency2} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
                    <a href="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 bg-default-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project 3</h3>
                    <p className="font-medium text-default-500 pe-8">Branding, Interaction, Web Design</p>
                  </div>
                  <div>
                    <img src={agency2} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
                    <a href="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
            <div className="group relative mt-12 hover:opacity-80">
              <div className="pt-12 ps-12 bg-default-300/20 group-hover:bg-white/10 rounded-md group-hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="text-xl">Project 4</h3>
                    <p className="font-medium text-default-500 pe-8"> Branding, Web Design &amp; Development</p>
                  </div>
                  <div>
                    <img src={agency1} alt="" className="rounded-md" />
                  </div>
                  <div className="absolute inset-0 group-hover:flex items-center justify-center hidden transition-all duration-300 z-10">
                    <a href="#" className="inline-block">
                      <div className="flex items-center gap-3 py-[6px] px-3 bg-red-500 rounded-md">
                        <p className="text-sm font-semibold text-white">View Project</p>
                        <FaArrowRight className="text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 group-hover:bg-default-300/20 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Portfolio;
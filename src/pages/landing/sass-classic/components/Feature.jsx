import saas1 from '@/assets/images/hero/saas1.png';
import saas2 from '@/assets/images/hero/saas2.png';
import Icon from '@/components/wrappers/Icon';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
const Feature = () => {
  return <>
      <section className="overflow-hidden">
        <div className="xl:py-24 py-16">
          <div className="container">
            <div className="text-center">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">Better Management. Better Performance</h1>
              <p className="text-default-500">
                Start working with <span className="text-primary">Prompt</span> to manage your workforce better
              </p>
            </div>
            <div className="xl:pt-16 xl:pb-28 py-16">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
                <div className="relative">
                  <div className="hidden sm:block">
                    <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('../images/pattern/dot5.svg')]"></div>
                    <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('../images/pattern/dot2.svg')]"></div>
                  </div>
                  <img src={saas1} alt="saas1" data-aos="fade-right" data-aos-duration={400} />
                </div>
                <div className="lg:ms-24">
                  <div className="hs-accordion-group" data-aos="fade-up" data-aos-duration={500}>
                    <div className="hs-accordion active">
                      <button className="hs-accordion-toggle active pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-default-800 transition-all hover:text-default-500 dark:text-default-200 dark:hover:text-default-400">
                        <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                          <Icon icon="solar:shield-user-bold-duotone" className="size-6 text-blue-500" />
                        </div>
                        <h1 className="font-medium mb-4 mt-2">Improve Employee Experience</h1>
                      </button>
                      <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ps-16">
                        <p className="text-default-700 dark:text-default-300">
                          Before we dive into why companies must invest in employee experience (EX), it’s important to understand what this concept
                          entails.
                        </p>
                        <div className="mt-7 flex items-center">
                          <a href="#" className="text-primary flex items-center">
                            Learn more <FaArrowRight className="ms-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-default-200 my-6" />
                    {/* 2 */}
                    <div className="hs-accordion">
                      <button className="hs-accordion-toggle pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-default-800 transition hover:text-default-500 dark:text-default-200 dark:hover:text-default-400">
                        <div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                          <Icon icon="solar:user-plus-bold-duotone" className="size-6 text-green-500" />
                        </div>
                        <h1 className="font-medium mb-4 mt-2">Hiring &amp; Onboarding</h1>
                      </button>
                      <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 ps-16">
                        <p className="text-default-700 dark:text-default-300">
                          Post your job, interview candidates and make offers, all on Prompt. Start hiring today.
                        </p>
                        <div className="mt-7 flex items-center">
                          <a href="#" className="text-primary flex items-center">
                            Learn more <FaArrowRight className="ms-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-default-200 my-6" />
                    {/* 3 */}
                    <div className="hs-accordion">
                      <button className="hs-accordion-toggle pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-default-800 transition hover:text-default-500 dark:text-default-200 dark:hover:text-default-400">
                        <div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                          <Icon icon="solar:chart-square-bold-duotone" className="size-6 text-orange-500" />
                        </div>
                        <h1 className="font-medium mb-4 mt-2">People Data &amp; Analytics</h1>
                      </button>
                      <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 ps-16">
                        <p className="text-default-700 dark:text-default-300">
                          Finding committed employees is one of public and private organizations’ top priorities.
                        </p>
                        <div className="mt-7 flex items-center">
                          <a href="#" className="text-primary flex items-center">
                            Learn more <FaArrowRight className="ms-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-2 grid-cols-1n gap-6 items-center">
                <div className="order-2 lg:order-1 2xl:w-9/12" data-aos="fade-up" data-aos-duration={500}>
                  <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
                    <Icon icon="solar:star-circle-bold-duotone" className="size-7 text-primary" />
                  </div>
                  <h1 className="text-3xl/tight font-medium mt-6 mb-4">Smart Payroll. Paying your people couldn&apos;t be easier</h1>
                  <p className="text-default-500">
                    You can modify your pages with drag-dropping , can import demos with just ” One Click” and can modify theme setting easy-to-use
                    options panel.
                  </p>
                  <div className="flex items-center mt-12">
                    <a href="#" className="text-primary flex items-center">
                      Learn more <FaArrowRight className="ms-2" />
                    </a>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="hidden sm:block">
                    <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('../images/pattern/dot2.svg')]"></div>
                    <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../images/pattern/dot5.svg')]"></div>
                  </div>
                  <img src={saas2} alt="saas2" data-aos="fade-left" data-aos-duration={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:py-24 py-16">
          <div className="container" data-aos="fade-up" data-aos-duration={600}>
            <div className="text-center">
              <h1 className="text-2xl font-medium">Any many more powerful features</h1>
            </div>
            <div className="py-16">
              <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="order-1">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Hire and Retain Top Talent
                    </p>
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Team Management
                    </p>
                  </div>
                </div>
                <div className="order-3 xl:order-2">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Stay Compliant
                    </p>
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Improve Productivity
                    </p>
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Improve Experience
                    </p>
                  </div>
                </div>
                <div className="order-4 xl:order-3">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Self-service Time Tracking
                    </p>
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Performance Management
                    </p>
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Expert HR
                    </p>
                  </div>
                </div>
                <div className="order-2 xl:order-4">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> New Hire Checklist
                    </p>
                    <p className="flex items-center gap-3 text-base font-semibold">
                      <FaCheck className="text-green-500 text-xl" /> Tax Calculator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center mx-auto">
              <a href="#" className="bg-primary flex items-center text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3">
                Sign Up Now <FaArrowRight className="ms-2" />
              </a>
            </button>
          </div>
        </div>
      </section>
    </>;
};
export default Feature;
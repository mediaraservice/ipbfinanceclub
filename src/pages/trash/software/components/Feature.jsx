import desktop1 from '@/assets/images/features/desktop1.gif';
import desktop from '@/assets/images/hero/desktop.png';
import Icon from '@/components/wrappers/Icon';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Feature = () => {
  return <>
      <section className="py-16 sm:py-24">
        <div className="container">
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
              <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-duration={600}>
                <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">Free Cloud Account!</span>
                <h1 className="text-3xl/tight font-medium mt-3 mb-4">Smart auto deployment</h1>
                <p className="text-default-500">Prompts automatically deploys your changes on the cloud</p>
                <div className="flex flex-col gap-4 mt-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <Icon icon="solar:upload-line-duotone" className="size-6 text-primary" />
                    </div>
                    <h1 className="font-medium">Auto saves the files, one-click sync</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <Icon icon="solar:branching-paths-down-bold-duotone" className="size-6 text-primary" />
                    </div>
                    <h1 className="font-medium">Auto track every changes/revision</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <Icon icon="solar:users-group-two-rounded-bold-duotone" className="size-6 text-primary" />
                    </div>
                    <h1 className="font-medium">Modern way to collaborate with team</h1>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration={700}>
                <img src={desktop1} alt="" />
              </div>
            </div>
          </div>
          <div className="py-16 sm:py-24">
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
              <div>
                <img src={desktop} alt="" data-aos="fade-right" data-aos-duration={600} />
              </div>
              <div data-aos="fade-left" data-aos-duration={700}>
                <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">Auto Sync</span>
                <h1 className="text-3xl/tight font-medium mt-3 mb-4">AutoSync deployment</h1>
                <p className="text-default-500">Prompts automatically sync your scheduled sync configuration</p>
                <div className="flex flex-col gap-4 mt-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <Icon icon="solar:settings-bold-duotone" className="size-6 text-primary" />
                    </div>
                    <h1 className="font-medium">Auto saves the files, one-click sync</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <Icon icon="solar:tuning-3-line-duotone" className="size-6 text-primary" />
                    </div>
                    <h1 className="font-medium">Auto track every changes/revision</h1>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <Icon icon="solar:battery-charge-bold-duotone" className="size-6 text-primary" />
                    </div>
                    <h1 className="font-medium">A powerful command line interface</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration={700}>
          <div className="bg-yellow-50 p-12">
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
              <div className="lg:col-span-2">
                <h4 className="text-base mb-10">Prompt works on Every Device</h4>
                <div className="flex flex-wrap gap-10">
                  <div className="text-center">
                    <Icon icon="solar:laptop-minimalistic-bold-duotone" className="size-10 mx-auto text-black" />
                    <h6>Windows</h6>
                  </div>
                  <div className="text-center">
                    <Icon icon="solar:laptop-bold-duotone" className="size-10 mx-auto text-black" />
                    <h6>Mac</h6>
                  </div>
                  <div className="text-center">
                    <Icon icon="solar:window-frame-bold-duotone" className="size-10 mx-auto text-black" />
                    <h6>Browser</h6>
                  </div>
                  <div className="text-center">
                    <Icon icon="solar:smartphone-2-bold-duotone" className="size-10 mx-auto text-black" />
                    <h6>Mobile</h6>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex mt-14">
                  <a href="#" className="flex items-center py-2 px-4 rounded border border-primary bg-primary text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                    Get Propmt for Free <FaArrowRight className="ms-2" />
                  </a>
                </div>
                <div className="mt-2">
                  <p className="inline-flex text-xs">
                    Looking for other platforms?
                    <Link to="" className="hover:text-primary">
                      Click Here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Feature;
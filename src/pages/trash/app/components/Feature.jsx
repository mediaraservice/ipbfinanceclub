import app from '@/assets/images/features/app2.png';
import Icon from '@/components/wrappers/Icon';
const Feature = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">App works best with Prompt</h2>
            <p className="text-default-500">
              Start working with <span className="text-primary">Prompt</span> to showcase your app to thousands of people.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-6 mt-5">
            <div className="relative">
              <div className="hidden md:block">
                <div className="absolute lg:w-9/12 h-3/5 w-72 -z-10 rotate-[20deg] rounded-3xl bg-orange-400/10 end-44  bottom-12 lg:end-10"></div>
                <div className="after:absolute after:-z-10 after:w-full after:h-full after:bg-[url('../images/pattern/dot4.svg')]"></div>
              </div>
              <img src={app} className="lg:w-full w-1/2 mx-auto" data-aos="zoom-in-right" alt="app" />
            </div>
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 lg:ps-32">
                <div>
                  <span className="flex items-center justify-center rounded-md size-12 bg-blue-100">
                    <Icon icon="solar:letter-opened-bold-duotone" className="size-6 text-primary" />
                  </span>
                  <h4 className="text-base mt-6 mb-3">First feature</h4>
                  <p className="text-default-500">
                    We use a customized application tobe specifically designed a testing gnose to keep away for people.
                  </p>
                </div>
                <div>
                  <span className="flex items-center justify-center rounded-md size-12 bg-green-100">
                    <Icon icon="solar:shield-check-bold-duotone" className="size-6 text-green-500" />
                  </span>
                  <h4 className="text-base mt-6 mb-3">Second feature</h4>
                  <p className="text-default-500">
                    In order to design a mobile app that is going to be module downloaded and accessed frequently by users.
                  </p>
                </div>
                <div>
                  <span className="flex items-center justify-center rounded-md size-12 bg-orange-50">
                    <Icon icon="solar:bolt-bold-duotone" className="size-6 text-orange-500" />
                  </span>
                  <h4 className="text-base mt-6 mb-3">Third feature</h4>
                  <p className="text-default-500"> A Private Limited is the most popular type of partnership Malta. The limited liabilityis</p>
                </div>
                <div>
                  <span className="flex items-center justify-center rounded-md size-12 bg-teal-100">
                    <Icon icon="solar:notification-unread-bold-duotone" className="size-6 text-teal-500" />
                  </span>
                  <h4 className="text-base mt-6 mb-3">Fourth feature</h4>
                  <p className="text-default-500">
                    Few derived into talking being in merit long you&apos;d his the of to had the to duties, it them one...
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
import marketing from '@/assets/images/features/marketing.jpg';
import marketing4 from '@/assets/images/features/marketing4.jpg';
import whiteWave from '@/assets/images/shapes/white-wave.svg';
import Icon from '@/components/wrappers/Icon';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const featureData = [{
  title: 'Automated Campaigns',
  description: 'Praesent ipsum libero, sollicitudin elementum et, condimentum non augue.',
  icon: 'solar:letter-bold-duotone',
  variant: 'blue-500'
}, {
  title: 'Business Analytics',
  description: 'Mauris dapibus blandit hendrerit. Proin auctor est at bibendum faucibus sodales.',
  icon: 'solar:diagram-up-bold-duotone',
  variant: 'red-500'
}, {
  title: 'Easy Setup',
  description: 'Fusce mattis nibh vel tortor scelerisque, a pretium dolor posuere.',
  icon: 'solar:settings-bold-duotone',
  variant: 'teal-500'
}];
const Feature = () => {
  return <>
      <section className="py-16 lg:py-32">
        <div className="py-10">
          <div className="container">
            <div className="text-center">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
              <h1 className="text-3xl font-medium mt-3 mb-4">Marketing Solutions that works for everyone</h1>
              <p className="text-default-500">
                Start working with <span className="text-primary"> Prompt</span> to manage your marketing better.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-6 gap-10 mt-16">
              {featureData.map((item, idx) => <div data-aos="fade-up" data-aos-duration={300} key={idx}>
                  <div className={`h-12 w-12 rounded-md bg-${item.variant}/10 flex items-center justify-center`}>
                    <Icon icon={item.icon} className={`size-7 text-${item.variant}`} />
                  </div>
                  <h1 className="mb-3 mt-4 text-lg">{item.title}</h1>
                  <p className="text-default-500">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
        <div className="py-16 lg:py-32 overflow-x-hidden" data-aos="fade-up">
          <div className="container">
            <div className="relative">
              <div className="lg:absolute lg:max-w-md lg:translate-y-1/2 z-10 mb-14">
                <div className="bg-white shadow-lg border border-default-200 rounded-lg p-4 w-full">
                  <div className="relative">
                    <div className="before:w-20 before:h-20 before:absolute before:-bottom-12 before:-start-12 before:-z-10 before:bg-[url('../images/pattern/dot2.svg')] hidden sm:block"></div>
                    <span className="h-14 w-14 bg-primary/10 rounded-md flex justify-center items-center">
                      <Icon icon="solar:fire-bold-duotone" className="size-6 text-primary" />
                    </span>
                    <h4 className="font-medium text-lg my-2">Smart Campaign Monitoring</h4>
                    <p className="text-default-500">
                      Et harum quidem rerum facilis est et expedita distinctio at libero tempore cum soluta nobis est eligendi optio cumque.
                    </p>
                    <div className="mt-5 flex items-center">
                      <Link to="#" className="text-primary text-sm flex items-center">
                        Learn more <FaArrowRight className="ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={marketing} alt="" className="ms-auto rounded" />
                <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 after:-z-10 after:bg-[url('../images/pattern/dot5.svg')] hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="container">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center" data-aos="fade-up">
              <div className="lg:col-span-2">
                <span className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon icon="solar:server-2-bold-duotone" className="size-6 text-primary" />
                </span>
                <h1 className="text-3xl/tight font-medium mt-5 mb-4">Advanced Features</h1>
                <p className="text-default-500">
                  Aenean sagittis tellus lacus, nec aliquet mi gravida at. Aenean velit purus, consectetur ut lobortis ac, dignissim id mi.
                </p>
                <div className="mt-5 flex items-center">
                  <Link to="#" className="text-primary text-sm flex items-center">
                    Learn more <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white shadow-lg border border-default-200 rounded-lg p-10 lg:w-full md:w-1/2 sm:w-3/4 w-full">
                  <div className="flex flex-col gap-5">
                    <h6 className="flex items-center gap-3 font-medium text-sm">
                      <Icon icon="tabler:circle-check" className="size-6 text-green-500" />
                      Unlimited Campaigns
                    </h6>
                    <h6 className="flex items-center gap-3 font-medium text-sm">
                      <Icon icon="tabler:circle-check" className="size-6 text-green-500" />
                      Detailed Reporting
                    </h6>
                    <h6 className="flex items-center gap-3 font-medium text-sm">
                      <Icon icon="tabler:circle-check" className="size-6 text-green-500" />
                      Auto Schedule Tuning
                    </h6>
                    <h6 className="flex items-center gap-3 font-medium text-sm">
                      <Icon icon="tabler:circle-check" className="size-6 text-green-500" />
                      Smart Analytics
                    </h6>
                    <h6 className="flex items-center gap-3 font-medium text-sm">
                      <Icon icon="tabler:circle-check" className="size-6 text-green-500" />
                      Notifications
                    </h6>
                    <h6 className="flex items-center gap-4 font-medium text-sm">
                      <Icon icon="fa6-solid:arrow-right" className="size-6 text-green-500" />
                      <p className="text-sm">And More </p>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-default-100/70 to-default-100/50 relative py-16 lg:py-32">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whiteWave} alt="white-wave-svg" className="w-full -scale-x-100" />
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center" data-aos="fade-up">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl/tight font-medium mb-5">Monitor what is being performed anytime</h1>
              <p className="text-default-500">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias...
              </p>
              <div>
                <button className="flex items-center gap-2 bg-primary text-white rounded-lg text-sm font-semibold flex-none shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40  px-8 py-3 mt-8">
                  Start Free Trial <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src={marketing4} alt="marketing4" className="shadow" />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Feature;
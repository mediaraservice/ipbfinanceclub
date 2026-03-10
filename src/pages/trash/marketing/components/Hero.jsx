import marketing from '@/assets/images/hero/marketing.png';
import whiteWave from '@/assets/images/shapes/white-wave.svg';
const Hero = () => {
  return <>
      <section className="relative" style={{
      background: 'linear-gradient(rgba(0,85,255,.07) 0,rgba(0,85,255,.05) 100%)'
    }}>
        <section className="relative pt-36 pb-24">
          <div className="container">
            <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
              <div className="lg:col-span-4" data-aos="fade-right">
                <div className="relative 2xl:-ml-64 lg:-ml-28 2xl:min-w-[130%] lg:w-[113%] w-full">
                  <img src={marketing} alt="marketing-img" />
                </div>
              </div>
              <div className="lg:col-span-3" data-aos="fade-left">
                <div className="text-center sm:text-start">
                  <h1 className="text-3xl/snug sm:text-4xl/snug xl:text-5xl/snug font-semibold mb-7">
                    Boost your{' '}
                    <span className="relative after:bg-green-500/50 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                      sales &nbsp;
                    </span>
                    with ease
                  </h1>
                  <p className="text-base/relaxed text-default-500">Explore a fully automated RIO driven digital marketing platform.</p>
                  <div className="flex sm:flex-row flex-col gap-2 mt-10">
                    <input type="email" className="sm:w-[75%] text-sm border-default-300 focus:border-default-200 focus:ring-0 rounded-md bg-white py-3" id="Email" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                    <button className="bg-primary text-white rounded-md text-sm font-semibold flex-none shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-8 py-3">
                      Start Free Trial
                    </button>
                  </div>
                  <p className="text-default-400 text-xs mt-2">* No Credit Card Required</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <img src={whiteWave} alt="white-wave-svg" className="w-full -scale-x-100 -scale-y-100" />
        </div>
      </section>
    </>;
};
export default Hero;
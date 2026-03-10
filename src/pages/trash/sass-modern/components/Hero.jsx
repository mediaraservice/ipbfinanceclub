import saas1 from '@/assets/images/hero/saas1.png';
import saas2 from '@/assets/images/hero/saas2.png';
import saas3 from '@/assets/images/hero/saas3.png';
import whitewave from '@/assets/images/shapes/white-wave.svg';
import Icon from '@/components/wrappers/Icon';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Hero = () => {
  return <>
      <section className="bg-gradient-to-t from-default-500/10 relative">
        <section className="relative pt-44 pb-36">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-center sm:text-start">
                  <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                    The best way to
                    <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                      showcase
                    </span>
                    your saas
                  </h1>
                  <p className="sm:text-lg text-default-500">
                    Make your saas application stand out with high-quality landing page designed and developed by professional
                  </p>
                  <div className="flex gap-3 mt-16">
                    <input type="email" className="inline-block text-sm border border-default-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 " id="Email" aria-describedby="emailHelp" placeholder="Your Email" />
                    <button className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3">
                      Sign Up
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-5 mt-5">
                    <div className="flex items-center gap-2">
                      <Icon icon="tabler:check" className="size-5 text-green-500" />
                      <p className="text-sm text-default-700">Free 14-day Demo</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon="tabler:check" className="size-5 text-green-500" />
                      <p className="text-sm text-default-700">No credit card needed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="hidden sm:block">
                    <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../images/pattern/dot2.svg')]"></div>
                    <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('../images/pattern/dot5.svg')]"></div>
                  </div>
                  <div id="swiper_one" className="swiper border-[6px] border-white bg-white 2xl:w-[140%]" data-aos="fade-left" data-aos-duration={1000}>
                    <Swiper modules={[Autoplay]} autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }} loop>
                      <SwiperSlide>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <a href="#" className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                            <Icon icon="tabler:player-play-filled" className="size-5 text-white" />
                          </a>
                        </div>
                        <img src={saas1} alt="saas1" className="w-full h-full rounded-md" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <a href="#" className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                            <Icon icon="tabler:player-play-filled" className="size-5 text-white" />
                          </a>
                        </div>
                        <img src={saas2} alt="saas2" className="w-full h-full rounded-md" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <a href="#" className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                            <Icon icon="tabler:player-play-filled" className="size-5 text-white" />
                          </a>
                        </div>
                        <img src={saas3} alt="saas3" className="w-full h-full rounded-md" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="white-wave-svg" className="w-full -scale-x-100 -scale-y-100" />
        </div>
      </section>
    </>;
};
export default Hero;
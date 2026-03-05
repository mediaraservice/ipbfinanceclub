import saas1 from '@/assets/images/hero/saas1.png';
import saas2 from '@/assets/images/hero/saas2.png';
import saas3 from '@/assets/images/hero/saas3.png';
import Icon from '@/components/wrappers/Icon';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Hero = () => {
  return <>
      <div className="pt-36 sm:pb-96 pb-80 relative bg-gradient-to-t from-default-500/10">
        <div className="container">
          <div className="text-center lg:w-11/12 mx-auto">
            <div>
              <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5">
                The best way to
                <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                  showcase
                </span>
                your saas
              </h1>
              <p className="sm:text-lg text-default-500">
                Make your saas application stand out with high-quality landing page designed and developed by professional
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
                <div className="flex items-center">
                  <input type="text" id="email-input" name="email-input" placeholder="Your Name" className="w-full rounded border-default-300 focus:border-default-400 focus:ring-0 bg-white py-2 px-4" />
                </div>
                <div className="flex items-center">
                  <input type="text" id="email-input" name="email-input" placeholder="Your Email" className="w-full rounded border-default-300 focus:border-default-400 focus:ring-0 bg-white py-2 px-4" />
                </div>
                <a href="#" className="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50">
                  Sign Up
                </a>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
                <div className="flex items-center gap-2">
                  <Icon icon="tabler:circle-check" className="size-5 text-green-500" />
                  <p className="text-sm text-default-700">Free 14-day Demo</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="tabler:circle-check" className="size-5 text-green-500" />
                  <p className="text-sm text-default-700">No credit card needed</p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="tabler:circle-check" className="size-5 text-green-500" />
                  <p className="text-sm text-default-700">Free 14-day Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="relative sm:-mt-80 -mt-64">
          <div className="hidden sm:block">
            <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 after:bg-[url('../images/pattern/dot5.svg')]"></div>
            <div className="before:w-24 before:h-24 before:absolute before:-bottom-10 before:start-10 before:bg-[url('../images/pattern/dot2.svg')]"></div>
          </div>
          <div id="swiper_one" className="swiper border-[10px] border-white bg-white shadow-lg rounded-md w-5/6" data-aos="fade-up" data-aos-duration={2000}>
            <Swiper modules={[Autoplay]} autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }} spaceBetween={30} loop>
              <SwiperSlide>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="#" className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Icon icon="tabler:player-play-filled" className="size-5 text-white" />
                  </a>
                </div>
                <img src={saas1} alt="saas1" className="rounded-md" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="#" className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Icon icon="tabler:player-play-filled" className="size-5 text-white" />
                  </a>
                </div>
                <img src={saas2} alt="saas2" className="rounded-md" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="#" className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Icon icon="tabler:player-play-filled" className="size-5 text-white" />
                  </a>
                </div>
                <img src={saas3} alt="saas3" className="rounded-md" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>;
};
export default Hero;
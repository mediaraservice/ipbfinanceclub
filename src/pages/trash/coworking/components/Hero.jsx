import coworking1 from '@/assets/images/hero/coworking1.jpg';
import coworking2 from '@/assets/images/hero/coworking2.png';
import coworking3 from '@/assets/images/hero/coworking3.png';
import Icon from '@/components/wrappers/Icon';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Hero = () => {
  return <>
      <section className="bg-orange-300/10 pt-36 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <h1 className="2xl:text-5xl/snug sm:text-4xl/snug text-3xl">Explore the best coworking space in the heart of the City</h1>
            <p className="2xl:w-2/3 mx-auto text-lg font-medium">
              No more conventional four-walled office. The fully comformtable seating solution for you.
            </p>
          </div>
          <div>
            <div className="sm:p-6 p-3 bg-white rounded-xl sm:mx-10 mx-5 translate-y-1/2 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <h5 className="text-sm">Search your perfect space</h5>
                  <input type="text" id="fname" name="fname" placeholder="Enter location" className="form-input text-sm font-medium focus:ring-0 focus:border-default-500 rounded border-default-400" />
                  <a href="#" className="py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                    Find Space
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <div className="button-prev">
                    <div className="px-3 py-2 flex items-center justify-center rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                      <Icon icon="tabler:chevron-left" />
                    </div>
                  </div>
                  <div className="button-next">
                    <div className="px-3 py-2 flex items-center justify-center rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                      <Icon icon="tabler:chevron-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="swiper_one" className="swiper rounded-xl" data-aos="fade-up">
              <Swiper modules={[Autoplay, Navigation]} autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }} loop navigation={{
              nextEl: '.swiper-custom-next',
              prevEl: '.swiper-custom-prev'
            }}>
                <SwiperSlide>
                  <div>
                    <img src={coworking2} alt="" className="w-full h-[520px] rounded-xl" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={coworking3} alt="" className="w-full h-[520px] rounded-xl" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={coworking1} alt="" className="w-full h-[520px] rounded-xl" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;
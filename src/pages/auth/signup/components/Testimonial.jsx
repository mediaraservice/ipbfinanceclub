import saas1 from '@/assets/images/hero/saas1.png';
import saas2 from '@/assets/images/hero/saas2.png';
import saas3 from '@/assets/images/hero/saas3.png';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonial = () => {
  return <>
      <Swiper modules={[Autoplay, Pagination]} pagination={{
      clickable: true
    }} autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }} loop>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="text-center w-3/5 mx-auto">
              <img src={saas1} alt="" className="w-full" />
            </div>
            <div className="text-center my-6 pb-12">
              <h5 className="font-medium text-base/[1.6] text-default-600 my-2.5">Manage your saas business with ease</h5>
              <p className="text-sm/[1.6] text-default-500 mb-4">
                Make your saas application stand out with high-quality landing page designed and developed by professional.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="text-center w-3/5 mx-auto">
              <img src={saas2} alt="" className="w-full" />
            </div>
            <div className="text-center my-6 pb-12">
              <h5 className="font-medium text-base/[1.6] text-default-600 my-2.5">The best way to showcase your mobile app</h5>
              <p className="text-sm/[1.6] text-default-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="text-center w-3/5 mx-auto">
              <img src={saas3} alt="" className="w-full" />
            </div>
            <div className="text-center my-6 pb-12">
              <h5 className="font-medium text-base/[1.6] text-default-600 my-2.5">Smart Solution that convert Lead to Customer</h5>
              <p className="text-sm/[1.6] text-default-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>;
};
export default Testimonial;
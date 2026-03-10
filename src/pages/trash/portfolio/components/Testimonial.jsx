import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import whiteWave from '@/assets/images/shapes/white-wave.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const testimonialData = [{
  avatar: avatar1,
  description: 'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
  name: 'John Stark',
  position: 'Engineering Director',
  image: amazon
}, {
  avatar: avatar2,
  description: 'I was bad at front-end until I discovered with Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
  name: 'Cersei Lannister',
  position: 'Senior Project Manager',
  image: google
}];
const Testimonial = () => {
  return <>
      <section className="py-20 relative overflow-x-hidden bg-gradient-to-b from-red-500/5 to-amber-500/5" data-aos="fade-up" data-aos-duration={600}>
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whiteWave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="container relative">
          <div className="relative z-20">
            <div className="flex items-center justify-between pb-14">
              <div>
                <h2 className="md:text-3xl text-xl font-semibold my-5">Kind words from excellent clients</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="button-prev swiper-custom-prev cursor-pointer">
                  <FaArrowLeft />
                </div>
                <div className="button-next swiper-custom-next cursor-pointer">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="hidden sm:block">
                <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('../images/pattern/dot3.svg')]" />
                <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('../images/pattern/dot3.svg')]" />
              </div>

              <div id="swiper_two" className="swiper">
                <Swiper modules={[Autoplay, Navigation]} autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }} slidesPerView={2} spaceBetween={30} loop navigation={{
                nextEl: '.swiper-custom-next',
                prevEl: '.swiper-custom-prev'
              }}>
                  {testimonialData.map((item, idx) => <SwiperSlide key={idx}>
                      <div className="p-12 bg-white border border-default-200">
                        <p className="text-default-800">{item.description}</p>
                        <div className="flex items-center justify-between mt-5">
                          <div className="flex items-center gap-3">
                            <div>
                              <img src={item.avatar} alt="" className="w-10 rounded-full" />
                            </div>
                            <div>
                              <h6>{item.name}</h6>
                              <p className="text-sm text-default-500">{item.position}</p>
                            </div>
                          </div>
                          <div>
                            <img src={item.image} alt="" className="w-24" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>)}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Testimonial;
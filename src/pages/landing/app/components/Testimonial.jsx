import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import whitewave from '@/assets/images/shapes/white-wave.svg';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const testimonials = [{
  name: 'John Stark',
  position: 'Engineering Director',
  description: 'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
  image: avatar1
}, {
  name: 'Cersei Lannister',
  position: 'Senior Project Manager',
  description: 'I was bad at front-end until I discovered with Tailwind CSS. I have a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
  image: avatar2
}, {
  name: 'John Stark',
  position: 'Engineering Director',
  description: 'Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.',
  image: avatar1
}, {
  name: 'Cersei Lannister',
  position: 'Senior Project Manager',
  description: 'I was bad at front-end until I discovered with Tailwind CSS. I have a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.',
  image: avatar2
}];
const Testimonial = () => {
  return <>
      <section className="bg-default-100 relative py-20 overflow-x-hidden" data-aos="fade-up" data-aos-duration={500}>
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="container relative">
          <div className="relative z-20">
            <div className="flex items-center justify-between pb-14">
              <div>
                <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Testimonials</span>
                <h2 className="md:text-3xl text-xl font-semibold my-5">What people say</h2>
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
                <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('../images/pattern/dot3.svg')]"></div>
                <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('../images/pattern/dot3.svg')]"></div>
              </div>
              <div id="swiper_two" className="swiper">
                <div className="swiper-wrapper">
                  <Swiper modules={[Autoplay, Navigation]} autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }} slidesPerView={2} spaceBetween={30} loop navigation={{
                  nextEl: '.swiper-custom-next',
                  prevEl: '.swiper-custom-prev'
                }}>
                    {testimonials.map((item, idx) => <SwiperSlide className="swiper-slide" key={idx}>
                        <div className="p-10 bg-white">
                          <p className="text-default-800">{item.description}</p>
                          <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center gap-3">
                              <div>
                                <img alt="img" src={item.image} className="w-10 rounded-full" />
                              </div>
                              <div>
                                <h6>{item.name}</h6>
                                <p className="text-sm text-default-500">{item.position}</p>
                              </div>
                            </div>
                            <div>
                              <span className="flex gap-1 items-center text-yellow-500 text-base">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>)}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Testimonial;
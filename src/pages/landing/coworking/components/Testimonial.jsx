import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const testimonials = [{
  statement: 'Great office and great location. Worth the money if it makes sense for your business.',
  customer: {
    avatar: avatar1,
    name: 'Cersei Lannister',
    designation: 'Senior Project Manager'
  },
  logo: google
}, {
  statement: 'Awesome vibe and great staff! Top cooworking spots in the city! Loved to be here!',
  customer: {
    avatar: avatar2,
    name: 'John Stark',
    designation: 'Engineering Director'
  },
  logo: amazon
}, {
  statement: 'Great office and great location. Worth the money if it makes sense for your business.',
  customer: {
    avatar: avatar1,
    name: 'Cersei Lannister',
    designation: 'Senior Project Manager'
  },
  logo: google
}, {
  statement: 'Awesome vibe and great staff! Top cooworking spots in the city! Loved to be here!',
  customer: {
    avatar: avatar2,
    name: 'John Stark',
    designation: 'Engineering Director'
  },
  logo: amazon
}];
const Testimonial = () => {
  return <>
      <section className="py-20" data-aos="fade-up">
        <div className="container">
          <div className="relative z-20">
            <div className="flex items-center justify-between pb-14">
              <div>
                <h2 className="md:text-3xl text-xl my-5">See what our members are saying</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="button-prev swiper-custom-prev cursor-pointer">
                  <FaArrowLeft className="text-primary" />
                </div>
                <div className="button-next swiper-custom-next cursor-pointer">
                  <FaArrowRight className="text-primary" />
                </div>
              </div>
            </div>
            <div>
              <div id="swiper_two" className="swiper">
                <Swiper modules={[Pagination, Autoplay, Navigation]} loop spaceBetween={30} autoplay={{
                delay: 2500
              }} breakpoints={{
                '576': {
                  slidesPerView: 1
                },
                '768': {
                  slidesPerView: 2
                }
              }} roundLengths navigation={{
                nextEl: '.swiper-custom-next',
                prevEl: '.swiper-custom-prev'
              }}>
                  {testimonials.map((item, idx) => <SwiperSlide key={idx}>
                      <div className="md:p-12 p-6 border border-default-200 rounded">
                        <h5 className="font-light">{item.statement}</h5>
                        <div className="flex items-center justify-between mt-5">
                          <div className="flex items-center gap-3">
                            <div>
                              <img src={item.customer.avatar} alt="" className="w-10 rounded-full" />
                            </div>
                            <div>
                              <h6 className="text-sm">{item.customer.name}</h6>
                              <p className="text-sm text-default-500">{item.customer.designation}</p>
                            </div>
                          </div>
                          <div>
                            <img src={item.logo} className="w-24" alt="" />
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
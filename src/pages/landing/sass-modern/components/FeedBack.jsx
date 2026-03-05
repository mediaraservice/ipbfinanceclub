import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar3 from '@/assets/images/avatars/img-3.jpg';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa6';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const feedBackData = [{
  image: avatar1,
  name: 'Cersei Lannister'
}, {
  image: avatar2,
  name: 'Cersei Lannister'
}, {
  image: avatar3,
  name: 'Cersei Lannister'
}];
const FeedBack = () => {
  return <>
      <section className="py-16 sm:py-24 overflow-x-hidden">
        <div className="container" data-aos="fade-up" data-aos-duration={600}>
          <div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
            <div className="col-span-3 lg:col-span-1">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Feedback</span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">What people say</h1>
              <p className="text-default-500">Few valuables words from our customers</p>
              <div className="flex gap-4 mt-10">
                <div className="button-prev swiper-custom-prev cursor-pointer text-xl transition-all duration-300 hover:text-primary">
                  <FaArrowLeft />
                </div>
                <div className="button-next swiper-custom-next cursor-pointer text-xl transition-all duration-300 hover:text-primary">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2 xl:col-span-3">
              <div className="relative">
                <div className="hidden sm:block">
                  <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../images/pattern/dot5.svg')]"></div>
                  <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../images/pattern/dot2.svg')]"></div>
                </div>
                <div id="swiper_one" className="swiper relative">
                  <Swiper modules={[Autoplay, Navigation]} autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }} navigation={{
                  nextEl: '.swiper-custom-next',
                  prevEl: '.swiper-custom-prev'
                }} loop spaceBetween={30}>
                    {feedBackData.map((item, idx) => <SwiperSlide className="p-10 border border-default-200 rounded-xl bg-white shadow" key={idx}>
                        <FaQuoteLeft className="text-default-500 text-5xl" />
                        <p className="my-4">
                          It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks,
                          but this one is far better than others. Simply loved it!
                        </p>
                        <div className="border-b border-default-200 w-full my-7" />
                        <div className="flex items-center gap-2">
                          <img src={item.image} alt={item.name} className="h-10 w-10 rounded-full" />
                          <div>
                            <h1 className="text-sm mb-1">{item.name}</h1>
                            <p className="text-default-500 text-xs">Senior Project Manager</p>
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
export default FeedBack;
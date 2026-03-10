import photo3 from '@/assets/images/photos/3.jpg';
import photo4 from '@/assets/images/photos/4.jpg';
import photo5 from '@/assets/images/photos/5.jpg';
import photo8 from '@/assets/images/photos/8.jpg';
import whiteWave from '@/assets/images/shapes/white-wave.svg';
const Culture = () => {
  return <>
      <section className="bg-gradient-to-r from-default-200/50 to-default-100/50 relative lg:py-24 py-16">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whiteWave} alt="white-wave-svg" className="w-full -scale-x-100" />
        </div>
        <div className="my-14">
          <div className="container relative">
            <div className="text-center">
              <span className="text-sm  bg-primary/10 text-primary/90 rounded-full px-3 py-1">Our Culture </span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">Our Culture</h1>
              <p className="text-default-500">
                At Prompt, We believe in a fully balanced personal and professional life, importance of focus, fun, self-motivation and full
                transparency.
              </p>
            </div>
            <div className="mt-14" data-aos="fade-up">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center">
                <div>
                  <img src={photo4} alt="photo-3" className="border-[6px] border-white bg-white shadow-md" />
                </div>
                <div>
                  <img src={photo5} alt="photo-4" className="border-[6px] border-white bg-white shadow-md" />
                </div>
                <div>
                  <img src={photo8} alt="photo-10" className="border-[6px] border-white bg-white shadow-md" />
                </div>
                <div>
                  <img src={photo3} alt="photo-5" className="border-[6px] border-white bg-white shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Culture;
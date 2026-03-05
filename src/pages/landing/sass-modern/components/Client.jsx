import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import shopify from '@/assets/images/brands/shopify.svg';
import spotify from '@/assets/images/brands/spotify.svg';
import whitewave from '@/assets/images/shapes/white-wave.svg';
const Client = () => {
  return <>
      <section className="bg-gradient-to-r from-default-100/70 to-default-100/50 relative xl:py-24 py-16">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="py-5">
          <div className="container" data-aos="fade-up" data-aos-duration={300}>
            <div className="text-center">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Clients</span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">The smart people management you need</h1>
              <p className="text-default-500">
                21,000+ organizations trust <span className="text-primary">Prompt</span> to drive perfomance &amp; engagement
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:gap-24 gap-10 mt-14">
              <div>
                <img src={amazon} alt="Brand" className="h-8" width={96} height={32} />
              </div>
              <div>
                <img src={google} alt="Brand" className="h-8" width={96} height={32} />
              </div>
              <div>
                <img src={paypal} alt="Brand" className="h-8" width={96} height={32} />
              </div>
              <div>
                <img src={spotify} alt="Brand" className="h-8" width={96} height={32} />
              </div>
              <div>
                <img src={shopify} alt="Brand" className="h-8" width={96} height={32} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Client;
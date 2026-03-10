import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import shopify from '@/assets/images/brands/shopify.svg';
import spotify from '@/assets/images/brands/spotify.svg';
const Client = () => {
  return <>
      <section className="xl:py-24 py-16">
        <div className="container" data-aos="fade-up" data-aos-duration={1000}>
          <div className="text-center">
            <div>
              <p className="text-base font-semibold">Join 10,000+ companies who trust Prompt.</p>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 mt-7">
                <div>
                  <img src={amazon} alt="Brand" className="w-28 img-fluid" width={112} height={37} />
                </div>
                <div>
                  <img src={google} alt="Brand" className="w-28 img-fluid" width={112} height={37} />
                </div>
                <div>
                  <img src={paypal} alt="Brand" className="w-28 img-fluid" width={112} height={37} />
                </div>
                <div>
                  <img src={spotify} alt="Brand" className="w-28 img-fluid" width={112} height={37} />
                </div>
                <div>
                  <img src={shopify} alt="Brand" className="w-28 img-fluid" width={112} height={37} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Client;
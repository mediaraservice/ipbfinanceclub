import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import mr from '@/assets/images/brands/mr.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import shopify from '@/assets/images/brands/shopify.svg';
import spotify from '@/assets/images/brands/spotify.svg';
const Client = () => {
  return <>
      <section className="py-16">
        <div className="container">
          <div className="grid xl:grid-cols-2 grid-cols-1 items-center">
            <div>
              <p className="text-base font-medium">Join 10,000+ other companies who are using Prompt</p>
              <div className="flex flex-wrap md:flex-nowrap gap-10 mt-7">
                <div>
                  <img src={amazon} alt="" className="w-28" />
                </div>
                <div>
                  <img src={google} alt="" className="w-28" />
                </div>
                <div>
                  <img src={paypal} alt="" className="w-28" />
                </div>
                <div>
                  <img src={spotify} alt="" className="w-28" />
                </div>
                <div>
                  <img src={shopify} alt="" className="w-28" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex xl:justify-end items-center mt-7">
                <div className="flex items-center">
                  <p className="text-base font-medium">Score 9.5 out of 10 on</p>
                  <img src={mr} alt="" className="w-12 h-8" />
                </div>
              </div>
              <div className="flex xl:justify-end gap-3 mt-7">
                <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                  <i className="i-fa6-regular-star text-lg" />
                </div>
                <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                  <i className="i-fa6-regular-star text-lg" />
                </div>
                <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                  <i className="i-fa6-regular-star text-lg" />
                </div>
                <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                  <i className="i-fa6-regular-star text-lg" />
                </div>
                <div className="h-8 w-8 bg-green-400 text-white rounded flex items-center justify-center">
                  <i className="i-fa6-regular-star text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Client;
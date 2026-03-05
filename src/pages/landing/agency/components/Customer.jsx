import amazon from '@/assets/images/brands/amazon.svg';
import google from '@/assets/images/brands/google.svg';
import paypal from '@/assets/images/brands/paypal.svg';
import shopify from '@/assets/images/brands/shopify.svg';
import spotify from '@/assets/images/brands/spotify.svg';
import whitewave from '@/assets/images/shapes/white-wave.svg';
const Customer = () => {
  return <>
      <section className="py-32 relative bg-orange-700/10">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="container relative">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Our Customers</span>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5">
            <h1 className="text-3xl font-semibold">We are working with fortune top 500 companies</h1>
            <p className="text-default-600">
              With our powerful set of elements, you can make beautiful and customized WordPress websites. Incredible amount of design combinations
              are possible by Drag &amp; Drop, allowing you to be creative without having any design experience.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-around mt-12 gap-5">
            <img src={amazon} alt="" className="w-28" />
            <img src={google} alt="" className="w-28" />
            <img src={paypal} alt="" className="w-28" />
            <img src={spotify} alt="" className="w-28" />
            <img src={shopify} alt="" className="w-28" />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full scale-x-100 -scale-y-100" />
        </div>
      </section>
    </>;
};
export default Customer;
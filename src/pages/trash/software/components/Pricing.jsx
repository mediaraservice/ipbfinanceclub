import whitewave from '@/assets/images/shapes/white-wave.svg';
import { FaCheck } from 'react-icons/fa6';
const pricingTiers = [{
  id: 'starter',
  name: 'Starter',
  price: 49,
  features: ['Up to 600 minutes usage time', 'Use for personal only', 'Add up to 10 attendees', 'Technical support via email'],
  buttonText: 'Purchase Now',
  buttonVariant: 'secondary'
}, {
  id: 'professional',
  name: 'Professional',
  price: 99,
  features: ['Up to 6000 minutes usage time', 'Use for personal or commercial', 'Add up to 100 attendees', 'Up to 5 teams', 'Technical support via email'],
  buttonText: 'Purchase Now',
  buttonVariant: 'primary'
}, {
  id: 'enterprise',
  name: 'Enterprise',
  price: 599,
  features: ['Unlimited usage time', 'Use for personal or commercial', 'Add Unlimited attendees', '24x7 Technical support via phone', 'Technical support via email'],
  buttonText: 'Purchase Now',
  buttonVariant: 'secondary'
}];
const Pricing = () => {
  return <>
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
            <p className="text-default-500">
              Pricing that <span className="text-primary">works </span> for everyone
            </p>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
            {pricingTiers.map((tier, index) => <div key={tier.id} data-aos="fade-up" data-aos-duration={500 + index * 200}>
                <div className="transition-all duration-300 h-full">
                  <div className="border border-default-300 bg-white rounded-lg w-full h-full text-center p-6 relative overflow-hidden">
                    <span className="text-lg text-primary font-medium">{tier.name}</span>
                    <h2 className="text-3xl/tight font-semibold mt-3">
                      <sup className="text-default-500 text-sm font-normal">$</sup>
                      {tier.price}
                      <sub className="text-default-500 text-sm font-normal">/month</sub>
                    </h2>
                    <div className="border-b border-default-200 w-full my-6" />
                    <div className="flex flex-col h-[calc(100%-120px)]">
                      <div className="flex-1">
                        <div className="space-y-4 text-left">
                          {tier.features.map((feature, i) => <p key={i} className="flex items-center text-default-600 gap-3">
                              <FaCheck className="text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </p>)}
                        </div>
                      </div>
                      <div className="mt-8">
                        <a href="#" className={`
                            block w-full py-3 rounded-lg border transition-all duration-300
                            ${tier.buttonVariant === 'primary' ? 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30 hover:border-primary' : 'bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300'}
                          `}>
                          {tier.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full scale-x-100 -scale-y-100" />
        </div>
      </section>
    </>;
};
export default Pricing;
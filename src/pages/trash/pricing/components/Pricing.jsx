import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const pricingData = [{
  id: 'starter',
  name: 'Starter',
  price: 49,
  features: ['Up to 600 minutes usage time', 'Use for personal only', 'Add up to 10 attendees', 'Technical support via email'],
  cta: {
    text: 'Sign Up Now',
    href: ''
  }
}, {
  id: 'professional',
  name: 'Professional',
  price: 99,
  isPopular: true,
  features: ['Up to 6000 minutes usage time', 'Use for personal or a commercial client', 'Add up to 100 attendees', 'Up to 5 teams', 'Technical support via email'],
  cta: {
    text: 'Sign Up Now',
    href: ''
  }
}, {
  id: 'enterprise',
  name: 'Enterprise',
  price: 599,
  features: ['Unlimited usage time', 'Use for personal or a commercial client', 'Add Unlimited attendees', '24x7 Technical support via phone', 'Technical support via email'],
  cta: {
    text: 'Contact Sales',
    href: ''
  }
}];
const Pricing = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Plans</span>
            <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">Pricing Plans</h2>
            <p className="md:text-lg text-default-500 leading-7">
              Pricing that <span className="text-primary">works</span>
              for everyone.
            </p>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 iteOms-center mt-16">
            {pricingData.map(tier => <div key={tier.id} className="h-full">
                <div className="border border-default-200 p-6 rounded hover:shadow-lg h-full flex flex-col relative">
                  {tier.isPopular && <div className="absolute w-full h-[188px] -z-10 top-0 left-0 overflow-hidden">
                      <span className="absolute transform rotate-45 bg-primary text-center text-white font-medium py-1 right-[-52px] top-[23px] w-[170px] h-5 z-[2] text-xs overflow-hidden border border-dashed leading-[8px] border-white shadow-[0_0_0_3px] shadow-primary/40">
                        Popular
                      </span>
                    </div>}
                  <h4 className="text-lg text-primary text-center">{tier.name}</h4>
                  <h1 className="mt-3 mb-8 text-center">
                    <sup className="align-super text-sm text-default-500">$</sup>
                    <span className="text-3xl font-semibold">{tier.price}</span>
                    <sub className="text-sm text-default-500">/ month</sub>
                  </h1>
                  <hr />
                  <div className="grid gap-y-4 mt-8 flex-grow">
                    {tier.features.map((feature, index) => <div key={index} className="flex items-center gap-2">
                        <Icon icon="tabler:check" className="size-5 text-green-500" />
                        <span>{feature}</span>
                      </div>)}
                  </div>
                  <div className="mt-14">
                    <Link to={tier.cta.href} className="py-3 px-6 flex items-center justify-center rounded hover:border hover:border-primary/50 text-primary bg-primary/10 transition-all duration-500 hover:bg-primary/20">
                      {tier.cta.text}
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Pricing;
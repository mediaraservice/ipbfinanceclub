import { FaCheck } from 'react-icons/fa6';
const plans = [{
  name: 'Starter',
  price: '$40/mo'
}, {
  name: 'Professional',
  price: '$60/mo',
  isPopular: true
}, {
  name: 'Enterprise',
  price: '$300/mo'
}];
const features = [{
  name: 'Landing pages',
  plans: {
    starter: true,
    professional: true,
    enterprise: true
  }
}, {
  name: 'Drag-and-drop editor',
  plans: {
    starter: false,
    professional: true,
    enterprise: true
  }
}, {
  name: 'Email marketing',
  plans: {
    starter: true,
    professional: true,
    enterprise: true
  }
}, {
  name: 'Ad retargeting',
  plans: {
    starter: 'Add-on Available',
    professional: false,
    enterprise: true
  }
}, {
  name: 'Messenger integration',
  plans: {
    starter: false,
    professional: false,
    enterprise: true
  }
}, {
  name: 'Live chat',
  plans: {
    starter: false,
    professional: 'Add-on Available',
    enterprise: true
  }
}, {
  name: 'Conversational bots',
  plans: {
    starter: false,
    professional: true,
    enterprise: true
  }
}, {
  name: 'SEO recommendations & optimizations',
  plans: {
    starter: false,
    professional: true,
    enterprise: true
  }
}];
const Pricing = () => {
  const renderFeatureCell = value => {
    if (typeof value === 'string') {
      return <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3 whitespace-nowrap">{value}</span>;
    }
    return value ? <FaCheck className="inline text-green-500" /> : null;
  };
  return <section className="xl:py-24 py-16">
      <div className="container" data-aos="fade-up" data-aos-duration={1500}>
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Pricing</span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">Pricing Plans</h1>
          <p className="text-default-500">
            Pricing that <span className="text-primary">works</span> for everyone.
          </p>
        </div>

        <div className="pt-16 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="text-center border-t border-default-200 border-b-2">
                  <th className="px-5 py-4 xl:w-2/5 w-1/2 text-start border-b-2 border-t border-default-200" />
                  {plans.map(plan => <th key={plan.name} className={`px-5 py-4 w-1/4 border-s border-default-200 ${plan.isPopular ? 'bg-default-50' : ''}`}>
                      <div className="flex flex-col items-center">
                        <h2 className="font-medium">{plan.name}</h2>
                        {plan.isPopular && <span className="text-xs bg-red-500 text-white rounded-full py-1 px-3 mt-1">Popular</span>}
                        <p className="text-default-500 text-sm mt-1">{plan.price}</p>
                      </div>
                    </th>)}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => <tr key={index} className={`text-center ${index < features.length - 1 ? 'border-b border-default-200' : ''}`}>
                    <td className="p-3 text-start text-sm text-default-700">{feature.name}</td>
                    <td className="p-3">{renderFeatureCell(feature.plans.starter)}</td>
                    <td className="p-3 border-s border-default-200">{renderFeatureCell(feature.plans.professional)}</td>
                    <td className="p-3 border-s border-default-200">{renderFeatureCell(feature.plans.enterprise)}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;
import Icon from '@/components/wrappers/Icon';
const BenefitData = [{
  icon: 'solar:incoming-call-rounded-bold-duotone',
  title: 'Technical Support',
  description: 'Our professional technical support team will help you out at every step'
}, {
  icon: 'solar:compass-bold-duotone',
  title: 'Technology',
  description: 'A special training to get start with the platform by professionals'
}, {
  icon: 'solar:chart-2-bold-duotone',
  title: 'Growth Analysis',
  description: 'A dedicated team to get insights around your growth every month'
}, {
  icon: 'solar:cup-star-bold-duotone',
  title: 'Rewards',
  description: 'A special reward for the most performing account every month'
}];
const Benefit = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Benefits</span>
            <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">All plans includes these benefits</h2>
            <p className="md:text-lg text-default-500 leading-7">Some benefits of the monthly/yearly subscription</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 gap-y-10 mt-16">
            {BenefitData.map((item, idx) => <div key={idx}>
                <div className="flex items-center lg:justify-center gap-6">
                  <div>
                    <div className="size-16 bg-primary/20 rounded-md flex items-center justify-center">
                      <Icon icon={item.icon} className="size-10 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-base">{item.title}</h5>
                    <p className="text-default-400 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Benefit;
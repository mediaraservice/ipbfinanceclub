import Icon from '@/components/wrappers/Icon';
const benefitData = [{
  title: 'Relocation Support',
  description: "We'll help to move and get settled and handle the visa process for you",
  icon: 'solar:compass-bold-duotone'
}, {
  title: 'Technology',
  description: 'A special training to get start with our technical stack by professionals',
  icon: 'solar:layers-bold-duotone'
}, {
  title: 'Growth budget',
  description: 'A specific budget for your professionals growth which you spend on throughout the year',
  icon: 'solar:euro-bold-duotone'
}, {
  title: 'Team activities &amp; retreats',
  description: "Many team building activities and retreat every quarter, so you don't get bored",
  icon: 'solar:users-group-two-rounded-bold-duotone'
}, {
  title: 'Work from anywhere',
  description: 'Work from anywhere you like. We offer remote working to all the employees',
  icon: 'solar:map-point-bold-duotone'
}, {
  title: 'Work/life balance',
  description: 'Flexible work hours gives you complete balance with your personal and professional life.',
  icon: 'solar:trash-bin-trash-bold-duotone'
}];
const Benefit = () => {
  return <>
      <section className="lg:py-24 py-16">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Benefits</span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">We take care of our team</h1>
            <p className="text-default-500">Few benefits from working together</p>
          </div>
          <div className="mt-14">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              {benefitData.map((item, idx) => <div key={idx}>
                  <div className="flex gap-6 items-center" data-aos="fade-up" data-aos-duration={300}>
                    <div>
                      <span className="h-16 w-16 bg-primary/10 rounded-md flex items-center justify-center">
                        <Icon icon={item.icon} className="size-8 text-primary" />
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-2 font-medium">{item.title}</h6>
                      <p className="text-default-500">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Benefit;
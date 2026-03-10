import whiteWave from '@/assets/images/shapes/white-wave.svg';
import Icon from '@/components/wrappers/Icon';
const features = [{
  icon: 'solar:shield-check-bold-duotone',
  title: 'Secure & Encrypted Transactions',
  description: 'Advanced payment and processing technologies, fine-tuned from more than 3 years development'
}, {
  icon: 'solar:card-bold-duotone',
  title: 'Transparent Fees',
  description: 'Barbelless catfish pelican gulper candlefish thornfishGulf menhaden ribbonbearer riffle.'
}, {
  icon: 'solar:smile-circle-bold-duotone',
  title: 'Easy to Use',
  description: 'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!'
}, {
  icon: 'solar:phone-calling-bold-duotone',
  title: 'Easy to Use',
  description: 'Asiatic glassfish pilchard sandburrower, orangestriped triggerfish hamlet Molly Miller dogfish!'
}];
const Feature = () => {
  return <>
      <section className="py-24 bg-default-500/10 relative" data-aos="fade-up">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whiteWave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="container relative">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Why Choose Us</span>
            <h1 className="text-3xl font-medium my-3">The most trusted way to buy or sell crypto currency</h1>
            <p className="text-default-400 mt-5 mb-4">Here are the few reasons why you should choose us</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
            {features.map((item, idx) => <div className="flex items-center gap-5 bg-white p-5 rounded-md shadow-default-300" key={idx}>
                <div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                    <Icon icon={item.icon} className="size-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-semibold">{item.title}</h5>
                  <p className="text-default-600 mt-2">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Feature;
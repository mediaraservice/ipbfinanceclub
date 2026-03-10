import whitewave from '@/assets/images/shapes/white-wave.svg';
import Icon from '@/components/wrappers/Icon';
export const feature = [{
  title: 'High-Speed Wireless',
  description: "We've watched Tailwind grow up over the years and understand it better than almost anyone.",
  icon: 'solar:home-wifi-angle-bold-duotone'
}, {
  title: 'Community Events',
  description: 'You have a business to run. Stop worring about cross-browser keeping your components up to date.',
  icon: 'solar:users-group-two-rounded-bold-duotone'
}, {
  title: 'Exercise Facilities',
  description: 'Replacing a maintains the amount of lines. When replacing a selection objectives and then create.',
  icon: 'solar:armchair-2-bold-duotone'
}, {
  title: 'Comfortable Lounges',
  description: 'Risus sed vulputate odio ut enim blandit. Malesuada consequat interdum mattis facilisis.',
  icon: 'solar:sofa-2-bold-duotone'
}];
const Feature = () => {
  return <>
      <section className="py-20 bg-primary/10 relative" data-aos="fade-up">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img src={whitewave} alt="svg" className="w-full -scale-x-100" />
        </div>
        <div className="container relative">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">Why Choose Us</h2>
            <p className="text-default-500">The benefits that will make you comfort</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
            {feature.map((item, idx) => <div className="bg-white p-6 rounded" key={idx}>
                <div className="flex gap-5">
                  <div>
                    <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5">
                      <Icon icon={item.icon} className="size-12 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-2">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Feature;
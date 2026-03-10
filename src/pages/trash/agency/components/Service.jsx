import Icon from '@/components/wrappers/Icon';
const Service = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-medium">What We Do</h1>
            <p className="font-medium text-default-500 mt-5 mb-4">We are helping businesses to develop their web applications</p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
            <div className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-duration={500}>
              <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center">
                <Icon icon="solar:pallete-2-bold-duotone" className="size-7 text-primary" />
              </div>
              <h4 className="text-base font-medium my-5">User Experience Design</h4>
              <p className="text-default-400">
                Following the best process that a great design teams use to create products that provide meaningful and relevant experiences to users
              </p>
            </div>
            <div className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-duration={700}>
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center">
                <Icon icon="solar:album-bold-duotone" className="size-7 text-orange-600" />
              </div>
              <h4 className="text-base font-medium my-5">Front End Development</h4>
              <p className="text-default-400">
                Development of the websites for businesses of all sizes and shapes and covering a small to enterprise organizations
              </p>
            </div>
            <div className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-duration={900}>
              <div className="w-12 h-12 rounded-md bg-green-500/10 flex items-center justify-center">
                <Icon icon="solar:settings-bold-duotone" className="size-7 text-green-500" />
              </div>
              <h4 className="text-base font-medium my-5">Brand Identitty Design</h4>
              <p className="text-default-400">
                Making a new identities for your brand with an effective collaboration and considered design. We treat your brand like our own
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Service;
import Icon from '@/components/wrappers/Icon';
const serviceData = [{
  title: 'UI/UX Design',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  icon: 'solar:filters-bold-duotone'
}, {
  title: 'Product Design',
  description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making.',
  icon: 'solar:layers-bold-duotone'
}, {
  title: 'Frontend Development',
  description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
  icon: 'solar:wallpaper-bold'
}];
const Service = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div>
            <h2 className="md:text-3xl text-xl font-semibold my-5">What I Do</h2>
            <p className="text-default-400 font-medium">
              Connecting brands and companies with their customers through <span className="text-red-500">good design</span>.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
            {serviceData.map((item, idx) => <div className="group" data-aos="fade-up" data-aos-duration={600} key={idx}>
                <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                  <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                    <Icon icon={item.icon} className="size-8 text-red-500" />
                  </div>
                  <h4 className="text-lg mt-6">{item.title}</h4>
                  <p className="text-base text-default-400 leading-7 mt-2">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Service;
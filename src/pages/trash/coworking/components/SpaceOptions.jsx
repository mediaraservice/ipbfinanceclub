import photos4 from '@/assets/images/photos/4.jpg';
import photos5 from '@/assets/images/photos/5.jpg';
import photos8 from '@/assets/images/photos/8.jpg';
import Icon from '@/components/wrappers/Icon';
import { Link } from 'react-router-dom';
const spaceOptionsData = [{
  image: photos8,
  title: 'Shared Desk',
  description: "Access to shared workspace and conference rooms. Most suitable to individual looking for people's company."
}, {
  image: photos5,
  title: 'Dedicated Desk',
  description: 'A dedicated desk space for you, with 24/7 access to premium amenities and conference rooms.'
}, {
  image: photos4,
  title: 'Event Space',
  description: 'An excluisive venue designed specifically for events of all kinds, from conferences to celebrations.'
}];
const SpaceOptions = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Flexible</span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">Coworking Space Options</h2>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
            {spaceOptionsData.map((item, idx) => <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration={600} key={idx}>
                <img src={item.image} alt="" className="rounded-t" />
                <div className="p-5">
                  <h4 className="text-lg font-medium text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-default-500">{item.description}</p>
                </div>
                <div className="p-5 pt-0">
                  <p className="flex items-center gap-3">
                    <Icon icon="tabler:user" className="size-5" />
                    <Link to="" className="text-sm font-medium text-default-500">
                      1-5 Shared Spaces
                    </Link>
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default SpaceOptions;
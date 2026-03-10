import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar3 from '@/assets/images/avatars/img-3.jpg';
import avatar4 from '@/assets/images/avatars/img-4.jpg';
import avatar5 from '@/assets/images/avatars/img-5.jpg';
import avatar6 from '@/assets/images/avatars/img-6.jpg';
import avatar7 from '@/assets/images/avatars/img-7.jpg';
import avatar8 from '@/assets/images/avatars/img-8.jpg';
const teamData = [{
  image: avatar1,
  name: 'Ana Russo',
  position: 'CEO'
}, {
  image: avatar2,
  name: 'Danette Payne',
  position: 'CTO'
}, {
  image: avatar3,
  name: 'Tammy Ward',
  position: 'VP, Product Development'
}, {
  image: avatar4,
  name: 'Paul Moore',
  position: 'Back-End Developer'
}, {
  image: avatar5,
  name: 'Harry Burris',
  position: 'PHP Developer'
}, {
  image: avatar6,
  name: 'Patricia Ferraro',
  position: 'Web Designer'
}, {
  image: avatar7,
  name: 'Robert Smith',
  position: 'Graphic Designer'
}, {
  image: avatar8,
  name: 'Lindsay Clark',
  position: 'Web Designer'
}, {
  image: avatar1,
  name: 'Lindsay Clark',
  position: 'Front-End Developer'
}, {
  image: avatar2,
  name: 'Ernest Griffith',
  position: 'PHP Developer'
}, {
  image: avatar3,
  name: 'Cecelia Poole',
  position: 'Back-End Developer'
}, {
  image: avatar4,
  name: 'Morris Hall',
  position: 'Graphic Designer'
}];
const Team = () => {
  return <>
      <section className="lg:py-24 py-16">
        <div className="container">
          <div className="text-center">
            <span className="text-sm bg-primary/10 text-primary/40 rounded-full px-3 py-1">Our Team</span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">Meet Our Team</h1>
            <p className="text-default-500">
              Start working with<span className="text-primary"> Prompt </span>to manage your workforce better.
            </p>
          </div>
          <div className="mt-14">
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12" data-aos="fade-up">
              {teamData.map((item, idx) => <div key={idx}>
                  <div className="flex gap-4 items-center">
                    <img src={item.image} alt="avatar" className="h-16 w-16 rounded-md" />
                    <div>
                      <h6 className="font-medium">{item.name}</h6>
                      <p className="text-default-500">{item.position}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Team;
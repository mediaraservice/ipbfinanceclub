import app3 from '@/assets/images/features/app3.png';
import app4 from '@/assets/images/features/app4.png';
const AppFeatures = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">More Features</span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">Features that showcase your app</h2>
            <p className="text-default-500">
              Start working with <span className="text-primary">Prompt</span> to showcase your app to thousands of people.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
            <div className="text-center relative" data-aos="fade-up" data-aos-duration={300}>
              <h3 className="text-xl">Quick Access to Tasks</h3>
              <p className="mt-3">Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.</p>
              <div className="pt-5">
                <img alt="img" src={app4} />
              </div>
              <div className="absolute h-3 w-3 rounded-full bg-pink-600 bottom-8" />
              <div className="absolute h-3 w-3 rounded-full bg-yellow-300 top-32 end-12" />
            </div>
            <div className="text-center relative" data-aos="fade-up" data-aos-duration={300}>
              <h3 className="text-xl">Create Task Easily</h3>
              <p className="mt-3">Speedy App provides instant information on whit thousands of hire and buy products.</p>
              <div className="pt-5">
                <img alt="img" src={app3} />
              </div>
              <div className="absolute h-3 w-3 rounded-full bg-red-400 bottom-8" />
              <div className="absolute h-3 w-3 rounded-full bg-green-400 top-24 end-16" />
            </div>
            <div className="text-center relative" data-aos="fade-up" data-aos-duration={300}>
              <h3 className="text-xl">Quick Access to Tasks</h3>
              <p className="mt-3">Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.</p>
              <div className="pt-5">
                <img alt="img" src={app4} />
              </div>
              <div className="absolute h-3 w-3 rounded-full bg-purple-600 bottom-8 end-0" />
              <div className="absolute h-3 w-3 rounded-full bg-orange-400 top-60" />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default AppFeatures;
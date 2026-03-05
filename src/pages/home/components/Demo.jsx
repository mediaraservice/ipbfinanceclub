import agency from '@/assets/images/demo/home-agency.jpg';
import app from '@/assets/images/demo/home-app.jpg';
import coworking from '@/assets/images/demo/home-coworking.jpg';
import crypto from '@/assets/images/demo/home-crypto.jpg';
import marketing from '@/assets/images/demo/home-marketing.jpg';
import portfolio from '@/assets/images/demo/home-portfolio.jpg';
import saas from '@/assets/images/demo/home-saas.jpg';
import saas2 from '@/assets/images/demo/home-saas2.jpg';
import software from '@/assets/images/demo/home-software.jpg';
import startup from '@/assets/images/demo/home-startup.jpg';
import { Link } from 'react-router-dom';
const demoData = [{
  image: app,
  url: '/landing/app',
  name: 'Mobile App'
}, {
  image: saas,
  url: '/landing/sass-modern',
  name: 'Saas Modern'
}, {
  image: saas2,
  url: '/landing/sass-classic',
  name: 'Saas Classic'
}, {
  image: startup,
  url: '/landing/startup',
  name: 'Startup'
}, {
  image: software,
  url: '/landing/software',
  name: 'Software'
}, {
  image: agency,
  url: '/landing/agency',
  name: 'Agency'
}, {
  image: coworking,
  url: '/landing/coworking',
  name: 'Co-Working'
}, {
  image: crypto,
  url: '/landing/crypto',
  name: 'Crypto'
}, {
  image: marketing,
  url: '/landing/marketing',
  name: 'Marketing'
}, {
  image: portfolio,
  url: '/landing/portfolio',
  name: 'Portfolio'
}];
const Demo = () => {
  return <>
      <section className="lg:py-20 py-10" id="demo">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Demos</span>
            <h1 className="text-4xl my-4">Landing Pages</h1>
            <p className="text-default-500 mb-14">Modern landing pages available for every need</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-duration={600}>
            {demoData.map((demo, idx) => {
            return <Link to={demo.url} key={idx}>
                  <div className="border border-default-200 p-2 rounded">
                    <img src={demo.image} alt={demo.name} width={514} height={321} />
                  </div>
                  <h4 className="text-base text-center mt-4">{demo.name}</h4>
                </Link>;
          })}
          </div>
        </div>
      </section>
    </>;
};
export default Demo;
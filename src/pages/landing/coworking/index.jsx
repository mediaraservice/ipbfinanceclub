import Header from '@/components/topbar';
import About from './components/About';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SpaceOptions from './components/SpaceOptions';
import Testimonial from './components/Testimonial';
const Page = () => {
  return <>
      <Header theme='light' />
      <Hero />
      <About />
      <Feature />
      <SpaceOptions />
      <Testimonial />
      <Footer />
    </>;
};
export default Page;
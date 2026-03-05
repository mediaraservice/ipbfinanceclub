import Header from '@/components/topbar';
import Client from './components/Client';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
const Page = () => {
  return <>
      <Header theme='light' />
      <Hero />
      <Client />
      <Feature />
      <Pricing />
      <Testimonial />
      <Footer />
    </>;
};
export default Page;
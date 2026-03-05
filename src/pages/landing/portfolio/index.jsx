import Header from '@/components/topbar';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Service />
      <Portfolio />
      <Testimonial />
      <CTA />
      <Footer />
    </>;
};
export default Page;
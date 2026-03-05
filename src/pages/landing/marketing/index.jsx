import Header from '@/components/topbar';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Feature />
      <Testimonial />
      <Footer />
    </>;
};
export default Page;
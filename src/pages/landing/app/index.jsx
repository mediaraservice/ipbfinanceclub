import Header from '@/components/topbar';
import AppFeatures from './components/AppFeatures';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Feature />
      <AppFeatures />
      <Testimonial />
      <Footer />
    </>;
};
export default Page;
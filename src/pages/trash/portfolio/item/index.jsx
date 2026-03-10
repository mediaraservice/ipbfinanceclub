import Header from '@/components/topbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Testimonial from './components/Testimonial';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Content />
      <Testimonial />
      <Navigation />
      <Footer />
    </>;
};
export default Page;
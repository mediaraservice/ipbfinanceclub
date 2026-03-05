import Header from '@/components/topbar';
import Client from './components/Client';
import Faq from './components/Faq';
import Feature from './components/Feature';
import FeedBack from './components/FeedBack';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
const Page = () => {
  return <>
      <Header theme='light' />
      <Hero />
      <Feature />
      <Client />
      <FeedBack />
      <Pricing />
      <Faq />
      <Footer />
    </>;
};
export default Page;
import Header from '@/components/topbar';
import Client from './components/Client';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Integration from './components/Integration';
import Pricing from './components/Pricing';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Client />
      <Feature />
      <Integration />
      <Pricing />
      <Footer />
    </>;
};
export default Page;
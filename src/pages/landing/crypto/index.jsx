import Header from '@/components/topbar';
import Blog from './components/Blog';
import Coins from './components/Coins';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Integration from './components/Integration';
import Stat from './components/Stat';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Coins />
      <Feature />
      <Integration />
      <Stat />
      <Blog />
      <Footer />
    </>;
};
export default Page;
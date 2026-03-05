import Header from '@/components/topbar';
import Benefit from './components/Benefit';
import CTA from './components/CTA';
import Culture from './components/Culture';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Job from './components/Job';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Benefit />
      <Culture />
      <Job />
      <CTA />
      <Footer />
    </>;
};
export default Page;
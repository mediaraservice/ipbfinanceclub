import Header from '@/components/topbar';
import Blog from './components/Blog';
import Customer from './components/Customer';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Service from './components/Service';
import Vacancies from './components/Vacancies';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <Service />
      <Feature />
      <Customer />
      <Blog />
      <Vacancies />
      <Footer />
    </>;
};
export default Page;
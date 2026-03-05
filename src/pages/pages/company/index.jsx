import Header from '@/components/topbar';
import About from './components/About';
import Client from './components/Client';
import Counter from './components/Counter';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Team from './components/Team';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />
      <About />
      <Feature />
      <Counter />
      <Team />
      <Client />
      <Footer />
    </>;
};
export default Page;
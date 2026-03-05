import Header from '@/components/topbar';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Hero from './components/Hero';
const Page = () => {
  return <>
      <Header theme="dark" />
      <Hero />
      <Blog />
      <Footer />
    </>;
};
export default Page;
import Header from '@/components/topbar';
import Faq from './components/Faq';
import Footer from './components/Footer';
import HelpLinks from './components/HelpLinks';
import Hero from './components/Hero';
import SupportCenter from './components/SupportCenter';
const Page = () => {
  return <>
      <Header theme="light" />
      <Hero />

      <section className="py-20 relative">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="lg:col-span-2 cols-span-1">
              <HelpLinks />
              <Faq />
            </div>
            <SupportCenter />
          </div>
        </div>
      </section>

      <Footer />
    </>;
};
export default Page;
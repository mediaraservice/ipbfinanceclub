import Header from '@/components/topbar';
import Benefit from './components/Benefit';
import CTA from './components/CTA';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
const Page = () => {
  return <>
      <Header theme="light" />

      <section className="pt-36 pb-24 bg-default-100">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="md:text-5xl/tight text-3xl font-semibold mb-5">Flexible plans that grow with you</h2>
            <p className="md:text-lg text-default-500 leading-7">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </section>

      <Pricing />
      <Benefit />
      <Faq />
      <CTA />
      <Footer />
    </>;
};
export default Page;
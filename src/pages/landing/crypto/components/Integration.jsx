import code from '@/assets/images/other/code.jpg';
import Icon from '@/components/wrappers/Icon';
const Integration = () => {
  return <>
      <section className="py-24" data-aos="fade-up">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="lg:me-20">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                <Icon icon="solar:code-line-duotone" className="size-7 text-primary" />
              </div>
              <h1 className="sm:text-3xl text-xl font-medium my-3">Easy to Integrate - SDK</h1>
              <p className="text-default-500 mt-5 mb-4">
                Maecenas blandit aliquam sem, auctor accumsan mauris finibus pellentesque. In vestibulum ac nunc ut rutrum. Donec mollis viverra magna
                vel tincidunt.
              </p>
              <p className="text-default-500 mt-5 mb-4">
                Ut faucibus libero non tortor commodo, ac faucibus lectus fermentum. Sed sit amet ornare turpis, ac lobortis urna.
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-12">
                <a href="#" className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                  Explore the SDK
                </a>
                <a href="#" className="py-3 px-6 rounded border-primary/5 text-primary bg-primary/5 hover:border-primary hover:bg-primary/10 hover:shadow hover:shadow-primary transition-all duration-500">
                  Documentation
                </a>
              </div>
            </div>
            <div>
              <img src={code} alt="" className="lg:mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Integration;
import Icon from '@/components/wrappers/Icon';
const Hero = () => {
  return <>
      <section className="pt-36 pb-24 bg-default-100">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="md:text-5xl/tight text-3xl font-semibold mb-6">How can we help?</h2>
            <p className="lg:text-lg text-default-500 leading-7">
              Explore our knowledge badge to learn more about all the functionality Prompt is offering. If you don&apos;t find what you are looking,
              feel free to contact our support team.
            </p>
            <form className="w-full mt-12">
              <div className="relative flex justify-between items-center border border-default-200 bg-white rounded-md">
                <input className="w-full text-sm text-default-700 border-0 rounded py-3 px-4 leading-tight focus:ring-0 focus:outline-none" id="grid-first-name" type="text" placeholder="Ask a question..." />
                <Icon icon="tabler:search" className="size-5 me-4" />
              </div>
            </form>
            <div className="mt-2">
              <p className="text-default-500">
                <span className="uppercase">Recent searches:</span> How to prepare upload documents, Linking Payment Account
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;
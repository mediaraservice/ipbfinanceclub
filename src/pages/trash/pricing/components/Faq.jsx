import { FaAngleDown } from 'react-icons/fa6';
const Faq = () => {
  return <>
      <section className="py-20 bg-default-100">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">FAQs</span>
            <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">Frequently Asked Questions</h2>
            <p className="md:text-lg text-default-500 leading-7">Here are some of the basic types of questions for our customers</p>
          </div>
          <div className="mt-16 lg:mx-32">
            <div className="hs-accordion-group">
              <div className="hs-accordion active rounded border border-default-200 bg-white">
                <button className="hs-accordion-toggle hs-accordion-active:rounded-b-none sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-left text-default-800 transition hover:text-default-500">
                  Can I use this template for my client?
                  <FaAngleDown className="ms-auto transition-all hs-accordion-active:-rotate-90" />
                </button>
                <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ">
                  <p className="sm:text-sm font-medium text-default-500 p-5 pt-0">
                    Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere
                    license terms on marketplace.
                  </p>
                </div>
              </div>
              <div className="hs-accordion rounded border border-default-200 bg-white mt-2">
                <button className="hs-accordion-toggle hs-accordion-active:rounded-b-none sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-left text-default-800 transition hover:text-default-500">
                  Can this theme work with WordPress?
                  <FaAngleDown className="ms-auto transition-all hs-accordion-active:-rotate-90" />
                </button>
                <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                  <p className="sm:text-sm font-medium text-default-500 p-5 pt-0">
                    No. This is a HTML template. It won&apos;t directly with WordPress, though you can convert this into WordPress compatible theme.
                  </p>
                </div>
              </div>
              <div className="hs-accordion rounded border border-default-200 bg-white mt-2">
                <button className="hs-accordion-toggle hs-accordion-active:rounded-b-none sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-left text-default-800 transition hover:text-default-500">
                  How do I get help with the theme?
                  <FaAngleDown className="ms-auto transition-all hs-accordion-active:-rotate-90" />
                </button>
                <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                  <p className="sm:text-sm font-medium text-default-500 p-5 pt-0">
                    Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.
                  </p>
                </div>
              </div>
              <div className="hs-accordion rounded border border-default-200 bg-white mt-2">
                <button className="hs-accordion-toggle hs-accordion-active:rounded-b-none sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-left text-default-800 transition hover:text-default-500">
                  Will you regularly give updates of Prompt ?
                  <FaAngleDown className="ms-auto transition-all hs-accordion-active:-rotate-90" />
                </button>
                <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                  <p className="sm:text-sm font-medium text-default-500 p-5 pt-0">
                    Yes, We will update the Prompt regularly. All the future updates would be available without any cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Faq;
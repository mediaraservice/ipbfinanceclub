import { FaAngleDown } from 'react-icons/fa6';
const Faq = () => {
  return <>
      <section className="py-16 sm:py-24">
        <div className="container" data-aos="fade-up" data-aos-duration={2000}>
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">FAQs</span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">Frequently Asked Questions</h1>
            <p className="text-default-500">Here are some of the basic types of questions for our customers</p>
          </div>
          <div className="hs-accordion-group mt-14 lg:w-3/4 lg:mx-auto 2xl:w-2/3">
            <div className="hs-accordion active border border-default-300 rounded-lg">
              <button className="hs-accordion-toggle p-5 inline-flex items-center justify-between w-full font-semibold text-left transition">
                Can I use this template for my client?
                <FaAngleDown className="text-xl block transition-all hs-accordion-active:rotate-180" />
              </button>
              <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                <p className="text-default-700 dark:text-default-300 pt-3 p-5">
                  Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere
                  license terms on marketplace.
                </p>
              </div>
            </div>

            <div className="hs-accordion border border-default-300 rounded-lg mt-4">
              <button className="hs-accordion-toggle p-5 inline-flex items-center justify-between w-full font-semibold text-left transition">
                Can this theme work with WordPress?
                <span className="material-symbols-rounded text-xl block transition-all hs-accordion-active:rotate-180">
                  <FaAngleDown />
                </span>
              </button>
              <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                <p className="text-default-700 dark:text-default-300 pt-3 p-5">
                  No. This is a HTML template. It won&apos;t directly with WordPress, though you can convert this into WordPress compatible theme.
                </p>
              </div>
            </div>

            <div className="hs-accordion border border-default-300 rounded-lg mt-4">
              <button className="hs-accordion-toggle p-5 inline-flex items-center justify-between w-full font-semibold text-left transition">
                How do I get help with the theme?
                <span className="material-symbols-rounded text-xl block transition-all hs-accordion-active:rotate-180">
                  <FaAngleDown />
                </span>
              </button>
              <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                <p className="text-default-700 dark:text-default-300 pt-3 p-5">
                  Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.
                </p>
              </div>
            </div>

            <div className="hs-accordion border border-default-300 rounded-lg mt-4">
              <button className="hs-accordion-toggle p-5 inline-flex items-center justify-between w-full font-semibold text-left transition">
                Will you regularly give updates of Prompt ?
                <span className="material-symbols-rounded text-xl block transition-all hs-accordion-active:rotate-180">
                  <FaAngleDown />
                </span>
              </button>
              <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                <p className="text-default-700 dark:text-default-300 pt-3 p-5">
                  Yes, We will update the Prompt regularly. All the future updates would be available without any cost.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-14">
            <p className="inline-flex flex-wrap gap-1 bg-default-100 text-sm rounded-lg py-2 px-5">
              Still have unanswered questions?
              <a href="#" className="hover:text-primary transition-all">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default Faq;
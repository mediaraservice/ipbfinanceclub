import { FaAngleDown } from "react-icons/fa6";
const Faq = () => {
  return <>
      <h4 className="text-base mt-24">Frequently Asked Questions</h4>
      <p className="text-default-400 mt-1">Here are some of the basic types of questions for our customers</p>
      <div className="mt-10 lg:me-36">
        <div className="hs-accordion-group">
          <div className="hs-accordion active rounded border border-default-200">
            <button className="hs-accordion-toggle sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-default-800 transition hover:text-default-500">
              Can I use this template for my client?
              <FaAngleDown className="ms-auto transition-all hs-accordion-active:-rotate-90" />
            </button>
            <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ">
              <p className="sm:text-sm font-medium text-default-500 p-5 pt-0">
                Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license
                terms on marketplace.
              </p>
            </div>
          </div>
          <div className="hs-accordion rounded border border-default-200 mt-2">
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
          <div className="hs-accordion rounded border border-default-200 mt-2">
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
          <div className="hs-accordion rounded border border-default-200 mt-2">
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
    </>;
};
export default Faq;
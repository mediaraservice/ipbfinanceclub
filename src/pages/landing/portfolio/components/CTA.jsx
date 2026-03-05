import Icon from "@/components/wrappers/Icon";
import { Link } from "react-router-dom";
const CTA = () => {
  return <>
      <section className="pt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div data-aos="fade-up" data-aos-duration={600}>
              <h2 className="md:text-3xl text-xl font-semibold my-5">Just say hi.</h2>
              <p className="text-default-700">
                I am open to discuss your next project, improve user experience of an existing one or help with your UX/UI design challenges.
              </p>
              <p className="text-default-500 mt-12">Email me at</p>
              <h4>
                <Link to="#" className="text-lg font-semibold text-default-600">
                  hello@coderthemes.com
                </Link>
              </h4>
              <div className="mt-12">
                <div className="flex flex-col gap-3">
                  <h5 className="text-default-400">Social</h5>
                  <div className="flex gap-5">
                    <span>
                      <Link to="#">
                        <Icon icon="tabler:brand-facebook" className="size-7 hover:text-primary transition-all" />
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <Icon icon="tabler:brand-x" className="size-7 hover:text-primary transition-all" />
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <Icon icon="tabler:brand-instagram" className="size-7 hover:text-primary transition-all" />
                      </Link>
                    </span>
                    <span>
                      <Link to="#">
                        <Icon icon="tabler:brand-dribbble" className="size-7 hover:text-primary transition-all" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration={900}>
              <form className="w-full">
                <div>
                  <input className="w-full text-default-700 border border-default-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none" id="grid-first-name" type="text" placeholder="Your name" />
                  <input className="w-full text-default-700 border border-default-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none" id="email" name="email" type="email" autoComplete="email" placeholder="Your email where we can reach" />
                  <input className="w-full text-default-700 border border-default-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none" type="text" name="Subject" id="Subject" autoComplete="address-level2" placeholder="Subject" />
                  <textarea className="w-full text-default-700 border border-default-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none" id="about" name="about" rows={5} placeholder="Write your message here. Keep it simple, concise and intriguing!" />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr className="mt-10 border-default-200" />
        </div>
      </section>
    </>;
};
export default CTA;
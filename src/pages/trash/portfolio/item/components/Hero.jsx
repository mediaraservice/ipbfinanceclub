import Icon from "@/components/wrappers/Icon";
import { Link } from "react-router-dom";
const Hero = () => {
  return <>
      <section className="pt-36 pb-24">
        <div className="container">
          <div className="text-center">
            <h2 className="md:text-5xl/tight text-3xl font-semibold mb-6">Awesome Mobile App</h2>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-3 gap-6 items-center border-y border-default-200 py-8 mt-14">
            <div>
              <span>Client</span>
              <h4>Scarlet Johnson</h4>
            </div>
            <div>
              <span>Category</span>
              <h4>Mobile App</h4>
            </div>
            <div>
              <span>Crafted Date</span>
              <h4>Oct 12, 2019</h4>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-end md:gap-5">
                <div>
                  <h4 className="font-medium text-default-400 uppercase">Share:</h4>
                </div>
                <span>
                  <Link to="">
                    <Icon icon="tabler:brand-facebook" className="size-5 text-primary" />
                  </Link>
                </span>
                <span>
                  <Link to="">
                    <Icon icon="tabler:brand-x" className="size-5 text-green-500" />
                  </Link>
                </span>
                <span>
                  <Link to="">
                    <Icon icon="tabler:brand-instagram" className="size-5 text-red-500" />
                  </Link>
                </span>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2">
              <Link to="" className="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;
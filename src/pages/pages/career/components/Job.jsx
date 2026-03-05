import { Link } from "react-router-dom";
const Job = () => {
  return <>
      <section className="lg:py-24 py-16">
        <div>
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-medium mb-4">Job Openings</h1>
              <p className="text-default-500">Interested? Come show us what you&apos;re made of!</p>
            </div>
            <div className="mt-14">
              <h1 className="text-2xl font-medium mb-8">Engineering</h1>
              <div className="flex justify-between my-5">
                <div>
                  <Link to="#" className="transition-all hover:text-primary">
                    Techical Support Engineer
                  </Link>
                </div>
                <div>
                  <Link to="#" className="text-default-500">
                    Remote
                  </Link>
                </div>
              </div>
              <div className="border-b border-default-200" />
              <div className="flex justify-between my-5">
                <div>
                  <Link to="#" className="transition-all hover:text-primary">
                    Senior Software Engineer (Frontend)
                  </Link>
                </div>
                <div>
                  <Link to="#" className="text-default-500">
                    Remote
                  </Link>
                </div>
              </div>
              <div className="border-b border-default-200" />
              <div className="flex justify-between my-5">
                <div>
                  <Link to="#" className="transition-all hover:text-primary">
                    Senior Software Engineer (Backend)
                  </Link>
                </div>
                <div>
                  <Link to="#" className="text-default-500">
                    Remote
                  </Link>
                </div>
              </div>
              <div className="border-bborder-default-200" />
              <div className="flex justify-between my-5">
                <div>
                  <Link to="#" className="transition-all hover:text-primary">
                    Engineering Manager
                  </Link>
                </div>
                <div>
                  <Link to="#" className="text-default-500">
                    Remote
                  </Link>
                </div>
              </div>
              <div className="border-b border-default-200" />
            </div>
            <div className="mt-14">
              <h1 className="text-2xl font-medium mb-8">Marketing</h1>
              <div className="flex justify-between my-5">
                <div>
                  <Link to="#" className="transition-all hover:text-primary">
                    Junior copywriter/editor
                  </Link>
                </div>
                <div>
                  <Link to="#" className="text-default-500">
                    Remote
                  </Link>
                </div>
              </div>
              <div className="border-b border-default-200" />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Job;
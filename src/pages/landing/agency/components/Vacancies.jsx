import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
const jobDetails = [{
  designation: 'Front-End Developer',
  location: 'Los Angeles',
  jobType: 'Remote'
}, {
  designation: 'Community Manager',
  location: 'New York',
  jobType: 'Full-Time'
}, {
  designation: 'UX/UI Designer',
  location: 'New York',
  jobType: 'Full-Time'
}];
const Vacancies = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-medium my-3">We&apos;re Hiring</h1>
            <p className="font-medium text-default-500 mb-8">
              We&apos;re a team of lifelong learners. We&apos;re equal parts left and right brained.
            </p>
            <Link to="" className="py-3 px-6 rounded border border-black font-medium text-white bg-black hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500">
              Learn about our culture
            </Link>
          </div>
          <div className="my-10 grid gap-y-4">
            {jobDetails.map((item, idx) => <Link to="" key={idx}>
                <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration={500}>
                  <div className="border border-default-200 p-4 rounded-md">
                    <div className="flex flex-wrap items-center justify-between">
                      <h5>{item.designation}</h5>
                      <div className="flex items-center">
                        <p className="text-default-500">
                          {item.location} / {item.jobType}
                        </p>
                        <FaAngleRight className="ms-28" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>)}
          </div>
        </div>
      </section>
    </>;
};
export default Vacancies;
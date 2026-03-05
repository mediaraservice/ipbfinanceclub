import avatar1 from '@/assets/images/avatars/img-1.jpg';
import avatar2 from '@/assets/images/avatars/img-2.jpg';
import avatar3 from '@/assets/images/avatars/img-3.jpg';
import blog1 from '@/assets/images/blog/blog-1.png';
import blog2 from '@/assets/images/blog/blog-2.png';
import blog3 from '@/assets/images/blog/blog-3.png';
import postbg from '@/assets/images/blog/post-bg.png';
import post1 from '@/assets/images/blog/post1.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
const blogData = [{
  image: blog1,
  title: 'Introducing new blazzing fast user interface',
  description: 'Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly... ',
  variant: 'bg-orange-500/10 text-orange-500',
  name: 'Announcement'
}, {
  image: blog2,
  title: 'What you should know before considering the Prompt',
  description: 'We are giving a pretty extensive guideline and context before you make your decision to consider Prompt... ',
  variant: 'bg-green-500/10 text-green-500',
  name: 'Tutorial'
}, {
  image: blog3,
  title: 'Your Way to a Successful Sales Campaigns',
  description: 'Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads ...',
  variant: 'bg-teal-500/10 text-teal-500',
  name: 'Community'
}];
const tag = ['Business', 'Community', 'Announcement', 'Tutorials', 'Resources', 'Interview'];
const Blog = () => {
  return <>
      <section className="py-24">
        <div className="container">
          <div className="flex items-center gap-2">
            <p>Tags:</p>
            <div className="flex flex-wrap items-center gap-1">
              {tag.map((item, idx) => <a key={idx} href="#" className="border border-default-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">
                  {item}
                </a>)}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up" data-aos-duration={300}>
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2 col-span-3">
                  <img alt="" src={post1} className="w-full h-full rounded-md" />
                </div>
                <div className="col-span-3">
                  <div className="flex flex-col gap-14 justify-between xl:h-full">
                    <div>
                      <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                        <a href="#">Announcement</a>
                      </span>
                      <h1 className="text-lg my-3 transition-all hover:text-primary">
                        <a href="#">Announcing the free upgrade for the subscribed plans</a>
                      </h1>
                      <p className="text-sm/relaxed tracking-wider text-default-500">
                        We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...
                        <a href="#" className="text-primary">
                          read more
                        </a>
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <img src={avatar2} alt="" className="h-10 w-10 rounded-md" />
                        <div>
                          <h6 className="text-sm transition-all hover:text-primary">
                            <a href="#">Emily Blunt</a>
                          </h6>
                          <p className="text-sm text-default-500">11 Mar, 2020 · 3 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-default-200 rounded-md p-5 w-full">
                <h1 className="mb-3">Get the latest on product development from Prompt</h1>
                <p className="text-sm/relaxed tracking-wider text-default-500">
                  We send a weekly newsletter containing latest updates in product development
                </p>
                <div className="flex flex-col md:flex-row lg:flex-col gap-2 mt-7">
                  <input type="email" className="w-full md:w-1/2 lg:w-full text-sm border-default-300 focus:border-default-200 focus:ring-0 rounded-md bg-white py-3" id="Email" placeholder="Enter Your Email" />
                  <button className="w-full md:w-1/2 lg:w-full bg-primary text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/50 hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/20 px-8 py-3">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-default-500 mt-2">*No spam ever.</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14" data-aos="fade-up">
            {blogData.map((item, idx) => <div key={idx}>
                <img src={item.image} alt="image" className="rounded-md mb-5" />
                <span className={`${item.variant} font-medium rounded-md text-xs py-1 px-2`}>
                  <a href="#">{item.name}</a>
                </span>
                <h1 className="text-lg my-3 transition-all hover:text-primary">
                  <a href="#">{item.title}</a>
                </h1>
                <p className="text-sm/relaxed tracking-wider text-default-500">
                  {item.description}
                  <a href="#" className="text-primary">
                    read more
                  </a>
                </p>
              </div>)}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2 col-span-3">
                  <img src={post1} alt="" className="w-full h-full rounded-md" />
                </div>
                <div className="col-span-3">
                  <div className="flex flex-col gap-14 justify-between xl:h-full">
                    <div>
                      <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                        <a href="#">Community</a>
                      </span>
                      <h1 className="text-lg my-3 transition-all hover:text-primary">
                        <a href="#">Will Web Design Ever Rule the World?</a>
                      </h1>
                      <p className="text-sm/relaxed tracking-wider text-default-500">
                        The web is changed in the current era a lot. Many new trends are being used in the market at the moment...
                        <a href="#" className="text-primary">
                          read more
                        </a>
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <img src={avatar1} alt="" className="h-10 w-10 rounded-md" />
                        <div>
                          <h6 className="text-sm transition-all hover:text-primary">
                            <a href="#">Greeva N</a>
                          </h6>
                          <p className="text-sm text-default-500">9 Mar, 2020 · 5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-default-200 relative shadow-xl rounded-lg w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4 text-sm bg-red-500 text-white rounded py-1 px-3">Resource</div>
                  <img src={postbg} alt="" className="w-full" />
                  <div className="absolute right-5 bottom-3 left-5 text-white">
                    <h2 className="text-2xl">
                      <a href="#">Top 10 ideas to improve the team productivity</a>
                    </h2>
                    <div className="flex mt-3">
                      <a href="" className="ms-1 -me-3 shadow-lg">
                        <img src={avatar1} alt="image" className="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                      </a>
                      <a href="" className="ms-1 -me-3 shadow-lg">
                        <img src={avatar2} alt="image" className="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                      </a>
                      <a href="" className="ms-1 -me-3 shadow-lg">
                        <img src={avatar3} alt="image" className="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14" data-aos="fade-up">
            {blogData.map((item, idx) => <div key={idx}>
                <img src={item.image} alt="image" className="rounded-md mb-5" />
                <span className={`${item.variant} font-medium rounded-md text-xs py-1 px-2`}>
                  <a href="#">{item.name}</a>
                </span>
                <h1 className="text-lg my-3 transition-all hover:text-primary">
                  <a href="#">{item.title}</a>
                </h1>
                <p className="text-sm/relaxed tracking-wider text-default-500">
                  {item.description}
                  <a href="#" className="text-primary">
                    read more
                  </a>
                </p>
              </div>)}
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center">
              <a href="" className="flex items-center border border-default-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">
                <FaArrowLeft className="me-2" /> Previous
              </a>
            </div>
            <div className="flex items-center">
              <a href="" className="flex items-center border border-default-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">
                Next
                <FaArrowRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Blog;
import coworking1 from '@/assets/images/hero/coworking1.jpg';
import coworking2 from '@/assets/images/hero/coworking2.jpg';
import coworking3 from '@/assets/images/hero/coworking3.jpg';
import { Link } from 'react-router-dom';
const blogPosts = [{
  heading: 'Design',
  img: coworking1,
  time: '11 March, 2020',
  title: 'Top 10 design inspirations to follow',
  description: 'Single page websites are taking over the world, and thats why I would like you to present the best ...'
}, {
  heading: 'Development',
  img: coworking2,
  time: '12 March, 2020',
  title: 'Top 10 design inspirations to follow',
  description: 'We have shortlisted the best WordPress themes for alcohol production, distribution, and selling to...'
}, {
  heading: 'Design',
  img: coworking3,
  time: '13 March, 2020',
  title: 'Top 10 design inspirations to follow',
  description: 'The following Italian restaurant WordPress themes come with the powerful drag-n-drop...'
}];
const Blog = () => {
  return <>
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Blog</span>
            <h1 className="text-3xl font-medium my-3">Interesting Articles</h1>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-6">
            {blogPosts.map((item, idx) => <div className="shadow-md rounded-md" data-aos="fade-up" data-aos-duration={500} key={idx}>
                <div className="relative">
                  <div className="absolute end-4 top-3">
                    <span className={`px-3 py-1 text-sm font-medium text-white rounded-md ${item.heading === 'Development' ? 'bg-primary' : 'bg-black'}`}>
                      {item.heading}
                    </span>
                  </div>
                  <img src={item.img} alt="" />
                  <div className="absolute -bottom-5">
                    <svg className="w-full h-14 text-white" viewBox="0 0 528 40" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                      <g id="shape" transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                        <path d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z" transform="translate(7.629395E-06 6.103516E-05)" fill="currentColor" stroke="none" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm">{item.time}</p>
                  <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                    <Link to="#">{item.title}</Link>
                  </h4>
                  <p className="text-default-400 my-2">
                    {item.description}
                    <Link to="#" className="text-default-800 hover:text-blue-700">
                      Read More
                    </Link>
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Blog;
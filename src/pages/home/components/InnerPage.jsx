import blogPost from '@/assets/images/demo/blog-post.jpg';
import blog from '@/assets/images/demo/blog.jpg';
import career from '@/assets/images/demo/career.jpg';
import company from '@/assets/images/demo/company.jpg';
import contact from '@/assets/images/demo/contact.jpg';
import help from '@/assets/images/demo/help.jpg';
import portfolioGrid from '@/assets/images/demo/portfolio-grid.jpg';
import portfolioItem from '@/assets/images/demo/portfolio-item.jpg';
import portfolioMasonry from '@/assets/images/demo/portfolio-masonry.jpg';
import pricing from '@/assets/images/demo/pricing.jpg';
import { Link } from 'react-router-dom';
const innerPages = [{
  image: company,
  url: '/pages/company',
  name: 'Company'
}, {
  image: contact,
  url: '/contact',
  name: 'Contact'
}, {
  image: career,
  url: '/pages/career',
  name: 'Career'
}, {
  image: blog,
  url: '/pages/blog',
  name: 'Blog'
}, {
  image: blogPost,
  url: '/pages/blog-post',
  name: 'Blog Post'
}, {
  image: portfolioGrid,
  url: '/pages/portfolio/grid',
  name: 'Portfolio Grid'
}, {
  image: portfolioMasonry,
  url: '/pages/portfolio/masonry',
  name: 'Portfolio Masonry'
}, {
  image: portfolioItem,
  url: '/pages/portfolio/item',
  name: 'Portfolio Item'
}, {
  image: pricing,
  url: '/pages/pricing',
  name: 'Pricing'
}, {
  image: help,
  url: '/pages/help',
  name: 'Help'
}];
const InnerPage = () => {
  return <>
      <section className="lg:py-20 py-10">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Inner Pages</span>
            <h1 className="text-4xl mt-4 mb-14">Inner Pages</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-duration={600}>
            {innerPages.map((demo, idx) => {
            return <Link to={demo.url} key={idx}>
                  <div className="border border-default-200 p-2 rounded">
                    <img src={demo.image} alt={demo.name} width={514} height={321} />
                  </div>
                  <h4 className="text-base text-center mt-4">{demo.name}</h4>
                </Link>;
          })}
          </div>
        </div>
      </section>
    </>;
};
export default InnerPage;
import { useState } from 'react';
import { FaArrowsRotate } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import GlightBox from '../../../../../components/GlightBox';
const GalleryCard = ({
  galleryItem
}) => {
  const {
    image,
    description,
    title
  } = galleryItem;
  return <>
      <div>
        <div className="border border-default-200 p-2 rounded shadow">
          <div className="overflow-hidden">
            <GlightBox className="image-popup" href={image}>
              <img src={image} alt=" " width={339} height={190} className="transition-all duration-500 origin-center hover:scale-[1.1]" />
            </GlightBox>
          </div>
          <h5 className="text-base font-medium mt-6">{title}</h5>
          <p className="text-default-400 mt-2">{description}</p>
        </div>
      </div>
    </>;
};
const Gallery = ({
  galleryItems
}) => {
  const [gallery, setGallery] = useState(galleryItems);
  const [category, setCategory] = useState('all');
  const filterImages = category => {
    setCategory(category);
    setTimeout(() => {
      const galleryAlbums = category === 'all' ? galleryItems : galleryItems.filter(album => album.category?.includes(category));
      setGallery(galleryAlbums);
    }, 300);
  };
  return <>
      <section className="py-20 relative">
        <div className="container">
          <div>
            <ul className="filter-options flex flex-wrap justify-center gap-2">
              <li className={`inline-block ${category === 'all' ? 'active' : ''}`} onClick={() => filterImages('all')} data-group="all">
                <Link to="">All</Link>
              </li>
              <li className={`inline-block ${category === 'web' ? 'active' : ''}`} onClick={() => filterImages('web')} data-group="web-design">
                <Link to="">Web Design</Link>
              </li>
              <li className={`inline-block ${category === 'graphic' ? 'active' : ''}`} onClick={() => filterImages('graphic')} data-group="graphic-design">
                <Link to="">Graphic Design</Link>
              </li>
              <li className={`inline-block ${category === 'illustrator' ? 'active' : ''}`} onClick={() => filterImages('illustrator')} data-group="illustrator">
                <Link to="">Illustrator</Link>
              </li>
              <li className={`inline-block ${category === 'photography' ? 'active' : ''}`} onClick={() => filterImages('photography')} data-group="photography">
                <Link to="">Photography</Link>
              </li>
            </ul>
          </div>
          <div id="gallery-wrapper" className="md:flex flex-wrap justify-center mx-auto mt-6">
            {gallery.map((item, idx) => <div className="lg:w-1/3 md:w-1/2 p-2 picture-item" data-groups='["web-design"]' key={idx}>
                <GalleryCard galleryItem={item} />
              </div>)}
          </div>
          <div className="flex items-center justify-center mt-20">
            <a href="#" className="flex items-center py-3 px-6 rounded text-white bg-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/25 focus:outline focus:outline-primary/50">
              <FaArrowsRotate className="me-2" /> Load More
            </a>
          </div>
        </div>
      </section>
    </>;
};
export default Gallery;
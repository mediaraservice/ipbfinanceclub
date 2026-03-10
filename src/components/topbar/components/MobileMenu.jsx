import logoDark from '@/assets/images/logo-dark.png';
import { FaAngleDown, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export const menuData = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About Us', href: '/pages/about' },
  { key: 'projects', label: 'Projects', href: '/pages/projects' },
  { key: 'news', label: 'News', href: '/pages/news' },
  { key: 'contact', label: 'Contact Us', href: '/contact' },
]
const MobileMenu = () => {
  const renderMenuItems = (items, level = 0) => {
    return items.map(item => {
      if (item.isDivider) {
        return <hr key={`divider-${item.key}`} className="my-2 border-default-200" />;
      }
      if (item.children?.length) {
        return <li key={item.key} className="nav-item hs-accordion">
            <Link to={item.href || '#'} className="nav-link hs-accordion-toggle flex items-center">
              {item.label}
              <FaAngleDown className="ms-auto align-middle transition-all hs-accordion-active:rotate-180" />
            </Link>
            <ul className={`hs-accordion-content ps-${level > 0 ? level * 2 : 4} hidden overflow-hidden transition-[height] duration-300 space-y-2`}>
              {renderMenuItems(item.children, level + 1)}
            </ul>
          </li>;
      }
      return <li key={item.key} className="nav-item">
          <Link to={item.href || '#'} className={`nav-link ${level > 0 ? 'pl-4' : ''}`}>
            {item.label}
          </Link>
        </li>;
    });
  };
  return <div id="mobileMenu" className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-80 bg-white border-e border-e-default-200" role="dialog" tabIndex={-1} aria-labelledby="mobileMenu-label">
      <div>
        <div className="flex flex-col h-full divide-y-2 divide-default-200">
          <div className="p-6 flex items-center justify-between">
            <Link to="/">
              <img src={logoDark} className="h-8" alt="Logo" width={126} height={32} />
            </Link>
            <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#mobileMenu">
              <span className="sr-only">Close</span>
              <FaXmark className="text-xl" />
            </button>
          </div>

          <div className="p-6 overflow-scroll h-full">
            <ul className="navbar-nav flex flex-col gap-2 hs-accordion-group">{renderMenuItems(menuData)}</ul>
          </div>

          <div className="p-6 flex items-center justify-center">
            <a href="https://1.envato.market/prompt-tailwind" target="_blank" rel="noopener noreferrer" className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default MobileMenu;
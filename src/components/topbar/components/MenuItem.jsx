import Icon from '@/components/wrappers/Icon';
import { useLocation } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export const menuData = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About Us', href: '/pages/about' },
  { key: 'projects', label: 'Projects', href: '/pages/projects' },
  { key: 'news', label: 'News', href: '/pages/news' },
  { key: 'contact', label: 'Contact Us', href: '/contact' },
]
const MenuItem = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const renderMegaMenu = (items = []) => <div className="grid grid-cols-2 gap-1.5">
      {items.map(item => <div key={item.key} className="nav-item">
          <Link className="nav-link" to={item.href || '#'}>
            <div className="flex items-center -ms-1.5">
              {item.icon && item.color && <span className={`${item.color.split(' ')[1]} flex justify-center items-center w-8 h-8 shadow rounded me-3`}>
                  <Icon icon={item.icon} className={`${item.color.split(' ')[0]} size-6`} />
                </span>}
              <div className="flex-grow-1">{item.label}</div>
            </div>
          </Link>
        </div>)}
    </div>;
  const renderDropdownMenu = (items = []) => <div className="space-y-0.5">
      {items.map(item => {
      if (item.isDivider) {
        return <hr key={item.key} className="-mx-2 my-2 border-default-200" />;
      }
      if (item.children?.length) {
        return <div key={item.key} className="nav-item">
              <div className="hs-dropdown [--trigger:hover] [--placement:right-start] relative">
                <Link to={item.href || '#'} className="nav-link hs-dropdown-toggle after:absolute after:inset-0 after:-end-10">
                  {item.label}
                  <FaAngleRight className="ms-auto align-middle" />
                </Link>
                <div className="hs-dropdown-menu !ms-2 w-48 min-w-48 z-50 transition-[opacity,margin] translate-y-3 duration hs-dropdown-open:translate-y-0 hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-lg border border-default-200 p-2 space-y-1.5 rounded-lg mt-2" role="menu" aria-orientation="vertical">
                  {renderDropdownMenu(item.children)}
                </div>
              </div>
            </div>;
      }
      return <div key={item.key} className="nav-item">
            <Link className={`nav-link ${pathname === item.href ? 'text-primary' : ''}`} to={item.href || '#'}>
              {item.label}
            </Link>
          </div>;
    })}
    </div>;
  const renderMenuItem = item => {
    if (item.href && !item.children) {
      return <li key={item.key} className="nav-item">
          <Link className={`nav-link ${pathname === item.href ? 'text-primary' : ''}`} to={item.href}>
            {item.label}
          </Link>
        </li>;
    }
    if (item.isMegaMenu && item.children?.length) {
      return <li key={item.key} className="nav-item">
          <div className="hs-dropdown [--trigger:hover] [--placement:bottom] relative">
            <Link to="#" className="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
              {item.label}
              <FaAngleDown className="ms-2 align-middle" />
            </Link>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-96 min-w-96 border border-default-200 p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full">
              {renderMegaMenu(item.children)}
            </div>
          </div>
        </li>;
    }
    if (item.children?.length) {
      return <li key={item.key} className="nav-item">
          <div className="hs-dropdown [--trigger:hover] relative">
            <Link to="#" className="nav-link hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0">
              {item.label}
              <FaAngleDown className="ms-2 align-middle" />
            </Link>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hs-dropdown-open:translate-y-0 translate-y-3 origin-center opacity-0 hidden w-48 min-w-48 border border-default-200 p-2 bg-white shadow-lg rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical">
              {renderDropdownMenu(item.children)}
            </div>
          </div>
        </li>;
    }
    return null;
  };
  return <ul className="navbar-nav flex gap-x-3 items-center justify-center">{menuData.map(renderMenuItem)}</ul>;
};
export default MenuItem;
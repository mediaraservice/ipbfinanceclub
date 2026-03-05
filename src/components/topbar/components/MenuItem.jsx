import Icon from '@/components/wrappers/Icon';
import { useLocation } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const menuData = [{
  key: 'home',
  label: 'Home',
  href: '/'
}, {
  key: 'landing',
  label: 'Landing',
  isMegaMenu: true,
  children: [{
    key: 'app',
    label: 'App',
    href: '/landing/app',
    icon: 'solar:smartphone-2-bold-duotone',
    color: 'text-blue-600 bg-blue-600/10'
  }, {
    key: 'saas-modern',
    label: 'Saas Modern',
    href: '/landing/sass-modern',
    icon: 'solar:laptop-minimalistic-bold-duotone',
    color: 'text-green-500 bg-green-500/20'
  }, {
    key: 'saas-classic',
    label: 'Saas Classic',
    href: '/landing/sass-classic',
    icon: 'solar:monitor-bold-duotone',
    color: 'text-primary bg-primary/10'
  }, {
    key: 'startup',
    label: 'Startup',
    href: '/landing/startup',
    icon: 'solar:pulse-bold-duotone',
    color: 'text-orange-600 bg-orange-600/10'
  }, {
    key: 'software',
    label: 'Software',
    href: '/landing/software',
    icon: 'solar:layers-bold-duotone',
    color: 'text-amber-400 bg-amber-400/10'
  }, {
    key: 'agency',
    label: 'Agency',
    href: '/landing/agency',
    icon: 'solar:bolt-circle-bold-duotone',
    color: 'text-black bg-black/10'
  }, {
    key: 'coworking',
    label: 'Coworking',
    href: '/landing/coworking',
    icon: 'solar:home-wifi-bold-duotone',
    color: 'text-primary bg-primary/10'
  }, {
    key: 'crypto',
    label: 'Crypto',
    href: '/landing/crypto',
    icon: 'solar:dollar-minimalistic-bold-duotone',
    color: 'text-orange-600 bg-orange-600/10'
  }, {
    key: 'marketing',
    label: 'Marketing',
    href: '/landing/marketing',
    icon: 'solar:letter-opened-bold-duotone',
    color: 'text-blue-500 bg-blue-500/10'
  }, {
    key: 'portfolio-landing',
    label: 'Portfolio',
    href: '/landing/portfolio',
    icon: 'solar:wallpaper-bold-duotone',
    color: 'text-red-500 bg-red-500/10'
  }]
}, {
  key: 'pages',
  label: 'Pages',
  children: [{
    key: 'account',
    label: 'Account',
    children: [{
      key: 'dashboard',
      label: 'Dashboard',
      href: '/account/dashboard'
    }, {
      key: 'settings',
      label: 'Settings',
      href: '/account/setting'
    }, {
      key: 'login',
      label: 'Login',
      href: '/auth/login'
    }, {
      key: 'signup',
      label: 'Sign Up',
      href: '/auth/signup'
    }, {
      key: 'forgot-password',
      label: 'Forget Password',
      href: '/auth/forget-pass'
    }, {
      key: 'confirm-account',
      label: 'Confirm Account',
      href: '/auth/confirm'
    }]
  }, {
    key: 'blog',
    label: 'Blog',
    children: [{
      key: 'blog-list',
      label: 'Blog',
      href: '/pages/blog'
    }, {
      key: 'blog-post',
      label: 'Blog Post',
      href: '/pages/blog-post'
    }]
  }, {
    key: 'divider-1',
    label: 'Divider',
    isDivider: true
  }, {
    key: 'company',
    label: 'Company',
    href: '/pages/company'
  }, {
    key: 'career',
    label: 'Career',
    href: '/pages/career'
  }, {
    key: 'pricing',
    label: 'Pricing',
    href: '/pages/pricing'
  }, {
    key: 'portfolio',
    label: 'Portfolio',
    children: [{
      key: 'portfolio-grid',
      label: 'Portfolio Grid',
      href: '/pages/portfolio/grid'
    }, {
      key: 'portfolio-masonry',
      label: 'Portfolio Masonry',
      href: '/pages/portfolio/masonry'
    }, {
      key: 'portfolio-item',
      label: 'Portfolio Item',
      href: '/pages/portfolio/item'
    }]
  }, {
    key: 'divider-2',
    label: 'Divider',
    isDivider: true
  }, {
    key: 'help',
    label: 'Help',
    href: '/pages/help'
  }]
}, {
  key: 'contact',
  label: 'Contact us',
  href: '/contact'
}];
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
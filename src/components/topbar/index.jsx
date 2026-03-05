import logodark from '@/assets/images/logo-dark.png';
import logolight from '@/assets/images/logo-light.png';
import useScrollEvent from '@/hooks/useScrollEvent';
import { FaBars } from 'react-icons/fa6';
import MenuItem from './components/MenuItem';
import MobileMenu from './components/MobileMenu';
import { Link } from 'react-router-dom';
const Header = ({
  theme
}) => {
  const {
    scrollY
  } = useScrollEvent();
  return <>
      <header id="navbar" className={`${theme} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5 nav-${scrollY > 100 && 'sticky'}`}>
        <div className="container">
          <nav className="flex items-center">
            <Link to="/">
              <img src={logodark} className="h-8 logo-dark" alt="Logo Dark" width={126} height={32} />
              <img src={logolight} className="h-8 logo-light" alt="Logo Light" width={126} height={32} />
            </Link>

            <div className="hidden lg:block ms-auto">
              <MenuItem />
            </div>

            <div className="hidden lg:flex items-center ms-3">
              <Link to="https://1.envato.market/prompt-tailwind" target="_blank" className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">
                Download
              </Link>
            </div>

            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button type="button" className="py-3 px-4 inline-flex items-center" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobileMenu" data-hs-overlay="#mobileMenu">
                <FaBars className="text-2xl text-default-500" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu />
    </>;
};
export default Header;
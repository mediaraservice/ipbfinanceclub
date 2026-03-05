import Aos from 'aos';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../BackToTop';
import { useEffect } from 'react';
const AppProviders = ({
  children
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    const initPreline = async () => {
      await import('preline/dist/index.js');
    };
    initPreline();
  }, []);
  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [pathname]);
  return <>
      {children}
      <ScrollToTop />
    </>;
};
export default AppProviders;
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowButton(scrollTop > 40);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!showButton) return null;
  return <button onClick={goToTop} data-toggle="back-to-top" className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center" aria-label="Back to top">
      <FaArrowUp className="text-base" />
    </button>;
};
export default ScrollToTop;
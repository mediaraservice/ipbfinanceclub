import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect, useRef } from 'react';
jarallaxVideo();
const Jarallax = ({
  children,
  className,
  style,
  options,
  tag = 'div'
}) => {
  const Tag = tag;
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) jarallax(ref.current, {
      speed: 0.6,
      ...options
    });
  }, [options]);
  return <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>;
};
export default Jarallax;
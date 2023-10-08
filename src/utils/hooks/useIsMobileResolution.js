import { useState, useEffect } from 'react';

export const useIsMobileResolution = ( mobileResolution ) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= mobileResolution);
  };

  useEffect(() => {
    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
}, [mobileResolution]);

  return isMobile;
};

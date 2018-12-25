import { useState, useEffect } from 'react';

export const useWindowYScroll = () => {
  const isClient = typeof window === 'object';
  const [ windowYScroll, setWindowYScroll ] = useState(0);

  const handleWindowYScroll = () => setWindowYScroll(window.scrollY);

  useEffect(() => {
    if (!isClient) return false;

    window.addEventListener("scroll", handleWindowYScroll);

    return () => window.removeEventListener("scroll", handleWindowYScroll);
  }, []);

  return [ windowYScroll, setWindowYScroll ];
}

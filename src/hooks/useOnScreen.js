import { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

// Source: https://usehooks.com/useOnScreen/
export default function useOnScreen(ref, rootMargin = '0px', elementName) {
  // State and setter for storing whether element is visible
  const { setOnScreen, isScrollingRef } = useContext(AppContext);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isScrollingRef.current) setOnScreen(elementName);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

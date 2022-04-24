import { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";

// Source: https://usehooks.com/useOnScreen/
export default function useOnScreen(ref, rootMargin = "0px", elementName) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  const { setOnScreen } = useContext(AppContext);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) setOnScreen(elementName);
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
  return isIntersecting;
}

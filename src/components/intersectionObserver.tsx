import { useEffect, useState, RefObject } from "react";

const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  threshold = 0.5
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return isVisible;
};

export default useIntersectionObserver;

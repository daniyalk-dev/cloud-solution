import { useState, useEffect, RefObject } from "react";

const useIntersectionObserver = (
  refs: RefObject<HTMLElement>[],
  revealOnce: boolean = false,
  threshold = 0.5
) => {
  const [visibility, setVisibility] = useState<boolean[]>(
    Array(refs.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibility((prevVisibility) => {
          const newVisibility = [...prevVisibility];
          entries.forEach((entry) => {
            const index = refs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) {
              if (revealOnce && entry.isIntersecting)
                newVisibility[index] = true;
              else if (!revealOnce) newVisibility[index] = entry.isIntersecting;
            }
          });
          return newVisibility;
        });
      },
      { threshold }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, [refs.length, revealOnce, threshold]);

  return visibility;
};

export default useIntersectionObserver;

import { useState, useEffect} from 'react';

function useOnScreen(ref, threshold = 0.5, once = false) {

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && once) {
          obs.unobserve(ref.current);
        }
      },
      {
        threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };

  }, []); 

  return isIntersecting;

}

export default useOnScreen;
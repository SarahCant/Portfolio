import { useEffect, useRef } from "react";

export default function Fade() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("fade-in");
          } else {
            element.classList.remove("fade-in"); // Optional for fade-out
          }
        });
      },
      { threshold: 0.1 } // How far down the page before fade-in begins
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
}

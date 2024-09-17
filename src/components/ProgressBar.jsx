import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / totalHeight) * 100;
    setScrollWidth(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress_bar_container">
      <div className="progress_bar" style={{ width: `${scrollWidth}%` }} />
    </div>
  );
}

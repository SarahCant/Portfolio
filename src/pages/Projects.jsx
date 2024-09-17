import { useNavigate } from "react-router-dom";
import Fade from "../components/Fade";
import { useState, useEffect } from "react";

export default function Projects() {
  const fadeInRef = Fade();
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      imgSrc: [
        "./src/img/projects/astro1.png",
        "./src/img/projects/astro2.png",
        "./src/img/projects/astro3.png",
      ],
      link: "/astro",
    },
    { id: 2, imgSrc: "./src/img/projects/motor.png", link: "/motor" },
    {
      id: 3,
      imgSrc: [
        "./src/img/projects/tb1.png",
        "./src/img/projects/tb2.png",
        "./src/img/projects/tb3.png",
      ],
      link: "/tb",
    },
    { id: 4, imgSrc: "./src/img/projects/user.png", link: "/user" },
    {
      id: 5,
      imgSrc: [
        "./src/img/projects/todo1.png",
        "./src/img/projects/todo2.png",
        "./src/img/projects/todo3.png",
      ],
      link: "/todo",
    },
    { id: 6, imgSrc: "./src/img/projects/portfolio.png", link: "/" }, // Link to GutHub
  ];

  // State and effect for img carousel
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3); // Change image every 1.8s
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Function to scroll to top + navigate to selected page
  const handleNavigation = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(link); // Navigate to new page
  };

  return (
    <main id="projects" className="projects">
      <section className="fade-section" ref={fadeInRef}>
        <div className="projects_grid">
          {caseStudies.map((study) => {
            const isCarousel = [1, 3, 5].includes(study.id); // Check if the study should have a carousel of images
            return (
              <div className="projects_grid_item" key={study.id}>
                <img
                  src={isCarousel ? study.imgSrc[currentImage] : study.imgSrc}
                  alt={`Project ${study.id}`}
                />
                {/* Custom navigation function to scroll to top and then navigate */}
                <button
                  className="btn projects_grid_btn"
                  onClick={() => handleNavigation(study.link)}
                >
                  {study.id === 6 ? "GitHub" : "Case Study"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

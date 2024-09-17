import { useState, useEffect } from "react";
import Fade from "../components/Fade";

export default function Contact() {
  const fadeInRef = Fade();
  const [isMobile, setIsMobile] = useState(false);

  //udeEffect to change h1 elements on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650); // Screen width check for 650px and smaller
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <main className="contact" id="contact">
      <section className="contact_container fade-section" ref={fadeInRef}>
        <article className="contact_txt1">
          {/* Change the first h1 to 'tag kontakt' on mobile screens */}
          <h1>{isMobile ? "tag kontakt" : "tag"}</h1>

          <p>
            Er du på udkig efter en frisk og energisk frontend-udvikler? <br />{" "}
            <br />
            Så er det bare med at bryde isen! Du kan fange mig <br />
            enten på LinkedIn eller via mail.
          </p>
          <div className="contact_some">
            <div className="contact_mail">
              <img
                src="./src/img/icons/mail_white.png"
                alt="sarah.cant@hotmail.com"
                onClick={() =>
                  (window.location.href = "mailto:sarah.cant@hotmail.com")
                }
                style={{ cursor: "pointer" }}
              />
              <p className="contact_mail_written">sarah.cant@hotmail.com</p>
            </div>
            <a
              href="https://www.linkedin.com/in/sarah-cant-966b12221"
              target="_blank"
              rel="noopener noreferrer"
              className="contact_linkedin"
            >
              <img src="./src/img/icons/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </article>

        <article className="contact_txt2">
          {/* Hide the second h1 on mobile */}
          {!isMobile && <h1>kontakt</h1>}

          <p>
            Hvis du stadig er nysgerrig, så tag endelig et kig på <br />
            mine Projekter og læs en af mine Case Studies for at <br />
            få et indblik i mit arbejde. Jeg ser frem til at høre fra dig!
          </p>
        </article>
      </section>
    </main>
  );
}

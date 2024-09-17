import { HashLink as Link } from "react-router-hash-link";

export default function Astro() {
  return (
    <section className="case_study" id="astro">
      <h1>Opskrift På En Stjerne</h1>
      <div className="case_study_flex">
        <div className="case_study_show">
          <video
            src="./src/vid/astro.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="case_study_vid astro_vid"
          ></video>
          <div className="case_study_icons astro_icons">
            <img
              src="./src/img/astro/astro1.png"
              alt="Astronaut illustration"
            />
            <img
              src="./src/img/astro/astro2.png"
              alt="Astronaut illustration"
            />
            <img
              src="./src/img/astro/astro3.png"
              alt="Astronaut illustration"
            />
          </div>
          <img
            src="./src/img/astro/astro_screen.png"
            alt=""
            className="case_study_screen astro_screen"
          />
        </div>

        <section className="case_study_right">
          <article className="case_study_txt">
            <p>
              I dette projekt fik vi stillet en case, der lød på, at Stenomuseet
              ønskede at indføre flere interaktive elementer i deres
              udstillinger for at øge publikums engagement, og vi blev dermed
              tildelt opgaven at vælge en eksisterende udstilling og producere
              et produkt, der kunne tilføre værdi.
            </p>
            <p> Vi valgte at arbejde med udstillingen Astroteket.</p>
            <p>
              Dette valg traf vi, da udstillingen, selvom den havde godt
              grundindhold, præsenterede informationerne på en uengagerende
              måde, hvilket resulterede i, at besøgende ikke færdiggjorde
              udstillingen. Derfor valgte vi at implementere en interaktiv
              løsning, der skulle appellere til børn og barnlige sjæle.
              Løsningen blev en interaktiv historie med spillelementer kaldet
              Opskrift På En Stjerne. Denne gennemgår stjerners livscyklus på en
              engagerende og letforståelig måde og er udviklet på en måde, der
              inviterer til interaktion og leg. Elementer, der kan være vigtige,
              når man vil formidle kompleks information på en simpel måde.
            </p>
          </article>
        </section>
      </div>
      <div className="case_study_bottom">
        <div className="case_study_btns tb_btns">
          <Link smooth to="/#projects">
            <button className="btn">PROJEKTER</button>
          </Link>

          <a
            href="https://github.com/SarahCant/Astroteket"
            target="_blank"
            className="btn"
          >
            GITHUB
          </a>

          <a
            href="https://sarahcant.github.io/Astroteket/"
            target="_blank"
            className="btn"
          >
            SITE
          </a>
        </div>
        <p className="case_study_tools">
          ANVENDTE VÆRKTØJER: HTML, CSS, Adobe Illustrator, Adobe Dimentions,
          Adobe Photoshop, AI billede fremkaldelse.
        </p>
      </div>
    </section>
  );
}

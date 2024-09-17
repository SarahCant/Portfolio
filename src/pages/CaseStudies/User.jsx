import { HashLink as Link } from "react-router-hash-link";

export default function User() {
  return (
    <section className="case_study" id="user">
      <h1>Brugerdatabase</h1>
      <div className="case_study_flex">
        <div className="case_study_show user_show">
          <video
            src="./src/vid/user.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="case_study_vid user_vid"
          ></video>
          <img
            src="./src/img/user/user1.png"
            alt="Brugerdatabase på telefon"
            className="case_study_screen user_screen1"
          />
          <img
            src="./src/img/user/user2.png"
            alt="Brugerdatabase på telefon"
            className="case_study_screen user_screen2"
          />
        </div>

        <section className="case_study_right">
          <article className="case_study_txt">
            <p>
              Dette projekt havde til formål at udforme en CRUD-app i form af en
              brugerdatabase, der henter personoplysninger fra en ekstern
              database. Her skulle det være muligt at slette, tilføje og ændre
              brugere. Appen skulle være brugervenlig og kunne håndtere et stort
              antal brugere.
            </p>
            <p>
              Her benyttede jeg mig af React for at implementere de nødvendige
              funktioner, såsom lokal lagring af data og real-time opdateringer.
              Jeg designede brugergrænsefladen med CSS og sikrede et responsivt
              layout.
            </p>
            <p>
              Projektet gav mig et godt indblik i Reacts kernemekanismer samt
              erfaring med at bygge funktionelle og skalerbare webapplikationer.
            </p>
          </article>
        </section>
      </div>
      <div className="case_study_bottom user_bottom">
        <div className="case_study_btns">
          <Link smooth to="/#projects">
            <button className="btn">PROJEKTER</button>
          </Link>

          <a
            href="https://github.com/SarahCant/First-React-Project"
            target="_blank"
            className="btn"
          >
            GITHUB
          </a>
          <a
            href="https://sarahcant.github.io/First-React-Project/"
            target="_blank"
            className="btn"
          >
            SITE
          </a>
        </div>

        <p className="case_study_tools user_tools">
          ANVENDTE VÆRKTØJER: HTML, CSS, JavaScript, React.js, JSX
        </p>
      </div>
    </section>
  );
}

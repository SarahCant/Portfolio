import { HashLink as Link } from "react-router-hash-link";

export default function TB() {
  return (
    <section className="case_study" id="tb">
      <h1>Trøjborg Bryg</h1>
      <div className="case_study_flex ">
        <div className="case_study_show">
          <video
            src="./src/vid/tb.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="case_study_vid tb_vid"
          ></video>
          <div className="case_study_icons tb_icons">
            <img src="./src/img/tb/can1.png" alt="Trøjborg Bryd dåse" />
            <img src="./src/img/tb/can2.png" alt="Trøjborg Bryd dåse" />
            <img src="./src/img/tb/can3.png" alt="Trøjborg Bryd dåse" />
          </div>
          <img
            src="./src/img/tb/tb_screen.png"
            alt=""
            className="case_study_screen tb_screen"
          />
        </div>

        <section className="case_study_right">
          <article className="case_study_txt">
            <p>
              Som en del af mit eksamensprojekt blev jeg præsenteret for en case
              om det fiktive bryggeri Trøjborg Bryg, som fokuserer på produktion
              og salg af alkoholfri øl. Opgaven var at udvikle et engagerende og
              brugervenligt oplevelsessite, der kunne brande bryggeriet på en
              måde, som tiltalte det voksende marked for alkoholfri øl.
            </p>
            <p>
              Udfordringen var at modarbejde eksisterende fordomme om alkoholfri
              øl ved at skabe en let og legende branding, der kunne appellere
              bredt uden at fremstå for feminint. Det var vigtigt at udvikle et
              design og en visuel identitet, der afspejlede Trøjborg Brygs
              værdier og mål om, at deres øl skulle være for alle.
            </p>
            <p>
              Jeg arbejdede ud fra nøje markedsundersøgelser, hvor jeg gennem
              interviews identificerede kundernes præferencer for legende og
              farverige designs, som jeg implementerede i løsningen.
            </p>
            <p>
              Med alt dette fik jeg et grundlag for at kunne imødekomme både
              virksomhedens og kundernes behov, hvilket resulterede i et
              website, der tilbyder en engagerende oplevelse og en visuel
              identitet, der kan være med til at positionere Trøjborg Bryg
              stærkt i forhold til deres konkurrenter.
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
            href="https://github.com/SarahCant/TroejborgBryg"
            target="_blank"
            className="btn"
          >
            GITHUB
          </a>
          <a
            href="https://sarahcant.github.io/TroejborgBryg/troejborgbryg/"
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

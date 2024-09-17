import { HashLink as Link } from "react-router-hash-link";

export default function Motor() {
  return (
    <section className="case_study" id="motor">
      <h1>MotorcykelEventyr</h1>
      <div className="case_study_flex">
        <div className="case_study_show">
          <video
            src="./src/vid/motor.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="case_study_vid motor_vid"
          ></video>

          <img
            className="motor_logo"
            src="./src/img/motor/motor_logo.png"
            alt="MotorcylekEventyr logo"
          />

          <div className="motor_screens">
            <img src="./src/img/motor/motor1.png" alt="" />
            <img src="./src/img/motor/motor2.png" alt="" />
          </div>
        </div>

        <section className="case_study_right">
          <article className="case_study_txt">
            <p>
              I dette projekt tog vi udgangspunkt i motorcykelrejse-startuppen
              Motorcykeleventyr, der ønskede at få udviklet en hjemmeside for
              bedre at nå ud til deres store fællesskab på over 16.000
              medlemmer. Da de hidtil udelukkende har været til stede på sociale
              medier, manglede de en professionel digital identitet, der
              reflekterede deres kerneværdier.
            </p>
            <p> Det var her, vi kom ind.</p>
            <p>
              I udformningen af deres site søgte vi at fastholde virksomhedens
              værdier og skabe en troværdig, professionel, brugervenlig og
              visuelt engagerende hjemmeside.
            </p>
            <p>
              I tæt samarbejde med ejerne fik vi skabt en brugbar digital
              prototype, der reflekterer Motorcykeleventyrs vision og
              kerneværdier. Prototypen danner et solidt grundlag for deres
              fremtidige officielle site og hjalp virksomheden med at etablere
              en stærkere digital tilstedeværelse.
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
            href="https://github.com/SarahCant/Motorcykeleventyr-Videreudvikling"
            target="_blank"
            className="btn"
          >
            GITHUB
          </a>

          <a
            href="https://sarahcant.github.io/Motorcykeleventyr-Videreudvikling/"
            target="_blank"
            className="btn"
          >
            SITE
          </a>
        </div>

        <p className="case_study_tools">
          ANVENDTE VÆRKTØJER: HTML, CSS, JavaScript, Adobe Illustrator, Adobe
          Photoshop.
        </p>
      </div>
    </section>
  );
}

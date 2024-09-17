import { HashLink as Link } from "react-router-hash-link";

export default function ToDo() {
  return (
    <section className="case_study" id="todo">
      <h1>To-Do Liste</h1>
      <div className="case_study_flex">
        <div className="case_study_show todo_show">
          <img
            src="./src/img/todo/todo1.png"
            alt="To do liste på telefon"
            className="case_study_screen todo_screen"
          />
          <video
            src="./src/vid/todo.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="case_study_vid todo_vid"
          ></video>
          <div className="case_study_icons todo_icons">
            <img src="./src/img/todo/unchecked.png" alt="Unchecked list icon" />
            <img src="./src/img/todo/checked.png" alt="Checked list icon" />
          </div>
        </div>

        <section className="case_study_right todo_right">
          <article className="case_study_txt">
            <p>
              Som hobbyprojekt ønskede jeg at udvikle en simpel og brugervenlig
              webbaseret note-app til personlig brug. Målet var at skabe et
              værktøj, der kunne hjælpe med at organisere idéer og opgaver
              hurtigt og effektivt.
            </p>
            <p>
              Udfordringen var at bygge en app med et intuitivt interface, der
              tillod brugere at oprette, redigere og slette noter uden
              kompleksitet. Jeg ønskede, at løsningen skulle være responsiv, så
              den kunne bruges på både desktop og mobil. Derudover valgte jeg at
              sikre, at appen implementerede real-time opdateringer og lokal
              lagring, så data blev gemt direkte i browseren uden behov for en
              ekstern database.
            </p>
            <p>
              For at give appen et personligt præg og sikre den visuelle
              identitet valgte jeg at designe alle elementer fra bunden.
            </p>
          </article>
        </section>
      </div>
      <div className="case_study_bottom todo_bottom">
        <div className="case_study_btns todo_btns">
          <Link smooth to="/#projects">
            <button className="btn">PROJEKTER</button>
          </Link>

          <a
            href="https://github.com/SarahCant/To-Do-List"
            target="_blank"
            className="btn"
          >
            GITHUB
          </a>
          <a
            href="https://sarahcant.github.io/To-Do-List/to-do-list/"
            target="_blank"
            className="btn"
          >
            SITE
          </a>
        </div>

        <p className="case_study_tools todo_tools">
          ANVENDTE VÆRKTØJER: HTML, JavaScript, Adobe Illustrator
        </p>
      </div>
    </section>
  );
}

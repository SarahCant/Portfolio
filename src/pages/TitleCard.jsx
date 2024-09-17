import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function TitleCard() {
  return (
    <>
      <main className="titleCard" id="titlecard">
        <img
          src="./src/img/logoparts/firstname.png"
          alt="Sarah"
          className="firstname"
        />
        <img
          src="./src/img/logoparts/lastname.png"
          alt="Cant"
          className="lastname"
        />
        <article className="titleText">
          <h2>Innovativ frontender</h2>
          <p>
            Multimediedesignstuderende med passion for kreative løsninger og
            brugervenligt design
          </p>
        </article>
      </main>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

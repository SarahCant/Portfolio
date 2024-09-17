import Fade from "../components/Fade";
import { HashLink as Link } from "react-router-hash-link";

export default function About() {
  const fadeInRef = Fade();

  return (
    <main className="about" id="about">
      <section className="about_content fade-section" ref={fadeInRef}>
        <img
          src="./src/img/about.png"
          alt="Sarahs LinkedIn profilbillede"
          className="about_img"
        />
        <article>
          <h1>Hej, jeg er Sarah,</h1>
          <p>
            Hej, jeg er Sarah, En 27-årig Multimediedesignstuderende med passion
            for UX/UI-design og frontend programmering. Men en skarp sans for
            kommunikation og kreativ tænkning arbejder jeg altid med brugeren i
            fokus. Jeg stræber efter innovative løsninger og elsker, når
            komplekse idéer bliver simple. <br /> <br />
            Jeg er en nysgerrig, løsningsorienteret og kreativ teamplayer, der
            brænder for løsninger, der ikke blot ser godt ud, men også fungerer
            optimalt. Udover mine tekniske færdigheder værdsætter jeg godt
            samarbejde, innovation og en løsningsorienteret tilgang i alt, jeg
            gør. <br />
            <br />
            Lyder det som noget for dig? Så tøv ikke med at række ud. <br />
            <br />
            Jeg vil se frem til at høre fra dig!{" "}
          </p>
          <div className="about_btns">
            <Link smooth to="/#contact">
              <button className="btn">KONTAKT</button>
            </Link>
            <Link smooth to="/#projects">
              <button className="btn">PROJEKTER</button>
            </Link>{" "}
          </div>
        </article>
      </section>
    </main>
  );
}

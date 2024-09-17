import { HashLink as Link } from "react-router-hash-link";

export default function PageNotFound() {
  return (
    <main className="pnf">
      <section className="pnf_container ">
        <article className="pnf_txt1">
          <h1>error</h1>
          <p>
            Hov! Det ligner, du er kommet på afveje. <br />
            Navigér tilbage til
            <Link smooth to="/">
              <button className="btn">PORTFOLIO</button>
            </Link>
          </p>
        </article>
        <article className="pnf_txt2">
          <h1>404</h1>
          <p>
            Eller tag kontakt her:
            <Link smooth to="/#contact">
              <button className="btn">KONTAKT</button>
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}

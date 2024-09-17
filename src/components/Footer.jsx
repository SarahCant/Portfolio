export default function Footer() {
  return (
    <main className="footer">
      <div className="footer_contact">
        <img
          src="./src/img/icons/mail_white.png"
          alt="sarah.cant@hotmail.com"
          onClick={() =>
            (window.location.href = "mailto:sarah.cant@hotmail.com")
          }
          style={{ cursor: "pointer" }}
        />
        <a
          href="https://www.linkedin.com/in/sarah-cant-966b12221"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./src/img/icons/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <a href="/" className="footer_logo">
        <img src="./src/img/logo.png" alt="Sarah Cant" />
      </a>
      <p>Copyright &copy; 2024 Sarah Cant</p>
    </main>
  );
}

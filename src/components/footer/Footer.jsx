import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} Rey Rossi · Desarrollador Full Stack
        </p>

        <a 
          href="https://github.com/Rey-R06"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          GitHub
        </a>

      </div>
    </footer>
  );
}

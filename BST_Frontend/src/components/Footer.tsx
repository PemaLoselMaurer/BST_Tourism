export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Bhutan Smart Tourism</span>
        <nav className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

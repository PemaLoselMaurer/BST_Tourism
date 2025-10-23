import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Bhutan Smart Tourism</span>
        <nav className="footer-links">
          <Link href="/about">About Us</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

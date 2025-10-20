"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <Link href="/" className="brand">Bhutan Smart Tourism</Link>
        <ul className="nav-links">
          <li><Link href="/explore">Explore</Link></li>
          <li><Link href="/stories">Stories</Link></li>
          <li><Link href="/plan">Plan</Link></li>
          <li><Link href="/booking">Booking</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/chatbot">Chatbot</Link></li>
        </ul>
      </nav>
    </header>
  );
}

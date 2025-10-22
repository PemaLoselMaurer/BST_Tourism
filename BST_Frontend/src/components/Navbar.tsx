"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  LayoutDashboard,
  CalendarDays,
  BookOpenText,
  MessageSquare,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Homepage", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/dashboard", label: "Travel Dashboard", icon: LayoutDashboard },
  { href: "/booking", label: "Booking", icon: CalendarDays },
  { href: "/stories", label: "Stories", icon: BookOpenText },
  { href: "/chatbot", label: "Chatbot", icon: MessageSquare },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sidebar-inner">
      <div className="sidebar-brand">
        <Link href="/" className="brand">
          <span className="brand-icon"></span>
          <span>Bhutan Smart Tourism</span>
        </Link>
      </div>
      <ul className="sidebar-links">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className={active ? "active" : undefined}>
              <Link href={item.href} className="sidebar-link">
                <span className="icon-box" aria-hidden>
                  <item.icon className="icon" />
                </span>
                <span className="link-text">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="sidebar-footer">
        <Link href="#" className="sidebar-link logout-link" aria-label="Logout">
          <span className="icon-box" aria-hidden>
            <span className="icon">↳</span>
          </span>
          <span className="link-text">Logout</span>
        </Link>
      </div>
    </nav>
  );
}

"use client";
import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/": "Homepage",
  "/explore": "Explore",
  "/dashboard": "Dashboard",
  "/booking": "Booking",
  "/stories": "Stories",
  "/chatbot": "Chatbot",
};

function humanize(path: string) {
  const seg = path.split("?")[0].split("#")[0];
  const parts = seg.split("/").filter(Boolean);
  if (parts.length === 0) return "Homepage";
  const last = parts[parts.length - 1];
  return last.replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function Topbar() {
  const pathname = usePathname();
  const title = TITLES[pathname] ?? humanize(pathname);
  return (
    <header className="topbar">
      <h1 className="page-title">{title}</h1>
      <div className="topbar-actions">
        <input className="search" placeholder="Search anything" />
        <button className="icon-btn" aria-label="Notifications">
          🔔
        </button>
        <div className="user-chip">
          <span className="avatar" aria-hidden>
            👤
          </span>
          <span className="user-name">Guest</span>
        </div>
      </div>
    </header>
  );
}

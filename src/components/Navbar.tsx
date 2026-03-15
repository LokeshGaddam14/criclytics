"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, TrendingUp, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/players", label: "Players" },
  { href: "/dream11", label: "Dream11" },
  { href: "/predictions", label: "Predictions" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(22,33,62,0.95)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #E8192C, #c0121f)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(232,25,44,0.4)" }}>
            <TrendingUp size={17} color="white" />
          </div>
          <div>
            <span style={{ fontSize: "1.25rem", fontWeight: 900, fontFamily: "Bebas Neue, cursive", letterSpacing: "0.06em", color: "#fff" }}>
              CRIC<span style={{ color: "#E8192C" }}>LYTICS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "0.15rem", alignItems: "center" }} className="nav-desktop">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{ padding: "0.4rem 0.9rem", borderRadius: "7px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", color: isActive ? "#fff" : "var(--text-secondary)", background: isActive ? "var(--d11-red)" : "transparent", boxShadow: isActive ? "0 2px 12px rgba(232,25,44,0.35)" : "none", transition: "all 0.18s" }}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Live + CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.25rem 0.75rem", borderRadius: "999px", background: "rgba(232,25,44,0.12)", border: "1px solid rgba(232,25,44,0.3)" }}>
            <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8192C", display: "inline-block" }} />
            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#ff4d5e", letterSpacing: "0.06em" }}>LIVE</span>
          </div>
          <a href="https://www.dream11.com" target="_blank" rel="noopener noreferrer" className="nav-desktop" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.4rem 1rem", borderRadius: "8px", background: "linear-gradient(135deg,#E8192C,#c0121f)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", boxShadow: "0 2px 10px rgba(232,25,44,0.4)" }}>
            <ExternalLink size={13} /> Play Dream11
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-mobile" style={{ background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", padding: "0.25rem", display: "none" }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ padding: "0.75rem 1rem", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", color: isActive ? "#fff" : "var(--text-primary)", background: isActive ? "var(--d11-red)" : "transparent", border: isActive ? "none" : "1px solid var(--border)" }}>
                {link.label}
              </Link>
            );
          })}
          <a href="https://www.dream11.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem", borderRadius: "8px", background: "linear-gradient(135deg,#E8192C,#c0121f)", color: "#fff", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", marginTop: "0.25rem" }}>
            <ExternalLink size={15} /> Play on Dream11
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

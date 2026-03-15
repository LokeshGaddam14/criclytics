import Link from "next/link";
import { TrendingUp, Twitter, Youtube, Instagram } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/players", label: "Players" },
    { href: "/dream11", label: "Dream11 Optimizer" },
    { href: "/predictions", label: "Predictions" },
    { href: "/blog", label: "Blog" },
    { href: "/dream11", label: "Today's Best Pick" },
  ];

  const teams = ["MI","CSK","RCB","KKR","SRH","DC","PBKS","RR","GT","LSG"];

  return (
    <footer style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "3rem 0 1.5rem", marginTop: "4rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "linear-gradient(135deg,#E8192C,#c0121f)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={14} color="white" />
              </div>
              <span style={{ fontSize: "1.15rem", fontWeight: 900, fontFamily: "Bebas Neue, cursive", letterSpacing: "0.05em", color: "#fff" }}>
                CRIC<span style={{ color: "#E8192C" }}>LYTICS</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: "1.6", maxWidth: "210px", marginBottom: "1rem" }}>
              Your ultimate IPL fantasy companion. Data-driven insights for smarter Dream11 picks every match.
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {[
                { Icon: Twitter,   label: "Twitter",   href: "#" },
                { Icon: Youtube,   label: "YouTube",   href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s" }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.85rem", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Teams */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.85rem", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>IPL 2026 Teams</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {teams.map((team) => (
                <span key={team} style={{ padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 700, background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                  {team}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.85rem", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Disclaimer</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: "1.6", marginBottom: "0.75rem" }}>
              Criclytics is a fantasy sports analytics platform for entertainment purposes only. We are not affiliated with Dream11 or the BCCI.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: "1.6" }}>
              <span style={{ color: "#E8192C", fontWeight: 700 }}>⚠️ Affiliate Disclaimer:</span> Some links on this site may be affiliate links. We may earn a commission if you sign up through them, at no extra cost to you.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
            © {year} Criclytics. All rights reserved. Made with 🏏 for cricket lovers.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {["Privacy Policy", "Terms of Use", "Contact"].map((item) => (
              <span key={item} style={{ color: "var(--text-muted)", fontSize: "0.75rem", cursor: "pointer" }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

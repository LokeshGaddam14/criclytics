import Link from "next/link";
import { Clock, User } from "lucide-react";
import { articles } from "@/data/blog";

const catBadge: Record<string, string> = {
  "Match Preview": "badge-red",
  "Fantasy Tips":  "badge-green",
  "Analysis":      "badge-gold",
  "Deep Dive":     "badge-red",
  "Guide":         "badge-blue",
};

export default function BlogPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2.25rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.9rem", borderRadius: "999px", background: "rgba(74,144,226,0.12)", border: "1px solid rgba(74,144,226,0.3)", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#4A90E2", letterSpacing: "0.08em" }}>CRICKET INSIGHTS · {articles.length} ARTICLES</span>
        </div>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", fontFamily: "Bebas Neue, cursive", letterSpacing: "0.04em", marginBottom: "0.4rem" }}>CRICLYTICS BLOG</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Expert analysis, fantasy tips, and in-depth cricket insights</p>
      </div>

      {/* Featured */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "2rem" }}>
          <div className="card" style={{ borderRadius: "18px", overflow: "hidden", display: "grid", gridTemplateColumns: "minmax(240px,42%) 1fr", minHeight: "260px", border: "1px solid rgba(232,25,44,0.3)" }}>
            <div style={{ background: `linear-gradient(135deg, ${featured.gradFrom}, ${featured.gradTo})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.07), transparent)" }} />
              <span style={{ position: "relative" }}>{featured.emoji}</span>
            </div>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className={`badge ${catBadge[featured.category] ?? "badge-blue"}`} style={{ width: "fit-content", marginBottom: "0.75rem" }}>{featured.category}</span>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fff", lineHeight: "1.3", marginBottom: "0.875rem" }}>{featured.title}</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: "1.65", marginBottom: "1.25rem" }}>{featured.excerpt}</p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><User size={12} /> {featured.author}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Clock size={12} /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* ── Article Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(285px, 1fr))", gap: "1.1rem" }}>
        {rest.map(article => (
          <Link key={article.id} href={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "155px", background: `linear-gradient(135deg, ${article.gradFrom}, ${article.gradTo})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.05), transparent 60%)" }} />
                <span style={{ position: "relative" }}>{article.emoji}</span>
              </div>
              <div style={{ padding: "1.1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <span className={`badge ${catBadge[article.category] ?? "badge-blue"}`} style={{ width: "fit-content", marginBottom: "0.55rem", fontSize: "0.62rem" }}>{article.category}</span>
                <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff", lineHeight: "1.4", marginBottom: "0.5rem", flex: 1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{article.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: "1.5", marginBottom: "0.875rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{article.excerpt}</p>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.72rem", color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.7rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><User size={11} /> {article.author}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><Clock size={11} /> {article.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { articles } from "@/data/blog";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const catBadge: Record<string, string> = {
  "Match Preview": "badge-red",
  "Fantasy Tips":  "badge-green",
  "Analysis":      "badge-gold",
  "Deep Dive":     "badge-red",
  "Guide":         "badge-blue",
};

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Back */}
      <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600, marginBottom: "2rem" }}>
        <ArrowLeft size={15} /> Back to Blog
      </Link>

      {/* Hero Banner */}
      <div style={{ height: "260px", borderRadius: "18px", background: `linear-gradient(135deg, ${article.gradFrom}, ${article.gradTo})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6.5rem", marginBottom: "2rem", position: "relative", overflow: "hidden", border: "1px solid rgba(232,25,44,0.2)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08), transparent 60%)" }} />
        <span style={{ position: "relative", filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))" }}>{article.emoji}</span>
        <div style={{ position: "absolute", bottom: "1.25rem", left: "1.5rem" }}>
          <span className={`badge ${catBadge[article.category] ?? "badge-blue"}`}>{article.category}</span>
        </div>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 900, color: "#fff", lineHeight: "1.2", marginBottom: "1rem" }}>{article.title}</h1>

      {/* Meta */}
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #E8192C, #F5A623)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <User size={14} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}>{article.author}</span>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.82rem", color: "var(--text-muted)" }}><Clock size={13} /> {article.readTime}</span>
        <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{article.date}</span>
      </div>

      {/* Pull Quote */}
      <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "2rem", padding: "1.25rem 1.5rem", borderLeft: "3px solid #E8192C", background: "rgba(232,25,44,0.05)", borderRadius: "0 10px 10px 0", fontStyle: "italic" }}>
        {article.excerpt}
      </p>

      {/* Content */}
      <div style={{ color: "var(--text-secondary)", lineHeight: "1.85", fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: article.content }} />

      <style>{`
        div p { margin-bottom: 1.25rem; color: var(--text-secondary); line-height: 1.85; }
        div h2 { font-size: 1.35rem; font-weight: 800; color: #fff; margin: 2rem 0 0.875rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }
        div strong { color: #fff; }
      `}</style>

      {/* Divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)", margin: "3rem 0 2rem" }} />

      {/* Related Articles */}
      <h2 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "1.25rem" }}>📖 More Articles</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.875rem" }}>
        {related.map(rel => (
          <Link key={rel.id} href={`/blog/${rel.slug}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ display: "flex", gap: "0.875rem", padding: "0.875rem", alignItems: "center" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "9px", background: `linear-gradient(135deg, ${rel.gradFrom}, ${rel.gradTo})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{rel.emoji}</div>
              <div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff", lineHeight: "1.3", marginBottom: "0.2rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{rel.title}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{rel.readTime} · {rel.author}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

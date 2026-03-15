import Link from "next/link";
import { ArrowRight, MapPin, Clock, Star, Zap, Trophy, Target, TrendingUp, Flame, ExternalLink } from "lucide-react";
import { todayMatch, seasonStats } from "@/data/matches";
import { players } from "@/data/players";

export default function HomePage() {
  const topPicks = [...players].sort((a, b) => b.fantasyAvgPts - a.fantasyAvgPts).slice(0, 3);
  const captain = players.find(p => p.formRating === "Hot" && p.role === "AR") ?? players[0];
  const budgetGem = [...players].filter(p => p.credits <= 8.5).sort((a, b) => (b.fantasyAvgPts / b.credits) - (a.fantasyAvgPts / a.credits))[0]
    ?? [...players].filter(p => p.credits <= 9.0).sort((a, b) => (b.fantasyAvgPts / b.credits) - (a.fantasyAvgPts / a.credits))[0];
  const mostSelected = [...players].sort((a, b) => b.ownershipPct - a.ownershipPct).slice(0, 5);

  // Ticker items
  const tickerItems = [
    "🏏 MI vs RCB  7:30 PM IST",
    "🔴 Virat Kohli — 748 runs this season",
    "⚡ Jadeja — 3 wickets vs KKR",
    "📊 RR vs SRH — Buttler in red-hot form",
    "🏆 CSK vs KKR — March 16, 3:30 PM",
    "💫 Rashid Khan — 6.12 economy this season",
    "🔥 Bumrah 4-fer vs DC last match",
    "📈 Klaasen — 108 pts in last match",
  ];

  return (
    <div style={{ background: "var(--bg-primary)" }}>
      {/* ── Live Score Ticker ─────────────────────────────────── */}
      <div style={{ background: "var(--d11-red)", borderBottom: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", height: "34px", display: "flex", alignItems: "center" }}>
        <div style={{ background: "rgba(0,0,0,0.3)", flexShrink: 0, padding: "0 0.875rem", height: "100%", display: "flex", alignItems: "center", borderRight: "1px solid rgba(255,255,255,0.15)" }}>
          <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#fff", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>🔴 LIVE</span>
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 500, padding: "0 2rem", whiteSpace: "nowrap" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="hero-gradient" style={{ padding: "4rem 1.5rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-30%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,25,44,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.28rem 0.9rem", borderRadius: "999px", background: "rgba(232,25,44,0.12)", border: "1px solid rgba(232,25,44,0.35)", marginBottom: "1.25rem" }}>
            <span className="pulse-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E8192C", display: "inline-block" }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#ff4d5e", letterSpacing: "0.08em" }}>IPL 2026 · MATCH DAY 43</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "0.875rem", fontFamily: "Bebas Neue, cursive", letterSpacing: "0.03em" }}>
            <span style={{ color: "#fff" }}>CRICKET ANALYTICS</span><br />
            <span className="gradient-text">POWERED BY DATA</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "520px", marginBottom: "2rem", lineHeight: "1.7" }}>
            AI-powered match predictions, optimised Dream11 lineups, and deep player analytics — all in one place.
          </p>

          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <Link href="/dream11" className="btn-primary"><Trophy size={17} /> Build Dream11 Team</Link>
            <Link href="/predictions" className="btn-secondary"><TrendingUp size={17} /> Match Predictions</Link>
          </div>

          {/* Today's Match Card */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "18px", padding: "1.75rem", maxWidth: "680px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #E8192C, #F5A623)" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <span className="badge badge-red">TODAY&apos;S MATCH</span>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--text-muted)", fontSize: "0.78rem" }}><Clock size={12} />{todayMatch.time}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--text-muted)", fontSize: "0.78rem" }}><MapPin size={12} />Wankhede</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.35rem" }}>{todayMatch.team1Logo}</div>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff" }}>Mumbai Indians</div>
                <div style={{ marginTop: "0.4rem", fontSize: "1.2rem", fontWeight: 900, color: "#00C853", fontFamily: "Bebas Neue, cursive" }}>{todayMatch.winProb1}%</div>
              </div>
              <div style={{ textAlign: "center", fontFamily: "Bebas Neue, cursive", fontSize: "2rem", color: "var(--text-muted)" }}>VS</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.35rem" }}>{todayMatch.team2Logo}</div>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff" }}>RCB</div>
                <div style={{ marginTop: "0.4rem", fontSize: "1.2rem", fontWeight: 900, color: "#F5A623", fontFamily: "Bebas Neue, cursive" }}>{todayMatch.winProb2}%</div>
              </div>
            </div>

            {/* Win-prob bar */}
            <div style={{ height: "7px", borderRadius: "999px", background: "var(--border)", overflow: "hidden", display: "flex", marginBottom: "1rem" }}>
              <div style={{ width: `${todayMatch.winProb1}%`, background: "linear-gradient(90deg,#00C853,#009624)", borderRadius: "999px 0 0 999px" }} />
              <div style={{ width: `${todayMatch.winProb2}%`, background: "linear-gradient(90deg,#d97706,#F5A623)", borderRadius: "0 999px 999px 0" }} />
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/predictions" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.82rem", fontWeight: 700, color: "#E8192C", textDecoration: "none" }}>
                Full Prediction <ArrowRight size={14} />
              </Link>
              <Link href="/dream11" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.82rem", fontWeight: 700, color: "#F5A623", textDecoration: "none" }}>
                Optimize Team <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Captain & Budget Cards ─────────────────────────────── */}
      <section style={{ padding: "3rem 1.5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
          {/* Today's Top Captain Pick */}
          <div style={{ padding: "1.5rem", borderRadius: "14px", background: "linear-gradient(135deg, rgba(245,166,35,0.08), rgba(245,166,35,0.02))", border: "1px solid rgba(245,166,35,0.3)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#F5A623,#E8192C)" }} />
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.9rem" }}>
              <Star size={15} color="#F5A623" fill="#F5A623" />
              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#F5A623", letterSpacing: "0.08em" }}>TODAY&apos;S TOP CAPTAIN PICK</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.875rem" }}>
              <div style={{ fontSize: "2.2rem" }}>{captain.image}</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff" }}>{captain.name}</div>
                <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.2rem" }}>
                  <span className="badge badge-red">{captain.team}</span>
                  <span className="badge badge-gold">{captain.role}</span>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
              {[
                { label: "AVG PTS", value: captain.fantasyAvgPts, color: "#00C853" },
                { label: "CREDITS", value: captain.credits, color: "#F5A623" },
                { label: "2× PTS", value: Math.round(captain.fantasyAvgPts * 2), color: "#E8192C" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center", padding: "0.5rem", background: "var(--bg-secondary)", borderRadius: "8px" }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.25rem", color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: "0.58rem", color: "var(--text-muted)", fontWeight: 700 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Highest all-round fantasy average this season. Guaranteed to contribute in both batting and bowling.
            </p>
          </div>

          {/* Budget Gem of the Day */}
          {budgetGem && (
            <div style={{ padding: "1.5rem", borderRadius: "14px", background: "linear-gradient(135deg, rgba(0,200,83,0.08), rgba(0,200,83,0.02))", border: "1px solid rgba(0,200,83,0.3)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#00C853,#F5A623)" }} />
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.9rem" }}>
                <Zap size={15} color="#00C853" fill="#00C853" />
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#00C853", letterSpacing: "0.08em" }}>BUDGET GEM OF THE DAY</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.875rem" }}>
                <div style={{ fontSize: "2.2rem" }}>{budgetGem.image}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff" }}>{budgetGem.name}</div>
                  <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.2rem" }}>
                    <span className="badge badge-green">{budgetGem.team}</span>
                    <span className="badge badge-blue">{budgetGem.role}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
                {[
                  { label: "AVG PTS", value: budgetGem.fantasyAvgPts, color: "#00C853" },
                  { label: "CREDITS", value: budgetGem.credits, color: "#F5A623" },
                  { label: "PTS/CR", value: (budgetGem.fantasyAvgPts / budgetGem.credits).toFixed(1), color: "#4A90E2" },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: "center", padding: "0.5rem", background: "var(--bg-secondary)", borderRadius: "8px" }}>
                    <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.25rem", color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: "0.58rem", color: "var(--text-muted)", fontWeight: 700 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Best points-per-credit value under 9 credits. Free up budget for star players.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Top Fantasy Picks ─────────────────────────────────── */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem" }}>🏆 Top Fantasy Picks Today</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Highest-value players for tonight&apos;s MI vs RCB clash</p>
            </div>
            <Link href="/dream11" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.45rem 1.1rem", borderRadius: "8px", background: "rgba(232,25,44,0.1)", border: "1px solid rgba(232,25,44,0.3)", color: "#ff4d5e", fontSize: "0.825rem", fontWeight: 700, textDecoration: "none" }}>
              Full Optimizer <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))", gap: "1rem" }}>
            {topPicks.map((player, idx) => (
              <div key={player.id} className="card" style={{ padding: "1.4rem", position: "relative", overflow: "hidden", border: idx === 0 ? "1px solid rgba(245,166,35,0.35)" : "1px solid var(--border)" }}>
                {idx === 0 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#F5A623,#E8192C)" }} />}
                {idx === 0 && <span className="badge badge-gold" style={{ position: "absolute", top: "0.65rem", right: "0.75rem", fontSize: "0.6rem" }}>⭐ TOP PICK</span>}
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: idx === 0 ? "linear-gradient(135deg,rgba(245,166,35,0.2),rgba(232,25,44,0.15))" : "var(--bg-secondary)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>
                    {player.image}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>{player.name}</div>
                    <div style={{ display: "flex", gap: "0.35rem", marginTop: "0.2rem" }}>
                      <span className="badge badge-red">{player.team}</span>
                      <span className={`badge ${player.role === "BAT" ? "badge-blue" : player.role === "BOWL" ? "badge-red" : player.role === "AR" ? "badge-gold" : "badge-purple"}`}>{player.role}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  {[
                    { label: "AVG PTS", value: player.fantasyAvgPts, color: "#00C853" },
                    { label: "CREDITS", value: player.credits, color: "#F5A623" },
                    { label: "OWNED", value: `${player.ownershipPct}%`, color: "#4A90E2" },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: "center", padding: "0.5rem", background: "var(--bg-secondary)", borderRadius: "7px" }}>
                      <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.1rem", color: s.color, lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontSize: "0.58rem", color: "var(--text-muted)", fontWeight: 700, marginTop: "0.15rem" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 600 }}>FORM</span>
                  {player.form.map((f, i) => (
                    <div key={i} style={{ flex: 1, height: "5px", borderRadius: "999px", background: f.points >= 80 ? "#00C853" : f.points >= 60 ? "#F5A623" : "#E8192C" }} title={`${f.match}: ${f.points} pts`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Most Selected Players ─────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>📊 Most Selected Today</h2>
            <Link href="/players" style={{ fontSize: "0.82rem", color: "#E8192C", textDecoration: "none", fontWeight: 600 }}>View all players →</Link>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {mostSelected.map((p, i) => (
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.65rem 1rem", borderRadius: "10px", background: "var(--bg-card)", border: "1px solid var(--border)", flex: "1 1 180px", minWidth: "180px" }}>
                <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.3rem", color: i === 0 ? "#F5A623" : "var(--text-muted)", width: "22px" }}>#{i + 1}</span>
                <div style={{ fontSize: "1.4rem" }}>{p.image}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#fff" }}>{p.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "#00C853", fontWeight: 700 }}>{p.ownershipPct}% owned</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Season Stats ─────────────────────────────────────── */}
      <section style={{ padding: "0 1.5rem 3rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem" }}>📈 Season Stats</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>IPL 2026 · {seasonStats.totalMatches} matches played</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.875rem", marginBottom: "1.5rem" }}>
            {[
              { icon: Trophy, label: "Top Scorer", name: seasonStats.topScorer.name, sub: `${seasonStats.topScorer.runs} runs · ${seasonStats.topScorer.team}`, color: "#F5A623" },
              { icon: Target, label: "Top Wicket Taker", name: seasonStats.topWicketTaker.name, sub: `${seasonStats.topWicketTaker.wickets} wickets · ${seasonStats.topWicketTaker.team}`, color: "#E8192C" },
              { icon: Zap,    label: "Best Economy", name: seasonStats.bestEconomy.name, sub: `${seasonStats.bestEconomy.economy} RPO · ${seasonStats.bestEconomy.team}`, color: "#00C853" },
              { icon: Flame,  label: "Most Sixes", name: seasonStats.mostSixes.name, sub: `${seasonStats.mostSixes.sixes} sixes · ${seasonStats.mostSixes.team}`, color: "#4A90E2" },
            ].map((s) => (
              <div key={s.label} className="card" style={{ padding: "1.25rem" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "9px", background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.875rem" }}>
                  <s.icon size={18} color={s.color} />
                </div>
                <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "0.2rem" }}>{s.label.toUpperCase()}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem" }}>{s.name}</div>
                <div style={{ fontSize: "0.78rem", color: s.color, fontWeight: 700 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Season totals */}
          <div style={{ padding: "1.5rem 2rem", borderRadius: "14px", background: "var(--bg-card)", border: "1px solid var(--border)", display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[
                { v: seasonStats.totalRuns.toLocaleString(), l: "Total Runs", c: "#00C853" },
                { v: String(seasonStats.totalMatches),       l: "Matches",   c: "#F5A623" },
                { v: "10",                                    l: "Teams",     c: "#4A90E2" },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "2.4rem", color: s.c, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Link href="/players" className="btn-primary"><ArrowRight size={15} /> All Player Stats</Link>
          </div>
        </div>
      </section>

      {/* ── Dream11 Affiliate Banner ──────────────────────────── */}
      <section style={{ padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ padding: "2rem 2.5rem", borderRadius: "18px", background: "linear-gradient(135deg, #E8192C 0%, #9b000f 60%, #1A1A2E 100%)", border: "1px solid rgba(232,25,44,0.4)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "240px", background: "radial-gradient(ellipse at right, rgba(245,166,35,0.12), transparent 80%)" }} />
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>FANTASY CRICKET · INDIA&apos;S #1 PLATFORM</div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: "0.4rem", fontFamily: "Bebas Neue, cursive", letterSpacing: "0.03em" }}>
                WIN REAL CASH ON DREAM11 TODAY 🏆
              </h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", maxWidth: "440px" }}>
                Use our AI-optimised picks and take on 150M+ players. Sign up now with our link and get ₹75 free to play!
              </p>
            </div>
            <a href="https://www.dream11.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 2rem", borderRadius: "10px", background: "#fff", color: "#E8192C", fontWeight: 900, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", flexShrink: 0 }}>
              <ExternalLink size={17} /> Play on Dream11
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

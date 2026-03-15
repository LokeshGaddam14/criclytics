"use client";

import { useMemo, useState } from "react";
import { todayMatch, upcomingMatches } from "@/data/matches";
import { players } from "@/data/players";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
} from "recharts";

const matches = [todayMatch, ...upcomingMatches];

export default function PredictionsPage() {
  const [selId, setSelId] = useState(todayMatch.id);
  const match = useMemo(() => matches.find(m => m.id === selId) ?? todayMatch, [selId]);

  // Top performer predictions for this match
  const topPerformers = useMemo(() => {
    const team1 = match.team1Short;
    const team2 = match.team2Short;
    return [...players]
      .filter(p => p.team === team1 || p.team === team2)
      .sort((a, b) => b.fantasyAvgPts - a.fantasyAvgPts)
      .slice(0, 4)
      .map(p => ({ player: p, confidence: Math.min(98, Math.round(60 + p.fantasyAvgPts * 0.22 + Math.random() * 8)) }));
  }, [match]);

  const radarData = [
    { subject: "Batting",    team1: 88, team2: 82 },
    { subject: "Bowling",    team1: 85, team2: 74 },
    { subject: "Fielding",   team1: 78, team2: 76 },
    { subject: "Form",       team1: 80, team2: 72 },
    { subject: "Home Adv.", team1: match.isToday ? 90 : 60, team2: 50 },
    { subject: "Experience",team1: 86, team2: 80 },
  ];

  const COLORS = ["#E8192C", "#F5A623"];

  const pitchColors = {
    Batting: { bg: "rgba(0,200,83,0.1)", border: "rgba(0,200,83,0.35)", label: "#00C853" },
    Bowling: { bg: "rgba(232,25,44,0.1)", border: "rgba(232,25,44,0.35)", label: "#E8192C" },
    Balanced:{ bg: "rgba(74,144,226,0.1)", border: "rgba(74,144,226,0.35)", label: "#4A90E2" },
  };
  const pc = pitchColors[match.pitchReport.type];

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <span className="badge badge-red" style={{ marginBottom: "0.75rem" }}>MATCH PREDICTIONS</span>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", fontFamily: "Bebas Neue, cursive", letterSpacing: "0.04em", marginBottom: "0.4rem" }}>MATCH PREDICTIONS</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Data-driven analysis for today&apos;s match</p>
      </div>

      {/* ── Match Selector ── */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
        {matches.map(m => (
          <button key={m.id} onClick={() => setSelId(m.id)} style={{ padding: "0.5rem 1rem", borderRadius: "9px", fontSize: "0.8rem", fontWeight: 700, cursor: "pointer", background: selId===m.id ? "rgba(232,25,44,0.15)" : "var(--bg-card)", border: selId===m.id ? "1px solid var(--d11-red)" : "1px solid var(--border)", color: selId===m.id ? "#ff4d5e" : "var(--text-secondary)", transition: "all 0.15s" }}>
            {m.team1Short} vs {m.team2Short}
          </button>
        ))}
      </div>

      {/* ── Grid Row 1: Win Prob + Radar ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
        {/* Win Prob */}
        <div className="card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "1rem" }}>🎯 Win Probability</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ width: "130px", height: "130px", flexShrink: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={[{ value: match.winProb1 }, { value: match.winProb2 }]} cx="50%" cy="50%" innerRadius={38} outerRadius={60} startAngle={90} endAngle={-270} dataKey="value" strokeWidth={0}>
                    <Cell fill="#E8192C" />
                    <Cell fill="#F5A623" />
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "#fff", fontSize: "0.78rem" }} formatter={(v: number) => [`${v}%`, "Win Probability"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex: 1 }}>
              {[
                { name: match.team1Short, prob: match.winProb1, color: "#E8192C" },
                { name: match.team2Short, prob: match.winProb2, color: "#F5A623" },
              ].map(t => (
                <div key={t.name} style={{ marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}>{t.name}</span>
                    <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.1rem", color: t.color }}>{t.prob}%</span>
                  </div>
                  <div style={{ height: "7px", background: "var(--border)", borderRadius: "999px", overflow: "hidden" }}>
                    <div style={{ width: `${t.prob}%`, height: "100%", background: t.color, borderRadius: "999px" }} />
                  </div>
                </div>
              ))}
              <div style={{ padding: "0.5rem 0.875rem", borderRadius: "8px", background: "rgba(0,200,83,0.1)", border: "1px solid rgba(0,200,83,0.3)", fontSize: "0.8rem", fontWeight: 700, color: "#00C853", textAlign: "center" }}>
                🏆 Predicted Winner: {match.team1Short}
              </div>
            </div>
          </div>
        </div>

        {/* Radar */}
        <div className="card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>📊 Team Strength Comparison</h2>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", fontWeight: 700, color: "#E8192C" }}>
              <span style={{ width: "10px", height: "2px", background: "#E8192C", display: "inline-block" }} /> {match.team1Short}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", fontWeight: 700, color: "#F5A623" }}>
              <span style={{ width: "10px", height: "2px", background: "#F5A623", display: "inline-block" }} /> {match.team2Short}
            </span>
          </div>
          <div style={{ height: "175px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="68%">
                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#475569", fontSize: 10 }} />
                <Radar name={match.team1Short} dataKey="team1" stroke="#E8192C" fill="#E8192C" fillOpacity={0.18} strokeWidth={2} />
                <Radar name={match.team2Short} dataKey="team2" stroke="#F5A623" fill="#F5A623" fillOpacity={0.12} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Grid Row 2: Pitch + Weather + Toss ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
        {/* Pitch Report */}
        <div style={{ padding: "1.25rem", borderRadius: "12px", background: pc.bg, border: `1px solid ${pc.border}` }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 800, color: pc.label, letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            🏟️ PITCH REPORT — {match.pitchReport.type.toUpperCase()} FRIENDLY
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Batting</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#00C853" }}>{match.pitchReport.batting}%</span>
            </div>
            <div style={{ height: "6px", background: "var(--border)", borderRadius: "999px", overflow: "hidden" }}>
              <div style={{ width: `${match.pitchReport.batting}%`, height: "100%", background: "#00C853", borderRadius: "999px" }} />
            </div>
          </div>
          <div style={{ marginBottom: "0.875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Pace Bowling</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#E8192C" }}>{match.pitchReport.paceHelp}%</span>
            </div>
            <div style={{ height: "6px", background: "var(--border)", borderRadius: "999px", overflow: "hidden" }}>
              <div style={{ width: `${match.pitchReport.paceHelp}%`, height: "100%", background: "#E8192C", borderRadius: "999px" }} />
            </div>
          </div>
          <div style={{ marginBottom: "0.875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Spin Bowling</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#F5A623" }}>{match.pitchReport.spinHelp}%</span>
            </div>
            <div style={{ height: "6px", background: "var(--border)", borderRadius: "999px", overflow: "hidden" }}>
              <div style={{ width: `${match.pitchReport.spinHelp}%`, height: "100%", background: "#F5A623", borderRadius: "999px" }} />
            </div>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{match.pitchReport.description}</p>
          <div style={{ marginTop: "0.625rem", padding: "0.5rem 0.75rem", background: "rgba(245,166,35,0.1)", borderRadius: "7px", fontSize: "0.75rem", color: "#F5A623", fontWeight: 700 }}>
            Avg 1st innings score: ~{match.pitchReport.avgScore}
          </div>
        </div>

        {/* Weather */}
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#4A90E2", letterSpacing: "0.08em", marginBottom: "0.875rem" }}>
            ⛅ WEATHER CONDITIONS
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "0.875rem" }}>
            {[
              { label: "Condition", value: match.weather.condition, icon: "🌤️" },
              { label: "Temperature", value: `${match.weather.temp}°C`, icon: "🌡️" },
              { label: "Humidity", value: `${match.weather.humidity}%`, icon: "💧" },
              { label: "Rain Chance", value: `${match.weather.rainChance}%`, icon: "🌧️" },
            ].map(w => (
              <div key={w.label} style={{ padding: "0.625rem", background: "var(--bg-secondary)", borderRadius: "8px" }}>
                <div style={{ fontSize: "1rem", marginBottom: "0.2rem" }}>{w.icon}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#fff" }}>{w.value}</div>
                <div style={{ fontSize: "0.62rem", color: "var(--text-muted)", fontWeight: 600 }}>{w.label}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: "0.625rem 0.875rem", borderRadius: "8px", background: match.weather.dewFactor ? "rgba(0,200,83,0.1)" : "rgba(74,144,226,0.1)", border: `1px solid ${match.weather.dewFactor ? "rgba(0,200,83,0.3)" : "rgba(74,144,226,0.3)"}`, fontSize: "0.78rem", fontWeight: 700, color: match.weather.dewFactor ? "#00C853" : "#4A90E2" }}>
            {match.weather.dewFactor ? "💦 Dew factor likely — chasing team gets easier!" : "✅ No dew expected — pitch plays normally"}
          </div>
        </div>

        {/* Toss Impact */}
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#c084fc", letterSpacing: "0.08em", marginBottom: "0.875rem" }}>
            🪙 TOSS IMPACT ANALYSIS
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1rem" }}>
            {match.tossImpact}
          </p>
          <div style={{ padding: "0.75rem", background: "rgba(155,89,182,0.1)", borderRadius: "9px", border: "1px solid rgba(155,89,182,0.25)", fontSize: "0.8rem", color: "#c084fc", fontWeight: 700 }}>
            ⚠️ Consider waiting for toss result before finalising your Dream11 team
          </div>
        </div>
      </div>

      {/* ── Row 3: Data Reasoning + H2H Timeline ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
        {/* Key Factors */}
        <div className="card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "1rem" }}>🧩 Data Reasoning</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {match.keyFactors.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.65rem 0.875rem", borderRadius: "9px", background: "var(--bg-secondary)", border: "1px solid var(--border)", alignItems: "flex-start" }}>
                <span style={{ minWidth: "22px", height: "22px", borderRadius: "6px", background: i < 2 ? "#E8192C" : i < 4 ? "#F5A623" : "rgba(74,144,226,0.3)", color: i < 2 ? "#fff" : i < 4 ? "#fff" : "#4A90E2", fontSize: "0.7rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: "1.5" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* H2H Timeline */}
        <div className="card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>⚔️ Last 5 H2H Results</h2>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            {[
              { team: match.team1Short, wins: match.h2h.team1Wins, color: "#E8192C" },
              { team: match.team2Short, wins: match.h2h.team2Wins, color: "#F5A623" },
            ].map(t => (
              <div key={t.team} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "2rem", color: t.color, lineHeight: 1 }}>{t.wins}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 700 }}>{t.team} wins</div>
              </div>
            ))}
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "2rem", color: "var(--text-muted)", lineHeight: 1 }}>{match.h2h.total}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 700 }}>Total</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {match.h2h.lastFive.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.875rem", borderRadius: "8px", background: "var(--bg-secondary)", border: `1px solid ${r.winner === match.team1Short ? "rgba(232,25,44,0.25)" : "rgba(245,166,35,0.25)"}` }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: r.winner === match.team1Short ? "#E8192C" : "#F5A623", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", flex: 1 }}>{r.result}</span>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: r.winner === match.team1Short ? "#E8192C" : "#F5A623" }}>{r.winner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Top Performer Predictions ── */}
      <div className="card" style={{ padding: "1.5rem" }}>
        <h2 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "1rem" }}>🌟 Top Performer Predictions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.875rem" }}>
          {topPerformers.map(({ player: p, confidence }) => (
            <div key={p.id} style={{ padding: "1rem", borderRadius: "10px", background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "1.5rem" }}>{p.image}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}>{p.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{p.team} · {p.role}</div>
                </div>
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.2rem" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600 }}>CONFIDENCE</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: confidence >= 80 ? "#00C853" : confidence >= 65 ? "#F5A623" : "#E8192C" }}>{confidence}%</span>
                </div>
                <div style={{ height: "6px", background: "var(--border)", borderRadius: "999px", overflow: "hidden" }}>
                  <div style={{ width: `${confidence}%`, height: "100%", background: confidence >= 80 ? "#00C853" : confidence >= 65 ? "#F5A623" : "#E8192C", borderRadius: "999px" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Projected pts</span>
                <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.1rem", color: "#00C853" }}>{Math.round(p.fantasyAvgPts * (1 + (confidence - 75) / 200))}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Copy, Check, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { players } from "@/data/players";
import type { Player } from "@/data/players";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

// ── Helper ───────────────────────────────────────────────────────────
const roleOrder = { WK: 0, BAT: 1, AR: 2, BOWL: 3 };
const byRole = (p: Player[]) => [...p].sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);

// Three pre-built combinations using different criteria
function buildCombo(strategy: "safe" | "balanced" | "risky"): Player[] {
  const sorted = [...players].sort((a, b) => {
    if (strategy === "safe")    return b.fantasyAvgPts - a.fantasyAvgPts;
    if (strategy === "balanced")  return (b.fantasyAvgPts / b.credits) - (a.fantasyAvgPts / a.credits);
    // risky = differential: low ownership but high ceiling
    const lastA = a.form[a.form.indexOf(a.form.reduce((m,f)=>f.points>m.points?f:m))]?.points ?? 0;
    const lastB = b.form[b.form.indexOf(b.form.reduce((m,f)=>f.points>m.points?f:m))]?.points ?? 0;
    return (lastB / b.ownershipPct) - (lastA / a.ownershipPct);
  });

  const xi: Player[] = [];
  let credits = 0;
  const roleCounts = { WK: 0, BAT: 0, AR: 0, BOWL: 0 };
  const roleLimits = { WK: [1,2], BAT: [3,5], AR: [1,3], BOWL: [3,5] };

  for (const p of sorted) {
    if (xi.length === 11) break;
    if (credits + p.credits > 100) continue;
    if (roleCounts[p.role] >= roleLimits[p.role][1]) continue;
    xi.push(p);
    credits += p.credits;
    roleCounts[p.role]++;
  }
  return xi;
}

const combos = {
  safe:     buildCombo("safe"),
  balanced: buildCombo("balanced"),
  risky:    buildCombo("risky"),
};

const captainInfo = {
  safe:     { captain: "Ravindra Jadeja", vc: "Rashid Khan" },
  balanced: { captain: "Jos Buttler",     vc: "Suryakumar Yadav" },
  risky:    { captain: "Sunil Narine",    vc: "Heinrich Klaasen" },
};

type Strategy = "safe" | "balanced" | "risky";

export default function Dream11Page() {
  const [mode, setMode]         = useState<"safe" | "diff">("safe");
  const [strategy, setStrategy] = useState<Strategy>("balanced");
  const [copied, setCopied]     = useState(false);

  const xi = combos[strategy];
  const totalCredits = xi.reduce((s, p) => s + p.credits, 0);
  const cap = captainInfo[strategy];

  const chartData = [...players]
    .sort((a, b) => (b.fantasyAvgPts / b.credits) - (a.fantasyAvgPts / a.credits))
    .slice(0, 12)
    .map(p => ({ name: p.name.split(" ").pop()!, ppc: +(p.fantasyAvgPts / p.credits).toFixed(2), team: p.team }));

  const handleCopy = () => {
    const txt = xi.map(p => `${p.name} (${p.team}) - ${p.role} - ${p.credits}Cr`).join("\n")
      + `\n\nC: ${cap.captain} | VC: ${cap.vc}`
      + `\nTotal: ${totalCredits.toFixed(1)}/100 Cr`;
    navigator.clipboard.writeText(txt).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <span className="badge badge-red" style={{ marginBottom: "0.75rem" }}>DREAM11 OPTIMIZER</span>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", fontFamily: "Bebas Neue, cursive", letterSpacing: "0.04em", marginBottom: "0.4rem" }}>BEST XI SELECTOR</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 0.9rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "0.862rem", color: "var(--text-primary)" }}>
            💙 <strong>MI</strong> vs <strong>RCB</strong> ❤️ &nbsp; March 15, 2026
          </span>
        </div>
      </div>

      {/* ── Mode Toggle ── */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)" }}>
          {(["safe","diff"] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} style={{ padding: "0.55rem 1.25rem", background: mode===m ? "var(--d11-red)" : "var(--bg-card)", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.82rem", fontWeight: 700 }}>
              {m === "safe" ? "🛡️ Safe Picks" : "⚡ Differential Picks"}
            </button>
          ))}
        </div>
        {mode === "diff" && <span style={{ fontSize: "0.78rem", color: "#F5A623", padding: "0.35rem 0.75rem", background: "rgba(245,166,35,0.1)", borderRadius: "7px", border: "1px solid rgba(245,166,35,0.3)" }}>Low ownership · High upside picks</span>}
      </div>

      {/* ── Strategy Tabs ── */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {([
          { key: "safe"    as Strategy, label: "Safe Team",     icon: Shield, desc: "Max average pts"  },
          { key: "balanced"as Strategy, label: "Balanced Team",  icon: TrendingUp,    desc: "Best pts per credit" },
          { key: "risky"   as Strategy, label: "Risky Team",    icon: Zap,    desc: "Differential picks" },
        ]).map(({ key, label, icon: Icon, desc }) => (
          <button key={key} onClick={() => setStrategy(key)} style={{ display: "flex", flexDirection: "column", gap: "0.15rem", padding: "0.75rem 1.25rem", borderRadius: "10px", background: strategy===key ? "rgba(232,25,44,0.15)" : "var(--bg-card)", border: strategy===key ? "1px solid var(--d11-red)" : "1px solid var(--border)", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: strategy===key ? "#ff4d5e" : "#fff", fontSize: "0.875rem", fontWeight: 700 }}>
              <Icon size={15} /> {label}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{desc}</div>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(280px, 360px)", gap: "1.5rem", alignItems: "start" }}>
        {/* ── Left: XI ── */}
        <div>
          {/* Budget Tracker */}
          <div style={{ padding: "1rem 1.25rem", borderRadius: "12px", background: "var(--bg-card)", border: "1px solid var(--border)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 700, marginBottom: "0.2rem" }}>BUDGET USED</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
                <span style={{ fontFamily: "Bebas Neue, cursive", fontSize: "2rem", color: totalCredits > 100 ? "#E8192C" : "#00C853", lineHeight: 1 }}>{totalCredits.toFixed(1)}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>/100 Cr</span>
              </div>
            </div>
            <div style={{ flex: 1, height: "8px", background: "var(--border)", borderRadius: "999px", overflow: "hidden" }}>
              <div style={{ width: `${Math.min(100, (totalCredits / 100) * 100)}%`, height: "100%", background: totalCredits > 100 ? "#E8192C" : totalCredits > 95 ? "#F5A623" : "#00C853", borderRadius: "999px 0 0 999px", transition: "width 0.4s" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <Users size={13} /> {xi.length}/11 players
              </div>
              <button onClick={handleCopy} style={{ display: "flex", alignItems: "center", gap: "0.35rem", padding: "0.4rem 0.875rem", borderRadius: "8px", background: copied ? "rgba(0,200,83,0.15)" : "rgba(74,144,226,0.15)", border: `1px solid ${copied ? "rgba(0,200,83,0.4)" : "rgba(74,144,226,0.4)"}`, color: copied ? "#00C853" : "#4A90E2", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer" }}>
                {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy Team</>}
              </button>
            </div>
          </div>

          {/* Player List */}
          <div className="card" style={{ padding: "0.75rem" }}>
            <h2 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", marginBottom: "0.75rem", padding: "0 0.4rem" }}>🚀 Recommended XI</h2>
            {byRole(xi).map((p, i) => {
              const isCap = p.name === cap.captain;
              const isVC  = p.name === cap.vc;
              return (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.65rem 0.5rem", borderBottom: i < xi.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0, border: isCap ? "1px solid #F5A623" : isVC ? "1px solid #00C853" : "1px solid var(--border)" }}>{p.image}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff", display: "flex", gap: "0.4rem", alignItems: "center", flexWrap: "wrap" }}>
                      {p.name}
                      {isCap && <span style={{ padding: "1px 7px", borderRadius: "4px", fontSize: "0.6rem", fontWeight: 800, background: "#F5A623", color: "#000" }}>C</span>}
                      {isVC  && <span style={{ padding: "1px 7px", borderRadius: "4px", fontSize: "0.6rem", fontWeight: 800, background: "#00C853", color: "#000" }}>VC</span>}
                    </div>
                    <div style={{ display: "flex", gap: "0.35rem", marginTop: "0.15rem" }}>
                      <span className="badge badge-red"   style={{ fontSize: "0.58rem" }}>{p.team}</span>
                      <span className="badge badge-blue"  style={{ fontSize: "0.58rem" }}>{p.role}</span>
                      <span style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>{p.ownershipPct}% owned</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.05rem", color: "#00C853", lineHeight: 1 }}>{p.fantasyAvgPts}</div>
                    <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>{p.credits} Cr</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right: Cap/VC + Chart ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Captain Card */}
          <div style={{ padding: "1.25rem", borderRadius: "12px", background: "linear-gradient(135deg,rgba(245,166,35,0.1),rgba(245,166,35,0.02))", border: "1px solid rgba(245,166,35,0.35)" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#F5A623", letterSpacing: "0.08em", marginBottom: "0.625rem" }}>⭐ CAPTAIN PICK (2× POINTS)</div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "0.2rem" }}>{cap.captain}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Best all-round average for maximum 2× upside. Guaranteed to contribute in both batting and bowling this fixture.
            </div>
          </div>
          {/* VC Card */}
          <div style={{ padding: "1.25rem", borderRadius: "12px", background: "linear-gradient(135deg,rgba(0,200,83,0.1),rgba(0,200,83,0.02))", border: "1px solid rgba(0,200,83,0.35)" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#00C853", letterSpacing: "0.08em", marginBottom: "0.625rem" }}>🎯 VICE CAPTAIN (1.5× POINTS)</div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "0.2rem" }}>{cap.vc}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              Strong differential pick. Lower ownership means bigger Grand League advantage if they fire tonight.
            </div>
          </div>

          {/* Points per Credit Chart */}
          <div className="card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "0.875rem" }}>
              📊 Points per Credit (Top 12)
            </h3>
            <div style={{ height: "220px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }} layout="vertical">
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis type="number" tick={{ fill: "#475569", fontSize: 10 }} tickLine={false} axisLine={false} />
                  <YAxis dataKey="name" type="category" tick={{ fill: "#94a3b8", fontSize: 10 }} tickLine={false} axisLine={false} width={60} />
                  <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "#fff", fontSize: "0.78rem" }} // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((value: number | string | undefined) => [String(value ?? "") + " pts/cr", "Value"]) as any} />
                  <Bar dataKey="ppc" radius={[0, 4, 4, 0]}>
                    {chartData.map((_, i) => (
                      <Cell key={i} fill={i < 3 ? "#E8192C" : i < 6 ? "#F5A623" : "#4A90E2"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tips */}
          <div className="card" style={{ padding: "1.25rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "0.875rem" }}>💡 Optimizer Tips</h3>
            {[
              "All-rounders give you the highest floor in fantasy cricket",
              "Keep an eye on toss — it affects 30% of bowling rotations",
              "Wankhede favours big totals — stack 4+ batsmen today",
              "Players with >40% ownership are safe but limit upside",
              "Check weather — dew factor helps team batting second",
            ].map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ color: "#E8192C", fontWeight: 800, fontSize: "0.8rem", flexShrink: 0 }}>{i+1}.</span>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", lineHeight: "1.5" }}>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

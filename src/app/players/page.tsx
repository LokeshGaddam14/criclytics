"use client";

import { useState, useMemo } from "react";
import { Search, ArrowUpDown, Flame } from "lucide-react";
import { players, teams } from "@/data/players";
import type { Player, PlayerRole, FormRating } from "@/data/players";

const roles: (PlayerRole | "All")[] = ["All", "WK", "BAT", "AR", "BOWL"];
type SortKey = "name" | "credits" | "battingAvg" | "strikeRate" | "fantasyAvgPts";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "fantasyAvgPts", label: "Fantasy Pts" },
  { key: "credits",       label: "Credits"     },
  { key: "battingAvg",    label: "Batting Avg"  },
  { key: "strikeRate",    label: "Strike Rate"  },
];

const formColors: Record<FormRating, string> = {
  Hot: "#E8192C", Good: "#00C853", Average: "#F5A623", Cold: "#4A90E2",
};

const roleColor = (role: PlayerRole) => ({
  BAT: "badge-blue", BOWL: "badge-red", AR: "badge-gold", WK: "badge-purple",
}[role]);

function Sparkline({ form }: { form: Player["form"] }) {
  const max = Math.max(...form.map(f => f.points));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "28px" }}>
      {form.map((f, i) => (
        <div key={i} title={`${f.match}: ${f.points} pts`} style={{
          width: "10px", borderRadius: "3px 3px 0 0",
          height: `${Math.round((f.points / max) * 100)}%`,
          background: f.points >= 80 ? "#00C853" : f.points >= 60 ? "#F5A623" : "#E8192C",
          transition: "height 0.4s ease",
        }} />
      ))}
    </div>
  );
}

export default function PlayersPage() {
  const [search, setSearch]         = useState("");
  const [selectedTeam, setTeam]     = useState("All");
  const [selectedRole, setRole]     = useState<PlayerRole | "All">("All");
  const [hotOnly, setHotOnly]       = useState(false);
  const [sortKey, setSortKey]       = useState<SortKey>("fantasyAvgPts");
  const [sortAsc, setSortAsc]       = useState(false);
  const [selected, setSelected]     = useState<Player | null>(null);

  const filtered = useMemo(() => {
    let list = players.filter(p => {
      const ok1 = p.name.toLowerCase().includes(search.toLowerCase());
      const ok2 = selectedTeam === "All" || p.team === selectedTeam;
      const ok3 = selectedRole === "All" || p.role === selectedRole;
      const ok4 = !hotOnly || p.formRating === "Hot" || p.formRating === "Good";
      return ok1 && ok2 && ok3 && ok4;
    });
    list.sort((a, b) => {
      const av = a[sortKey] as number; const bv = b[sortKey] as number;
      return sortAsc ? av - bv : bv - av;
    });
    return list;
  }, [search, selectedTeam, selectedRole, hotOnly, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.9rem", borderRadius: "999px", background: "rgba(74,144,226,0.12)", border: "1px solid rgba(74,144,226,0.3)", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#4A90E2", letterSpacing: "0.08em" }}>PLAYER DATABASE · 30 PLAYERS</span>
        </div>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#fff", fontFamily: "Bebas Neue, cursive", letterSpacing: "0.04em", marginBottom: "0.4rem" }}>
          IPL 2026 PLAYER STATS
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>All 10 IPL teams · Search, filter, sort and click any player for in-depth stats</p>
      </div>

      {/* ── Search ── */}
      <div style={{ position: "relative", maxWidth: "400px", marginBottom: "1rem" }}>
        <Search size={15} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
        <input type="text" placeholder="Search players..." value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", padding: "0.65rem 0.875rem 0.65rem 2.5rem", borderRadius: "10px", background: "var(--bg-card)", border: "1px solid var(--border)", color: "#fff", fontSize: "0.875rem", outline: "none" }} />
      </div>

      {/* ── Filter Bar ── */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        {/* Team */}
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {teams.map(t => (
            <button key={t} onClick={() => setTeam(t)} style={{ padding: "0.38rem 0.75rem", borderRadius: "7px", border: selectedTeam === t ? "1px solid var(--d11-red)" : "1px solid var(--border)", background: selectedTeam === t ? "rgba(232,25,44,0.15)" : "var(--bg-card)", color: selectedTeam === t ? "#ff4d5e" : "var(--text-secondary)", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>{t}</button>
          ))}
        </div>
        <div style={{ width: "1px", height: "28px", background: "var(--border)" }} />
        {/* Role */}
        <div style={{ display: "flex", gap: "0.35rem" }}>
          {roles.map(r => (
            <button key={r} onClick={() => setRole(r)} style={{ padding: "0.38rem 0.75rem", borderRadius: "7px", border: selectedRole === r ? "1px solid #F5A623" : "1px solid var(--border)", background: selectedRole === r ? "rgba(245,166,35,0.15)" : "var(--bg-card)", color: selectedRole === r ? "#F5A623" : "var(--text-secondary)", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>{r}</button>
          ))}
        </div>
        <div style={{ width: "1px", height: "28px", background: "var(--border)" }} />
        {/* Hot filter */}
        <button onClick={() => setHotOnly(!hotOnly)} style={{ display: "flex", alignItems: "center", gap: "0.35rem", padding: "0.38rem 0.875rem", borderRadius: "7px", border: hotOnly ? "1px solid #E8192C" : "1px solid var(--border)", background: hotOnly ? "rgba(232,25,44,0.15)" : "var(--bg-card)", color: hotOnly ? "#ff4d5e" : "var(--text-secondary)", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>
          <Flame size={13} /> In Form
        </button>
      </div>

      {/* ── Sort Bar ── */}
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>Sort by:</span>
        {sortOptions.map(o => (
          <button key={o.key} onClick={() => toggleSort(o.key)} style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.3rem 0.75rem", borderRadius: "7px", border: sortKey === o.key ? "1px solid #00C853" : "1px solid var(--border)", background: sortKey === o.key ? "rgba(0,200,83,0.12)" : "var(--bg-card)", color: sortKey === o.key ? "#00C853" : "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", transition: "all 0.15s" }}>
            {o.label} <ArrowUpDown size={11} />
          </button>
        ))}
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: "auto" }}>{filtered.length} players</span>
      </div>

      {/* ── Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1rem" }}>
        {filtered.map(player => {
          const isSelected = selected?.id === player.id;
          return (
            <div key={player.id} onClick={() => setSelected(isSelected ? null : player)} className="card"
              style={{ padding: "1.15rem", cursor: "pointer", border: isSelected ? "1px solid var(--d11-red)" : "1px solid var(--border)", background: isSelected ? "rgba(232,25,44,0.05)" : "var(--bg-card)", transition: "all 0.2s" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--bg-secondary)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                  {player.image}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{player.name}</div>
                  <div style={{ display: "flex", gap: "0.3rem", marginTop: "0.2rem", flexWrap: "wrap" }}>
                    <span className="badge badge-red" style={{ fontSize: "0.6rem" }}>{player.team}</span>
                    <span className={`badge ${roleColor(player.role)}`} style={{ fontSize: "0.6rem" }}>{player.role}</span>
                    <span style={{ padding: "1px 7px", borderRadius: "999px", fontSize: "0.6rem", fontWeight: 700, background: `${formColors[player.formRating]}18`, border: `1px solid ${formColors[player.formRating]}40`, color: formColors[player.formRating] }}>
                      {player.formRating}
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.1rem", color: "#F5A623", lineHeight: 1 }}>{player.credits}</div>
                  <div style={{ fontSize: "0.58rem", color: "var(--text-muted)", fontWeight: 600 }}>CREDITS</div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.4rem", marginBottom: "0.75rem" }}>
                {[
                  { label: "F.PTS",   value: player.fantasyAvgPts,                       color: "#00C853" },
                  { label: "PTS/CR",  value: (player.fantasyAvgPts/player.credits).toFixed(1), color: "#4A90E2" },
                  { label: "OWNED%",  value: `${player.ownershipPct}%`,                  color: "#F5A623" },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: "center", padding: "0.4rem 0.25rem", background: "var(--bg-secondary)", borderRadius: "7px" }}>
                    <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1rem", color: s.color, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.57rem", color: "var(--text-muted)", fontWeight: 700 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Sparkline */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 600, flexShrink: 0 }}>FORM</span>
                <Sparkline form={player.form} />
                <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", marginLeft: "auto" }}>{player.ownershipPct}% owned</span>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏏</div>
          <p>No players found. Try adjusting your filters.</p>
        </div>
      )}

      {/* ── Detail Panel ── */}
      {selected && <PlayerDetailPanel player={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

// ── Inline detail panel (to avoid recharts SSR issues) ──────────────────
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

function PlayerDetailPanel({ player, onClose }: { player: Player; onClose: () => void }) {
  const chartData = player.form.map(f => ({
    match: f.match.replace("vs ", ""),
    points: f.points,
  }));

  return (
    <div className="slide-up" style={{ marginTop: "2rem", background: "var(--bg-card)", border: "1px solid rgba(232,25,44,0.4)", borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#E8192C,#F5A623)" }} />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "linear-gradient(135deg, rgba(232,25,44,0.15), rgba(245,166,35,0.12))", border: "1px solid rgba(232,25,44,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>{player.image}</div>
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", marginBottom: "0.4rem" }}>{player.name}</h2>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              <span className="badge badge-red">{player.team}</span>
              <span className={`badge ${roleColor(player.role)}`}>{player.role === "BAT" ? "Batsman" : player.role === "BOWL" ? "Bowler" : player.role === "AR" ? "All-Rounder" : "Wicket-Keeper"}</span>
              <span style={{ padding: "2px 10px", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, background: `${formColors[player.formRating]}18`, border: `1px solid ${formColors[player.formRating]}40`, color: formColors[player.formRating] }}>{player.formRating}</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "8px", padding: "0.4rem 0.75rem", cursor: "pointer", color: "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 600 }}>✕ Close</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: "0.75rem", marginBottom: "1.75rem" }}>
        {[
          { l: "Matches",    v: player.matches,   c: "#A0AEC0" },
          { l: "Runs",       v: player.runs,      c: "#4A90E2" },
          { l: "Wickets",    v: player.wickets,   c: "#E8192C" },
          { l: "Bat Avg",    v: player.battingAvg,c: "#00C853" },
          { l: "Strike Rate",v: player.strikeRate,c: "#F5A623" },
          { l: "Economy",    v: player.economy || "N/A", c: "#c084fc" },
          { l: "Credits",    v: player.credits,   c: "#F5A623" },
          { l: "Ownership%", v: `${player.ownershipPct}%`, c: "#4A90E2" },
        ].map(m => (
          <div key={m.l} style={{ padding: "0.875rem", borderRadius: "10px", background: "var(--bg-secondary)", border: "1px solid var(--border)", textAlign: "center" }}>
            <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.3rem", color: m.c, lineHeight: 1, marginBottom: "0.2rem" }}>{m.v}</div>
            <div style={{ fontSize: "0.62rem", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.05em" }}>{m.l.toUpperCase()}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: "0.875rem" }}>📈 Fantasy Points — Last 5 Matches</h3>
      <div style={{ height: "200px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="ptGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E8192C" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#E8192C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
            <XAxis dataKey="match" tick={{ fill: "#475569", fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fill: "#475569", fontSize: 11 }} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "#fff", fontSize: "0.8rem" }} // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={((value: number | string | undefined) => [String(value ?? "") + " pts", "Fantasy Pts"]) as any} />
            <Area type="monotone" dataKey="points" stroke="#E8192C" strokeWidth={2.5} fill="url(#ptGrad)" dot={{ fill: "#E8192C", r: 4, strokeWidth: 0 }} activeDot={{ r: 6, fill: "#F5A623", strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "0.4rem" }}>
        {player.form.map((f, i) => (
          <div key={i} style={{ padding: "0.5rem", borderRadius: "8px", background: "var(--bg-secondary)", textAlign: "center", border: `1px solid ${f.points>=80?"rgba(0,200,83,0.25)":f.points>=60?"rgba(245,166,35,0.25)":"rgba(232,25,44,0.25)"}` }}>
            <div style={{ fontSize: "0.62rem", color: "var(--text-muted)", marginBottom: "0.15rem" }}>{f.match}</div>
            {f.score  !== undefined && <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#4A90E2" }}>{f.score}*</div>}
            {f.wickets !== undefined && f.score === undefined && <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#E8192C" }}>{f.wickets}W</div>}
            <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "0.95rem", color: f.points>=80?"#00C853":f.points>=60?"#F5A623":"#E8192C" }}>{f.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

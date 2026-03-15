"use client";

import { X } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import type { Player } from "@/data/players";

interface Props {
  player: Player;
  onClose: () => void;
}

export default function PlayerDetail({ player, onClose }: Props) {
  const chartData = player.form.map((f) => ({
    match: f.match.replace("vs ", ""),
    points: f.points,
    score: f.score ?? 0,
    wickets: f.wickets ?? 0,
  }));

  const ptsPerCredit = (player.fantasyAvgPts / player.credits).toFixed(2);

  return (
    <div
      style={{
        marginTop: "2rem",
        background: "var(--bg-card)",
        border: "1px solid rgba(34,197,94,0.3)",
        borderRadius: "16px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #22c55e, #f59e0b)",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(245,158,11,0.15))",
              border: "1px solid rgba(34,197,94,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
            {player.image}
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
              {player.name}
            </h2>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "2px 10px",
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  background: "rgba(34,197,94,0.15)",
                  color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                {player.team}
              </span>
              <span
                style={{
                  padding: "2px 10px",
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  background: "rgba(96,165,250,0.15)",
                  color: "#60a5fa",
                  border: "1px solid rgba(96,165,250,0.3)",
                }}
              >
                {player.role === "BAT" ? "Batsman" : player.role === "BOWL" ? "Bowler" : player.role === "AR" ? "All-Rounder" : "Wicket-Keeper"}
              </span>
              <span
                style={{
                  padding: "2px 10px",
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  background: "rgba(100,116,139,0.15)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {player.country}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "0.4rem",
            cursor: "pointer",
            color: "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Key Metrics Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { label: "Matches", value: player.matches, color: "#94a3b8" },
          { label: "Runs", value: player.runs, color: "#60a5fa" },
          { label: "Wickets", value: player.wickets, color: "#ef4444" },
          { label: "Batting Avg", value: player.battingAvg, color: "#22c55e" },
          { label: "Strike Rate", value: player.strikeRate, color: "#f59e0b" },
          { label: "Economy", value: player.economy || "N/A", color: "#c084fc" },
          { label: "Credits", value: player.credits, color: "#f59e0b" },
          { label: "Pts/Credit", value: ptsPerCredit, color: "#22c55e" },
        ].map((m) => (
          <div
            key={m.label}
            style={{
              padding: "1rem",
              borderRadius: "10px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: m.color,
                fontFamily: "Bebas Neue, cursive",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}
            >
              {m.value}
            </div>
            <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.05em" }}>
              {m.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* Form Tracker Chart */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
          📈 Fantasy Points — Last 5 Matches
        </h3>
        <div style={{ height: "220px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="formGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
              <XAxis dataKey="match" tick={{ fill: "#475569", fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11 }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  color: "var(--text-primary)",
                  fontSize: "0.8rem",
                }}
                formatter={(value: number) => [`${value} pts`, "Fantasy Points"]}
              />
              <Area
                type="monotone"
                dataKey="points"
                stroke="#22c55e"
                strokeWidth={2.5}
                fill="url(#formGrad)"
                dot={{ fill: "#22c55e", r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "#22c55e", strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Form table */}
        <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
          {player.form.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "0.6rem",
                borderRadius: "8px",
                background: "var(--bg-secondary)",
                textAlign: "center",
                border: `1px solid ${f.points >= 80 ? "rgba(34,197,94,0.2)" : f.points >= 60 ? "rgba(245,158,11,0.2)" : "rgba(239,68,68,0.2)"}`,
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.2rem" }}>
                {f.match}
              </div>
              {f.score !== undefined && (
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#60a5fa" }}>{f.score}*</div>
              )}
              {f.wickets !== undefined && f.score === undefined && (
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#ef4444" }}>{f.wickets}W</div>
              )}
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: f.points >= 80 ? "#22c55e" : f.points >= 60 ? "#f59e0b" : "#ef4444",
                  fontFamily: "Bebas Neue, cursive",
                }}
              >
                {f.points}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

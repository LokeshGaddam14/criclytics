import type { Player } from "@/data/players";

interface Props {
  player: Player;
  roleBadge: (role: string) => string;
  onClick: () => void;
  isSelected: boolean;
}

export default function PlayerCard({ player, roleBadge, onClick, isSelected }: Props) {
  return (
    <div
      onClick={onClick}
      className="card"
      style={{
        padding: "1.25rem",
        cursor: "pointer",
        border: isSelected ? "1px solid rgba(34,197,94,0.5)" : "1px solid var(--border)",
        background: isSelected ? "rgba(34,197,94,0.05)" : "var(--bg-card)",
        transition: "all 0.2s",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1rem" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            background: isSelected
              ? "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(245,158,11,0.2))"
              : "var(--bg-secondary)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            flexShrink: 0,
          }}
        >
          {player.image}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {player.name}
          </div>
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", marginTop: "0.25rem", flexWrap: "wrap" }}>
            <span
              style={{
                padding: "1px 7px",
                borderRadius: "999px",
                fontSize: "0.65rem",
                fontWeight: 700,
                background: "rgba(34,197,94,0.15)",
                color: "#22c55e",
                border: "1px solid rgba(34,197,94,0.3)",
                letterSpacing: "0.04em",
              }}
            >
              {player.team}
            </span>
            <span className={`badge ${roleBadge(player.role)}`}>{player.role}</span>
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: "1rem", fontWeight: 800, color: "#f59e0b", fontFamily: "Bebas Neue, cursive" }}>
            {player.credits}
          </div>
          <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 500 }}>CREDITS</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", marginBottom: "0.875rem" }}>
        {player.role !== "BOWL" && (
          <>
            <div style={{ textAlign: "center", padding: "0.5rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)" }}>{player.battingAvg}</div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 500 }}>AVG</div>
            </div>
            <div style={{ textAlign: "center", padding: "0.5rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)" }}>{player.strikeRate}</div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 500 }}>SR</div>
            </div>
          </>
        )}
        {(player.role === "BOWL" || player.role === "AR") && (
          <div style={{ textAlign: "center", padding: "0.5rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)" }}>{player.economy || "-"}</div>
            <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 500 }}>ECON</div>
          </div>
        )}
        {player.role === "BOWL" && (
          <>
            <div style={{ textAlign: "center", padding: "0.5rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)" }}>{player.wickets}</div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 500 }}>WKTS</div>
            </div>
          </>
        )}
        <div style={{ textAlign: "center", padding: "0.5rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
          <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#22c55e" }}>{player.fantasyAvgPts}</div>
          <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 500 }}>F.PTS</div>
        </div>
      </div>

      {/* Form Bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
        <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500, flexShrink: 0 }}>FORM</span>
        {player.form.map((f, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "5px",
              borderRadius: "999px",
              background: f.points >= 80 ? "#22c55e" : f.points >= 60 ? "#f59e0b" : "#ef4444",
            }}
            title={`${f.match}: ${f.points} pts`}
          />
        ))}
      </div>

      {isSelected && (
        <div
          style={{
            marginTop: "0.75rem",
            fontSize: "0.78rem",
            color: "#22c55e",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          ↓ Click again to close · Scroll down for detailed stats
        </div>
      )}
    </div>
  );
}

import React from "react";

export const AvatarCard = ({
  name = "John Doe",
  role = "Software Engineer",
  avatar = "https://avatars.githubusercontent.com/u/1?v=4",
  accent = "#6366f1",
  bg = "#0f172a",
  stats = [
    { label: "Projects", value: 12 },
    { label: "Following", value: 84 },
    { label: "Followers", value: 120 }
  ],
  onFollowClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "20px", width: "280px", fontFamily: "system-ui,sans-serif", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <img src={avatar} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%", border: "3px solid " + alpha(accent, 0.3) }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{name}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{role}</div>
        </div>
        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "16px", fontWeight: "700", color: "#fff" }}>{stat.value}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <button onClick={onFollowClick} style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>Follow</button>
      </div>
    </div>
  );
};
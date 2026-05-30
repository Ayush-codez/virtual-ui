import React, { useState } from "react";

export const Toggle = ({
  checked = false,
  onChange = () => {},
  size = "md",
  accent = "#6366f1",
  bg = "#0f172a",
  disabled = false
}) => {
  const sizes = { sm: "34px", md: "44px", lg: "54px" };
  const [isOn, setIsOn] = useState(checked);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleClick = () => {
    if (disabled) return;
    setIsOn(!isOn);
    onChange(!isOn);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        width: sizes[size],
        height: parseInt(sizes[size]) / 2 + "px",
        borderRadius: "20px",
        background: isOn ? alpha(accent, 0.2) : "rgba(255,255,255,0.08)",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.2s",
        opacity: disabled ? 0.6 : 1
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: isOn ? parseInt(sizes[size]) / 2 + "px" : "2px",
          width: parseInt(sizes[size]) / 2 - 4 + "px",
          height: parseInt(sizes[size]) / 2 - 4 + "px",
          borderRadius: "50%",
          background: isOn ? accent : "rgba(255,255,255,0.5)",
          transition: "all 0.2s",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }}
      />
    </div>
  );
};
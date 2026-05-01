import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [wrongs, setWrongs] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Counter App</h1>
        <div style={displayStyle}>
          <h2 style={countStyle}>{count}</h2>
          <p style={subtitleStyle}>Current Count</p>
        </div>

        <div style={buttonsContainerStyle}>
          <button onClick={() => setCount(c => c + 1)} style={btn("#4caf50", false)}>+</button>
          <button onClick={() => setCount(c => c - 1)} style={btn("#f44336", false)}>−</button>
          <button onClick={() => setWrongs(w => w + 1)} style={btn("#ff9800", false)}>✕</button>
        </div>

        <div style={statsStyle}>
          <div style={statItemStyle}>
            <span style={statLabelStyle}>Wrongs</span>
            <span style={statValueStyle}>{wrongs}</span>
          </div>
        </div>

        <button onClick={() => { setCount(0); setWrongs(0); }} style={btn("#2196f3", true)}>Reset</button>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: "20px"
};

const cardStyle = {
  background: "#fff",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  maxWidth: "400px",
  width: "100%"
};

const titleStyle = {
  fontSize: "28px",
  color: "#333",
  margin: "0 0 30px 0",
  fontWeight: "600"
};

const displayStyle = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  borderRadius: "15px",
  padding: "30px",
  marginBottom: "30px",
  color: "#fff",
  textAlign: "center"
};

const countStyle = {
  fontSize: "80px",
  margin: "0",
  fontWeight: "700"
};

const subtitleStyle = {
  fontSize: "14px",
  margin: "10px 0 0 0",
  opacity: "0.9"
};

const buttonsContainerStyle = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  marginBottom: "25px"
};

const statsStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "25px",
  gap: "20px"
};

const statItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px"
};

const statLabelStyle = {
  fontSize: "12px",
  color: "#999",
  textTransform: "uppercase",
  fontWeight: "600",
  letterSpacing: "1px"
};

const statValueStyle = {
  fontSize: "24px",
  color: "#333",
  fontWeight: "700"
};

const btn = (color, small) => ({
  width: small ? 100 : 55,
  height: small ? 45 : 55,
  fontSize: small ? 14 : 24,
  fontWeight: "600",
  background: color,
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  outline: "none"
});
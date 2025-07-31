export default function SmiskiBox() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <rect x="20" y="60" width="80" height="40" rx="10" fill="#ffe082" stroke="#bdb76b" strokeWidth="3" />
        {/* smiski */}
        <ellipse cx="60" cy="70" rx="15" ry="18" fill="#e0ffb3" />
        <circle cx="60" cy="55" r="12" fill="#e0ffb3" />
        {/* eye */}
        <circle cx="56" cy="53" r="2" fill="#444" />
        <circle cx="64" cy="53" r="2" fill="#444" />
        {/* smile */}
        <path d="M57 58 Q60 62 63 58" stroke="#444" strokeWidth="1.5" fill="none" />
      </svg>
      <div style={{ marginTop: 8, fontFamily: "cursive", color: "#bdb76b" }}>
        Smiski surprise!
      </div>
    </div>
  );
}
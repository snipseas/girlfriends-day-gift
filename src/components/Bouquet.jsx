export default function Bouquet() {
  return (
    <svg width="300" height="350" viewBox="0 0 300 350">
      {/* stem */}
      <rect x="140" y="120" width="10" height="120" fill="#4caf50" />
      <rect x="160" y="130" width="8" height="110" fill="#388e3c" />
      <rect x="120" y="130" width="8" height="110" fill="#388e3c" />
      {/* tulip */}
      <ellipse cx="145" cy="120" rx="25" ry="35" fill="#ffb6c1" />
      <polygon points="145,85 135,120 155,120" fill="#e75480" />
      {/* tulip */}
      <ellipse cx="170" cy="130" rx="20" ry="30" fill="#ffd700" />
      <polygon points="170,100 160,130 180,130" fill="#ffa500" />
      {/* tulip */}
      <ellipse cx="125" cy="130" rx="18" ry="28" fill="#ba68c8" />
      <polygon points="125,105 117,130 133,130" fill="#8e24aa" />
      {/* bouquet */}
      <ellipse cx="145" cy="240" rx="50" ry="30" fill="#ffe0b2" />
      <rect x="95" y="230" width="100" height="40" rx="20" fill="none" stroke="#bdb76b" strokeWidth="4" />
    </svg>
  );
}
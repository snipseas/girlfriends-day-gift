import { useState } from "react";
import "./NotebookPaper.css";

const fonts = [
  { name: "Cursive", value: "cursive" },
  { name: "Serif", value: "serif" },
  { name: "Sans Serif", value: "sans-serif" },
  { name: "Monospace", value: "monospace" },
  { name: "Dancing Script", value: "'Dancing Script', cursive" },
];

export default function NotebookPaper({ children }) {
  const [font, setFont] = useState(fonts[0].value);

  return (
    <div className="notebook-container">
      <div className="notebook-toolbar">
        <label htmlFor="font-select">Font: </label>
        <select
          id="font-select"
          value={font}
          onChange={e => setFont(e.target.value)}
        >
          {fonts.map(f => (
            <option key={f.value} value={f.value}>{f.name}</option>
          ))}
        </select>
      </div>
      <div className="notebook-paper" style={{ fontFamily: font }}>
        {children}
      </div>
    </div>
  );
}
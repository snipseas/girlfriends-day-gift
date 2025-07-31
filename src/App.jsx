import { useRef, useState } from "react";
import Bouquet from "./components/Bouquet";
import SmiskiBox from "./components/SmiskiBox";
import NotebookPaper from "./components/NotebookPaper";
import "./App.css";
import img1 from "./assets/23d90ad74b57874c774024eaea8c6722.jpg";
import img2 from "./assets/Snapchat-354212332.jpg";
import StarryBackground from "./components/StarryBackground";

function App() {
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioStarted(true);
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100vw", overflowX: "hidden" }}>
      <audio ref={audioRef} src="/audio.mp3" loop />
      {!audioStarted && (
        <button
          onClick={handlePlayAudio}
          style={{
            position: "fixed",
            top: 24,
            right: 24,
            zIndex: 10000,
            background: "#fff0fa",
            color: "#e75480",
            border: "2px solid #e75480",
            borderRadius: "32px",
            padding: "12px 22px 12px 18px",
            fontSize: "1.1rem",
            fontFamily: "cursive",
            cursor: "pointer",
            boxShadow: "0 2px 12px #e7548030",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          <span role="img" aria-label="music">🎶</span>
          Mashrou Leila - Shim El Yasmine
          <span style={{ fontSize: "1.3em", marginLeft: "2px" }}>💖</span>
        </button>
      )}
      <StarryBackground />
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #ffe0ef 0%, #fff7fa 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 0",
          width: "100vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            borderRadius: "32px",
            boxShadow: "0 8px 32px rgba(231,84,128,0.10)",
            padding: "32px 24px 24px 24px",
            maxWidth: "420px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#e75480",
              fontFamily: "cursive",
              fontSize: "2.5rem",
              marginBottom: "16px",
              textShadow: "0 2px 8px #ffe0ef",
              letterSpacing: "1px",
            }}
          >
            Happy Girlfriend’s Day!
          </h1>
          <Bouquet />
          <div style={{ marginTop: 32 }}>
            <SmiskiBox />
          </div>
          <div className="image-row">
            <img src={img1} alt="Memory 1" className="gift-img" />
            <img src={img2} alt="Memory 2" className="gift-img" />
          </div>
        </div>
        <NotebookPaper>
          my dearest lemlem,

happy girlfriend's day! i know i don’t say it enough, but you really do mean the world to me. sometimes i just sit and think about how lucky i am that you’re in my life. like fr, how did i pull this goddess of a fucking woman????!!!!

you’re the kind of person who walks into a room and makes it feel lighter. your little contagious smile and your beautiful laugh that i could genuinely play on repeat if i could. you've seen me at my absolute lows and stayed. you listened, you cared, and you put in the effort regardless of how rebelliant and pushy i can be. that genuinely means everything to me.

idk how you do it, but even the smallest things you do make me kick my feet like an idiot. you're the safest space i know and will ever know. you're so soft yet so strong at the same time. probably one of the most things that make me fall this much for you. you hype everything up even when it feels like everythign is going to genuinely crash. you have thgis calm energy that grounds me, but at the same time you're a shit ton of fun to be around. peace and chaos perfectly balanced (ngl the chaos is usually more😛). you're genuinely perfect in all the ways that matter. inside and out my love. i know life isn’t perfect, and neither are we, but having you in my corner makjes me feel like i can take on anything.

i just want you to know how appreciated you are. you're my bestfriend, my comfort person, my escape, and most importantly my favorite. if today's supposed to be about celebrating girlfriends, then i'm so proud to be celebrating you. every little thing about you you pretty little fucker.

thank you for being you. i love you so much lemlemti :)🍓
        </NotebookPaper>
        <div
          style={{
            marginTop: "32px",
            color: "#e75480",
            fontFamily: "cursive",
            fontSize: "1.2rem",
            textAlign: "center",
            textShadow: "0 1px 4px #fff7fa",
          }}
        >
          made by your beloved, youssef ❤️
        </div>
      </div>
    </div>
  );
}

export default App;
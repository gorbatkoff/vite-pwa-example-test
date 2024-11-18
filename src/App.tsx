import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

async function showBatteryLevel() {
  if (navigator.getBattery) {
    const battery = await navigator.getBattery();
    alert(`Уровень заряда: ${Math.round(battery.level * 100)}% 🔋`);
  } else {
    alert("Battery API не поддерживается этим устройством.");
  }
}
function triggerVibration() {
  if ("vibrate" in navigator) {
    navigator.vibrate(200); // Вибрация длительностью 200 миллисекунд
    console.log("Телефон вибрирует! 📳");
  } else {
    console.log("Вибрация не поддерживается на этом устройстве.");
  }
}

async function toggleFlashlight() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    const track = stream.getVideoTracks()[0];
    const capabilities = track.getCapabilities();

    if (capabilities.torch) {
      track.applyConstraints({ advanced: [{ torch: true }] });
      alert("Вспышка включена! 🔦");
    } else {
      alert("Фонарик не поддерживается.");
    }
  } else {
    alert("Нет доступа к устройству.");
  }
}

function speakText() {
  const msg = new SpeechSynthesisUtterance("Привет! Это работает!");
  window.speechSynthesis.speak(msg);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            triggerVibration();
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <button onClick={showBatteryLevel}>Battery</button>
        <button onClick={toggleFlashlight}>Фонарик</button>
        <button onClick={speakText}>Speach</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

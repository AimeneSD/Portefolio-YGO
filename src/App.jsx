import { useState } from "react";
import SmashMenu from "./view/menu"; // Ton menu Smash
import './App.css';

function App() {
  // 1. Le "Switch" : On commence sur le menu
  const [screen, setScreen] = useState("menu");

  return (
    <main className="h-screen w-full bg-black overflow-hidden relative">
      {/* 2. SI l'état est 'menu', on affiche le menu Smash */}
      {screen === "menu" && <SmashMenu onStart={() => setScreen("projects")} />}

      {/* 3. SI l'état est 'projects', on affiche l'arène de cartes */}
      {screen === "projects" && (
        <ProjectArena onBack={() => setScreen("menu")} />
      )}
    </main>
  );
}

export default App;

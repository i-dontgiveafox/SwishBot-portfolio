import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";  
import { About } from "./components/sections/About";
import { Team } from "./components/sections/Team";
import { Projects } from "./components/sections/Projects";
import NeonBG from "./assets/Neon.png";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${NeonBG})`, opacity: 0.9 }}
      >
        <div className="absolute inset-0 bg-black/70 z-[0]" /> {/* overlay */}
          <div
            className={`relative z-10 min-h-screen pt-16 transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } text-gray-100`}
          >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Team />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

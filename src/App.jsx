import { useState, useEffect } from "react";
import SplashScreen from "./components/sections/SplashScreen";
import Hero from "./components/sections/Hero";
import Couple from "./components/sections/Couple";
import Event from "./components/sections/Event";
import LoveStory from "./components/sections/LoveStory";
import Gallery from "./components/sections/Gallery";
import GiftRSVP from "./components/sections/GiftRSVP";
import Closing from "./components/sections/Closing";
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-secondary bg-accent min-h-screen">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="max-w-4xl mx-auto">
          <Hero />
          <Couple />
          <Event />
          <LoveStory />
          <Gallery />
          <GiftRSVP />
          <Closing />
        </div>
      )}
    </div>
  );
}

export default App;

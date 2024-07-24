import "./App.css";

import HeroSection from "./components/HeroSection";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";

function App() {
  return (
    <div className="bg-black">
      <HeroSection />

      <Section01 />

      <Section02 />
    </div>
  );
}

export default App;

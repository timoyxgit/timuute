
// ...existing code...
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark-mode" : ""}>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
        <Header />
        <About />
        <Skills />
        <Education />
        <Contact />
      </div>
    </>
  );
}

export default App;

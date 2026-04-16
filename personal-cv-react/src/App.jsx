import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import { useState } from "react";
import ContactList from "./Components/ContactList"; 



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "Web Development",
    "HTML",
    "SQL",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2028",
      program: "BS Information Technology",
      school: "USTP CDO Campus"
    },
    {
      year: "2024",
      program: "Computer System Servicing",
      school: "Agusan Del Sur National Highschool"
    },
    {
      year: "2021",
      program: "Crack",
      school: "Agusan Del Sur National Highschool"
    },
    {
      year: "2016",
      program: "KINGS",
      school: "Light and Life Christian Learning Center"
    },
  ];

  return (
    <>
      <div className={darkMode ? "dark-mode" : ""}>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
        <Header />
        <About />
        <Skills skills={skills} />
        <Education education={education} />

        <Contact />
        <ContactList />
        
      </div>
    </>
  );
}

export default App;
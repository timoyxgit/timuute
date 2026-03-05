import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>
      {visible && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Skills;
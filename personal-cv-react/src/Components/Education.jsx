function Education({ education }) {
    return (
      <section className="card">
        <h2>Education</h2>
        <style>{`
          table { border-collapse: collapse; }
          table, th, td { border: 3px solid black; }
        `}</style>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Program</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            {education.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.program}</td>
                <td>{item.school}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
  
  export default Education;
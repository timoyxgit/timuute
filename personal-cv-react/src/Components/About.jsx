import Card from "./Card";


function About() {
  return (
    <Card title="About Me">
      <img
        src="image/profile.jpg"
        alt="Profile photo of sirelle timothy mayon"
        width="200"
        height="200"
      />
      <p>Simple student and focused on acads and gathering skills.</p>
      <p>
        Email: <a href="https://mail.google.com/mail/u/0/#inbox.com">mayonsirelletimothy@gmail.com</a><br />
        GitHub: <a href="https://github.com/" target="_blank" rel="noreferrer">github.com</a>
      </p>
    </Card>
  );
}


export default About;
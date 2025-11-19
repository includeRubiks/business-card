import { useState } from "react";

function Homepage() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <div
      className={
        darkmode
          ? "text-center bg-dark text-light"
          : "text-center bg-light text-dark"
      }
    >
      <div className="text-start">
        <img
          src="/src/assets/darkmodetoggle.svg"
          onClick={() => setDarkmode(!darkmode)}
          width="50"
          height="50"
        />
      </div>
      <h1>Doug Mead</h1>
      <h2>Developer</h2>
      <hr />
      <h2>Programming Languages</h2>
      <br />
      <li>
        <ul>React + TS</ul>
        <ul>Python</ul>
        <ul>C/C++</ul>
      </li>
    </div>
  );
}

export default Homepage;

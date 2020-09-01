import React from "react";

function About() {
  return (
    // react fragment is if you don't want a div in the dom. Kind of like a ghost element. JSX needs something.
    <React.Fragment>
      <h1>About</h1>
      <p>This is the todo list app v1.0.0.</p>
    </React.Fragment>
  );
}

export default About;

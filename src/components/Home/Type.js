import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Conversational AI Engineer",
          "Chatbot Developer",
          "IVR Developer",
          "Virtual Agent",
          "Agent Assist Engineer",
          "Web Developer",
          "React.js Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

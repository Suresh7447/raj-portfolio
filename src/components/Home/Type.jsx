import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "< React JS Developer />",
          "< Effective Problem Solver />",
          "< Team Player />",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;

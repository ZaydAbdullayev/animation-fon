import React, { useState, useEffect } from "react";
import "./text.css"; // Projeye özgü CSS dosyasını ekleyin
import { textAnimations } from "./style";

export const TextV = () => {
  const [texton, setTexton] = useState(true);

  useEffect(() => {
    if (texton) {
      textAnimations.forEach((animation, index) => {
        const textElement = document.querySelector(
          `#ui .fly-animation:nth-child(${index + 1})`
        );
        if (textElement) {
          Object.assign(textElement.style, animation);
        }
      });
    }
  }, [texton]);

  useEffect(() => {
    setTimeout(() => {
      setTexton(false);
    }, 10000);
  }, []);

  const fakeArray = Array.from({ length: 60 });

  return (
    <div className="welcome" style={texton ? {} : { display: "none" }}>
      {/* Please typing your favorite word! */}
      <div id="ui">
        {fakeArray.map((item, index) => {
          return (
            <div className="fly-animation" key={index}>
              Welcome to my Portfolio
            </div>
          );
        })}
      </div>
    </div>
  );
};

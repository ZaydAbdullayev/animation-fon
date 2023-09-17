import React, { useState, useEffect } from "react";
import "./text.css"; // Projeye özgü CSS dosyasını ekleyin

export const TextV = () => {
  const [texton, setTexton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTexton(false);
    }, 10000);
  }, []);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 200) + 55;
    const g = Math.floor(Math.random() * 200) + 55;
    const b = Math.floor(Math.random() * 200) + 55;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  const fakeArray = Array.from({ length: 60 });

  return (
    <div className="welcome" style={texton ? {} : { display: "none" }}>
      {/* Please typing your favorite word! */}
      <div id="ui">
        {fakeArray.map((item) => {
          return (
            <div
              className="text"
              key={item}
              style={{ color: generateRandomColor() }}
            >
              Welcome to my Portfolio
            </div>
          );
        })}
      </div>
    </div>
  );
};

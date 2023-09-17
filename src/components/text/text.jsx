import React from "react";
import "./text.css"; // Projeye özgü CSS dosyasını ekleyin

export const TextV = () => {
  const fakeArray = Array.from({ length: 60 });
  return (
    <div className="App">
      {/* Please typing your favorite word! */}
      <div id="ui">
        {fakeArray.map((item) => {
          return (
            <div className="text" key={item}>
              Welcome to my Portfolio
            </div>
          );
        })}
      </div>
    </div>
  );
};

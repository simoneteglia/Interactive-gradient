import React, { useState, useEffect } from "react";

function App() {
  const [distanceX, setDistanceX] = useState(50);
  const [centerX, setCenterX] = useState(50);
  const [centerY, setCenterY] = useState(50);
  const [textFlag, setTextFlag] = useState(true);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { x, y } = e;
      let distanceX =
        (Math.abs(x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
      setDistanceX(distanceX);

      let centerX = (x / window.innerWidth) * 100;
      setCenterX(100 - centerX);

      let centerY = (y / window.innerHeight) * 100;
      setCenterY(100 - centerY);
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",

        fontSize: textFlag ? "200px" : "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundClip: textFlag ? "text" : "initial",
        WebkitBackgroundClip: textFlag ? "text" : "initial",
        color: textFlag ? "transparent" : "white",

        background: `radial-gradient(ellipse at ${centerX * 0.8}% ${
          centerY * 0.8
        }%, #e66465 ${
          distanceX * 0.2
        }%, transparent 100%), radial-gradient(farthest-corner at 40px 40px,
          #f35 0%, #43e 100%)`,
      }}
    >
      <h1 style={{ cursor: "pointer" }} onClick={() => setTextFlag(!textFlag)}>
        {textFlag ? "TEXT" : "BACKGROUND"}
      </h1>
    </div>
  );
}

export default App;

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(undefined);
  const [fontStyle, setFontStyle] = useState("normal");

  const handleClick = () => {
    // Cambiar el color de fondo y el estilo de fuente alternativamente
    setBackgroundColor(backgroundColor === "white" ? "lightblue" : "white");
    setFontStyle(fontStyle === "normal" ? "italic" : "normal");
  };

  return (
    <div>
      <p style={{ backgroundColor, fontStyle }}>
        Este es el párrafo que cambia de color y estilo de fuente.
      </p>
      <button onClick={handleClick}>Cambiar Estilo</button>
    </div>
  );
}

import React from "react";
import { Button } from "./styledButton";

function Botones({ texto, size, isOper, handlePress }) {
  return (
    <Button
      size={size}
      onClick={() => {
        handlePress(texto, isOper);
      }}
    >
      {texto}
    </Button>
  );
}

export default Botones;

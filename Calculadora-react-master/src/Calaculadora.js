import { useState } from "react";
import Display from "./components/display/index";
import Keypad from "./components/keypad/index";

function Calculadora() {
  //creo el estado principal de componente padre "calculadora"
  const [display, setDisplay] = useState("0");

  //luego le  paso como props los estados a los componentes hijos
  //en el caso puntual de keypad le paso tambien el setDisplay ya q voy a actualizar el estado con este
  return (
    <div className="calculadora">
      <Display mostrar={display} />

      <Keypad display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default Calculadora;

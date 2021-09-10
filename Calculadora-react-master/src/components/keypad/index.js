import React, { useState } from "react";
import Botones from "../botones/index";
import { Contenedor } from "./styleKeypad";
import botonesSimbolos from "../../utils/botonesSimbolos";
import { operaciones } from "../../utils/operaciones";
//import { usedisplay } from "../../hooks/usedisplay";

function Keypad({ display, setDisplay }) {
  const [operando, setOperando] = useState(0);
  const [state, setState] = useState(null);
  const [operac, setOperac] = useState(null);
  const [numero, setNumero] = useState(0);

  const handlePress = (press, oper) => {
    //const num = parseFloat(display);

    const formatNumber = () => {
      display.endsWith(".")
        ? setOperando(parseFloat(display.slice(0, -1)))
        : setOperando(parseFloat(display));

      console.log(operando, parseFloat(display));

      setNumero(0);
    };

    if (press === "C") {
      console.log(press);
      //setDisplay("");
      setDisplay("0");
      setState(null);
      setOperac(null);
    }

    if (press === ".") {
      if (display.includes(".")) return;

      setDisplay(display + ".");
      return;
    }

    if (oper === 0) {
      if (display.length === 10) return;
      if (display === "0" || display === "-0") {
        press === "0" ? setDisplay("0") : setDisplay(press);
      } else {
        if (operac !== null) {
          setDisplay(`${display}${press}`);
          setNumero(`${numero}${press}`);
        } else {
          setDisplay(`${display}${press}`);
        }
      }
    } else {
      //--------------------------------------

      if (press === "+") {
        if (operac === null) {
          setOperac(operaciones.suma);
          setDisplay(`${display}${press}`);
          formatNumber();
          //console.log(operando);
        } else {
          formatNumber();
          calcular();
          setDisplay(numero);
        }
      }

      //------------------------hasta aca ok

      if (press === "=") {
        display.endsWith(".")
          ? setNumero(parseFloat(display.slice(0, -1)))
          : setNumero(parseFloat(display));

        calcular();
      }
    }
  };

  const calcular = () => {
    switch (operac) {
      case operaciones.suma:
        setNumero(operando + numero);
        setOperac(null);
        break;
      case operaciones.resta:
        setNumero(operando - numero);
        break;
      default:
        break;
    }
  };

  return (
    <Contenedor>
      {botonesSimbolos.map(boton => (
        //paso la funcion al hijo "botones"
        <Botones
          key={boton.id}
          handlePress={handlePress}
          texto={boton.simb}
          size={boton.big}
          press={boton.press}
          isOper={boton.oper}
        />
      ))}
    </Contenedor>
  );
}
export default Keypad;

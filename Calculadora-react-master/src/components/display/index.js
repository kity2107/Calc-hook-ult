import { Contenedor } from "./styleDisplay";

function Display({ mostrar }) {
  return <Contenedor>{mostrar ? mostrar : "0"}</Contenedor>;
}
export default Display;

import styled from "styled-components";

export const Contenedor = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column; // ordena en column, sino por defecto se ordena en fila
  height: 350px;
  flex-wrap: wrap; //cuando llena una columna con los 350px pasa al lado
`;

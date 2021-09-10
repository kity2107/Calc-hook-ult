import styled from "styled-components";

export const Button = styled.button`
  height: ${props => (props.size === 1 ? "120px" : "60px")};
  width: 60px;
  border-top-width: 10px;
  border-right-width: 1em;
  border-bottom-width: thick;
  border-left-width: thin;
  color: #d0e20f;
  background-color: #8c8c8c;
`;

export const Contenedor = styled.div`
  width: 250px;
`;

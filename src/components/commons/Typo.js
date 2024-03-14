import styled from "styled-components";

const Typo = styled.div`
  display: ${(props) => props.dp || "inline"};
  font-family: ${(props) => props.ff || "Work Sans"};
  font-size: ${(props) => props.fs || "1rem"};
  font-weight: ${(props) => props.fw || "400"};
  color: ${(props) => props.c || "#000000"};
  width: ${(props) => props.w || ""};
  margin: ${(props) => props.m || ""};
  padding: ${(props) => props.p || ""};
  background-color: ${(props) => (props.bc ? props.bc : "")};
  border-radius: ${(props) => (props.br ? props.br : "")};
  text-align: ${(props) => props.ta || ""};
`;

export default Typo;

import styled, { css } from "styled-components";

interface InputProps {
  isError: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 6vh;
  width: 20vw;
  background-color:  #ffffff;
  border-radius: 5px;
  padding-left: 3%;
  border: 0;

  ${(props) => props.isError && css`
    outline: 2px solid red;
  `}
`;

export const Error = styled.span`
  color: red;
`;


export const Label = styled.label`
  margin-bottom: 4px;
  text-align: left;
`;

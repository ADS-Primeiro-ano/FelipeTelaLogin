import styled, { css } from "styled-components";

interface InputProps {
  isError: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 6vh;
  background-color: purple;
  border: 0;
  border-radius: 5px;
  padding-left: 3%;
  opacity: 0.35;

  ${(props) => props.isError && css`
    border-color: red;
  `}
`;

export const Error = styled.span`
  color: red;
`;


export const Label = styled.label`
  margin-bottom: 4px;
`;
import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const View = styled.div`
    display: flex;
    width: 55vw;
    height: 90vh;
    background-color: yellow;
    opacity: 0.85;
    border-radius: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 65vh;
    width: 40vw;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 500;
    font-family: "Roboto";
    margin-bottom: 3vh;
`;


export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Button = styled.button`
  display: flex;
  width: 12vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;
  margin-left: 1vw;
  margin-right: 1vw;
  border-radius: 5px;
  background-color: orange;
  border: 0;
`;

export const TabSignIn = styled.a`
    text-decoration: none;
`;
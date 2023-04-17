import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    align-items: center;
`;

export const LeftFild = styled.div`
    width: 50VW;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;


    background-color: #00a5f1;
    opacity: 0.85;
`;

export const Imagem = styled.img`
    width: 90%;

`;

export const RightFild = styled.div`
    width: 50VW;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 24vw;
    font-family: "roboto";
    font-weight: 300;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 500;
    font-family: "Roboto";

`;

export const Label = styled.label`
    text-align: left;
    font-size: 18px;
    font-weight: 20px;
    margin-bottom: 4px;
    border-radius: 5px;
`;

export const InputTextField = styled.input`
    width: 100%;
    height: 6vh;
    background-color: #cccccc;
    border: 0;
    border-radius: 5px;
    padding-left: 3%;
    opacity: 0.35;
`;

export const DivOptions = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const RememberMe = styled.div`
    margin-top: 5px;
    text-align: left;
    justify-content: center;
    font-size: 14px;
`;

export const Forgot = styled.a`
    display: flex;
    font-size: 14px;
    font-weight: 20px;
    color: #00a5f1;
    text-decoration: none;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    margin-top: 3vh;
    font-size: 20px;
    background-color: rebeccapurple;
    border: 0;
    color: ${props => props.theme.branco};
    border-radius: 5px;
    &:hover{
        opacity: 0.6;
    }
`;

export const DivRecovery = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

export const InscreverSe = styled.a`
    display: flex;
    font-size: 16px;
    font-weight: 20px;
    color: #00a5f1;
    margin-left: 1vw;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    margin-top: 20px;
    width: 100%;
    font-size: 22px;
    color: #00a5f1;

`;

export const OpenOption = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const Icon = styled.img`
    margin-top: 3vh;
    display: flex;
    width: 3vw;
    margin-bottom: 2vh;
    margin-left: 3vh;
    margin-right: 3vh;
`;
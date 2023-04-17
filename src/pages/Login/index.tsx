import React from 'react';
import logo from '../../assets/login-svgrepo-com.svg';
import appleIcon from '../../assets/apple.png';
import facebookIcon from '../../assets/facebook.png';
import googleIcon from '../../assets/google.png';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from '../../components/Input';

import { 
    Button, 
    Container, 
    DivOptions, 
    DivRecovery,
    Forgot, Form, 
    Icon, 
    Imagem, 
    InputTextField, 
    InscreverSe, 
    Label, 
    LeftFild,
    OpenOption, 
    Options, 
    RememberMe, 
    RightFild, 
    Title 
} from './styleds';

type LoginForm = {
    username: string;
    password: string;
}

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

export const Login = () => {
    const { register, handleSubmit, formState } = useForm<LoginForm>({
        resolver: yupResolver(schema)
      });

    const errors = formState.errors;

    const handleSignIn = (data: LoginForm) => {
        console.log(data);
      }

    return (
        <Container>
            <LeftFild>
                <Imagem src={logo}></Imagem>
            </LeftFild>
            <RightFild>
                <Form onSubmit={handleSubmit(handleSignIn)}>
                    <Title>LOGIN</Title>
                    <Input
                        label='Username'
                        placeholder='@Mail.com'
                        error={errors.username}
                        {...register('username')}
                    />
                    <Input 
                        label='Password'
                        type="password"
                        placeholder='Password'
                        error={errors.password}
                        {...register('password')}
                    />
                    <DivOptions>
                        <RememberMe>
                            <input id='rememberme' type="checkbox"></input>
                            <Label htmlFor='rememberme' >Remember me</Label>
                        </RememberMe>
                        <Forgot href="https://dontpad.com/06cff003d70bce99cae9fc0896e19c1f/">Esqueceu a Senha?</Forgot>
                    </DivOptions>

                    <Button type="submit">Entrar</Button>
                    <DivRecovery>
                        <Label> Nao Tem Uma Conta?</Label>
                        <InscreverSe href="http://localhost:3000/register">Inscrever-se</InscreverSe>
                    </DivRecovery>
                    <Options>
                        Logar Com
                    </Options>
                    <OpenOption>
                        <a href="https://facebook.com">
                            <Icon src={facebookIcon}></Icon>

                        </a>
                        <a href="https://google.com">
                            <Icon src={googleIcon}></Icon>
                        </a>
                        <a href="https://apple.com">
                            <Icon src={appleIcon}></Icon>
                        </a>
                    </OpenOption>
                </Form>
            </RightFild>
        </Container>
    );
}
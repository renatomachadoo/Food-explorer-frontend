import { useNavigate } from "react-router-dom"

import { Container, Form } from "./styles"
import Logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp(){
    const navigate = useNavigate()

    return (
        <Container>
            <main>
                <div className="title">
                    <img src={Logo} alt="Logo" />
                    <h1>food explorer</h1>
                </div>
                <Form>
                    <h2>Crie sua conta</h2>
                    <Input label="Seu nome" id="username" placeholder="Exemplo: Maria da Silva"/>
                    <Input label="Email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                    <Input label="Senha" id="password" placeholder="No mínimo 6 caracteres" type="password"/>
                    <Button text="Criar conta" />
                    <ButtonText text="Já tenho uma conta" onClick={() => navigate("/")}/>
                </Form>
            </main>
        </Container>
    )
}
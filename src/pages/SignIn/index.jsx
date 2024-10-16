import { Container, Form } from "./styles"
import Logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn(){
    return (
        <Container>
            <main>
                <div className="title">
                    <img src={Logo} alt="Logo" />
                    <h1>food explorer</h1>
                </div>
                <Form>
                    <h2>Faça login</h2>
                    <Input label="Email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                    <Input label="Senha" id="password" placeholder="No mínimo 6 caracteres" type="password"/>
                    <Button text="Entrar" />
                    <ButtonText text="Criar uma conta" />
                </Form>
            </main>
        </Container>
    )
}
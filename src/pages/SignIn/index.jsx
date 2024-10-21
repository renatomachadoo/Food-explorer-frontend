import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Container, Form } from "./styles"
import Logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn(){
    const navigate = useNavigate()
    const { signIn } = useAuth()

    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    async function handleSignIn(){
        if(!email || !password){
            return alert("Todos os campos devem estar preenchidos.")
        }

        await signIn({ email, password})
    }

    return (
        <Container>
            <main>
                <div className="title">
                    <img src={Logo} alt="Logo" />
                    <h1>food explorer</h1>
                </div>
                <Form>
                    <h2>Faça login</h2>
                    <Input label="Email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input label="Senha" id="password" placeholder="No mínimo 6 caracteres" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button text="Entrar" type="button" onClick={handleSignIn} />
                    <ButtonText text="Criar uma conta" onClick={() => navigate("/register")}/>
                </Form>
            </main>
        </Container>
    )
}
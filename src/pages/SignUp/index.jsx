import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { Container, Form } from "./styles"
import Logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { api } from "../../services/api"

export function SignUp(){
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignUp(){
        if(!username || !email || !password){
            return alert("Todos os campos devem estar preenchidos.")
        }

        try {
            const response = await api.post("/users", {
                username,
                email,
                password
            })
            alert(response.data)
            navigate("/")
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            }
            return alert("Não foi possivel criar conta.")
        }
    }

    return (
        <Container>
            <main>
                <div className="title">
                    <img src={Logo} alt="Logo" />
                    <h1>food explorer</h1>
                </div>
                <Form>
                    <h2>Crie sua conta</h2>
                    <Input label="Seu nome" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Exemplo: Maria da Silva"/>
                    <Input label="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Exemplo: exemplo@exemplo.com.br"/>
                    <Input label="Senha" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="No mínimo 6 caracteres" type="password"/>
                    <Button text="Criar conta" type="button" onClick={handleSignUp} />
                    <ButtonText text="Já tenho uma conta" onClick={() => navigate("/")}/>
                </Form>
            </main>
        </Container>
    )
}
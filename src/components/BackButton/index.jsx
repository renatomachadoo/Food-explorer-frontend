import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

import { ButtonText } from "../ButtonText"

import { IoIosArrowBack } from "react-icons/io"

export function BackButton({...rest}){
    const navigate = useNavigate()
    return <Container {...rest}>
        <ButtonText className="back" icon={IoIosArrowBack} text="voltar" onClick={() => navigate(-1)} />
    </Container>
}
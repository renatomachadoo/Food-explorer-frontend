import { Container } from "./styles"

import { ButtonText } from "../ButtonText"

import { IoIosArrowBack } from "react-icons/io"

export function BackButton({...rest}){
    return <Container {...rest}>
        <ButtonText className="back" icon={IoIosArrowBack} text="voltar" />
    </Container>
}
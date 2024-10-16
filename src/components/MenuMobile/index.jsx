import { Container } from "./styles";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText"

import { CiSearch } from "react-icons/ci";

export function MenuMobile({ menuMobileOpened}){
    return(
        <Container menumobileopened={menuMobileOpened.toString()}>
            <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes"/>
            <ButtonText text="Sair" />
        </Container>
    )
}
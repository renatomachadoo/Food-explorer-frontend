import { Container } from "./styles";

import { Input } from "../Input";

export function Header(){
    return(
        <Container>
            <h2>food explorer</h2>
            <Input placeholder="Pesquisa"/>
        </Container>
    )
}
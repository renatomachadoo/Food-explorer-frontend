import { Container } from "./styles";

export function ButtonText({ text, ...rest }){
    return(
        <Container>
            <button {...rest}>
                {text}
            </button>
        </Container>
    )
}
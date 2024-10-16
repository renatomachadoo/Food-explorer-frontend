import { Container } from "./styles";

export function ButtonText({ text, icon : Icon, size = 32, ...rest }){
    return(
        <Container>
            <button {...rest}>
                {
                    Icon && <Icon size={size} />
                }
                {text}
            </button>
        </Container>
    )
}
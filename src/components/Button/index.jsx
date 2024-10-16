import { Container } from "./styles";

export function Button({icon : Icon, text, disabled = false, ...rest}){
    return (
        <Container disabled={disabled.toString()} {...rest}>
            {
                Icon && <Icon size={32} />
            }
            {text}
        </Container>
    )
}
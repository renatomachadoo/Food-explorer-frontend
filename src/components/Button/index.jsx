import { Container } from "./styles";

export function Button({icon : Icon, text, secondary = false, disabled = false, ...rest}){
    return (
        <Container secondary={secondary.toString()} disabled={disabled.toString() === "true" ? true : false} {...rest}>
            {
                Icon && <Icon size={32} />
            }
            {text}
        </Container>
    )
}
import { Container } from "./styles";

export function TextArea({icon : Icon, label, id, placeholder, icon, containerClass, type = "text", ...rest}){
    return(
        <Container className={containerClass} Icon={Icon}>
            {label && <label htmlFor={id}>{label}</label>}
            <div>
                {
                    Icon && <Icon />
                }
                <textarea id={id} placeholder={placeholder} {...rest}></textarea>
            </div>
        </Container>
    )
}
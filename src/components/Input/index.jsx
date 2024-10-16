import { Container } from "./styles";

export function Input({icon : Icon, label, id, placeholder, icon, containerClass, type = "text", ...rest}){
    return(
        <Container className={containerClass} Icon={Icon}>
            {label && <label htmlFor={id}>{label}</label>}
            <div>
                {
                    Icon && <Icon />
                }
                <input id={id} type={type} placeholder={placeholder} {...rest}/>
            </div>
        </Container>
    )
}
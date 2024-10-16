import { Container } from "./styles";

export function Input({icon : Icon, label, id, placeholder, icon, containerClass, ...rest}){
    return(
        <Container className={containerClass} Icon={Icon}>
            {label && <label htmlFor={id}>{label}</label>}
            <div>
                {
                    Icon && <Icon />
                }
                <input id={id} type="text" placeholder={placeholder} {...rest}/>
            </div>
        </Container>
    )
}
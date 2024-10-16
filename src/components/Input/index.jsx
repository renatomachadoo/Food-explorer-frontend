import { Container } from "./styles";

export function Input({icon : Icon, label, id, placeholder, icon, ...rest}){
    return(
        <Container className="input" Icon={Icon}>
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
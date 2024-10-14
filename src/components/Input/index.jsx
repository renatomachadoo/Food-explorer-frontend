import { Container } from "./styles";

export function Input({ label, id, placeholder, icon, ...rest}){
    return(
        <Container>
            {label && <label htmlFor={id}>{label}</label>}
            <div>
                <input id={id} type="text" placeholder={placeholder} {...rest}/>
            </div>
        </Container>
    )
}
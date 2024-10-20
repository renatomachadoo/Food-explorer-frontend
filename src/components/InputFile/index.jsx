import { Container } from "./styles";

export function InputFile({icon : Icon, label, id, placeholder, icon, containerClass, description, ...rest}){
    return(
        <Container className={containerClass} Icon={Icon}>
            {description && <p>{description}</p>}
            <div>
                {label && <label htmlFor={id}>
                    {
                        Icon && <Icon size={24} />
                    }
                    {label}
                </label>}
                <input id={id} type="file" placeholder={placeholder} {...rest}/>
            </div>
        </Container>
    )
}
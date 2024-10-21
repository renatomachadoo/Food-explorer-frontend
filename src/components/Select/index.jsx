import { Container } from "./styles";
import { IoIosArrowDown } from "react-icons/io";

export function Select({label, id, placeholder, containerClass, options, ...rest}){
    return(
        <Container className={containerClass}>
            {label && <label htmlFor={id}>{label}</label>}
            <div>
                <select id={id} placeholder={placeholder} {...rest}>
                    <option value="">Refeição</option>
                    {
                        options.map(( option, index ) => {
                            return <option key={index} value={option.name}>{option.name}</option>
                        })
                    }
                </select>
                <IoIosArrowDown size={24} />
            </div>
        </Container>
    )
}
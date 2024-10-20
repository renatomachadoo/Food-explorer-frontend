import { Container } from "./styles";
import { IoIosArrowDown } from "react-icons/io";

export function Select({label, id, placeholder, containerClass, type = "text", ...rest}){
    return(
        <Container className={containerClass}>
            {label && <label htmlFor={id}>{label}</label>}
            <div>
                <select id={id} placeholder={placeholder} {...rest}>
                    <option value="">Refeição</option>
                    <option value="asd2">asd2</option>
                    <option value="asd3">asd3</option>
                    <option value="asd4">asd4</option>
                    
                </select>
                <IoIosArrowDown size={24} />
            </div>
        </Container>
    )
}
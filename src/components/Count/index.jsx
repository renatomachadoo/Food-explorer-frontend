import { Container } from "./styles";

import { ButtonText } from "../ButtonText";

import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Count({ onPlusClick, onMinusClick, count = 1}){
 return(
  <Container>
    <ButtonText onClick={onMinusClick} icon={FiMinus} />
      {
        count
      }
    <ButtonText onClick={onPlusClick} icon={FiPlus} />
  </Container>
 )
}
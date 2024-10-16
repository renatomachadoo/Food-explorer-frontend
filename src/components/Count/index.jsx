import { Container } from "./styles";

import { ButtonText } from "../ButtonText";

import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Count(){
 return(
  <Container>
    <ButtonText icon={FiMinus} />
    0
    <ButtonText icon={FiPlus} />
  </Container>
 )
}
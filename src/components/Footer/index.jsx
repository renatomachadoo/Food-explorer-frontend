import { Container } from "./styles";

import { Logo } from "../Logo";
import theme from "../../styles/theme";

export function Footer(){
    return(
        <Container>
            <div>
                <div>
                    <Logo color={theme.COLORS.LIGHT_700} />
                    <span>
                        food explorer
                    </span>
                </div>
                <small>© 2023 - Todos os direitos reservados.</small>
            </div>
        </Container>
    )
}
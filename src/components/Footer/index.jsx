import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { Logo } from "../Logo";
import theme from "../../styles/theme";

export function Footer(){
    const navigate = useNavigate()
    return(
        <Container>
            <div>
                <div id="logo" onClick={() => navigate("/")}>
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
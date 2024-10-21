import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText"

import { CiSearch } from "react-icons/ci";

export function MenuMobile({ menuMobileOpened, search, setSearch }){
    const { signOut } = useAuth()

    function handleSignOut(){
        const confirm = window.confirm("Deseja terminar sessão?")

        if(confirm){
            signOut()
        }
    }

    return(
        <Container menumobileopened={menuMobileOpened.toString()}>
            <Input icon={CiSearch} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busque por pratos ou ingredientes"/>
            <ButtonText text="Sair" onClick={handleSignOut} />
        </Container>
    )
}
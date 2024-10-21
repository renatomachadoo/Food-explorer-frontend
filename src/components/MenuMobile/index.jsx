import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText"

import { CiSearch } from "react-icons/ci";

export function MenuMobile({ menuMobileOpened, search, setSearch }){
    const { user, signOut } = useAuth()
    const navigate = useNavigate()


    function handleSignOut(){
        const confirm = window.confirm("Deseja terminar sessão?")

        if(confirm){
            signOut()
        }
    }

    return(
        <Container menumobileopened={menuMobileOpened.toString()}>
            <Input icon={CiSearch} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busque por pratos ou ingredientes"/>
            {user?.role === "admin" && <ButtonText text="Novo prato" onClick={() => navigate("/new")} />}
            <ButtonText text="Sair" onClick={handleSignOut} />
        </Container>
    )
}
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

import { Input } from "../Input";
import { Logo } from "../Logo";
import { Button } from "../Button"
import { MenuMobile } from "../MenuMobile";

import { CiSearch } from "react-icons/ci";
import { PiReceipt } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export function Header({ search, setSearch }){
    const navigate = useNavigate()
    const { user, signOut } = useAuth()

    const [menuMobileOpened, setMenuMobileOpened] = useState(false)

    function handleSignOut(){
        const confirm = window.confirm("Deseja terminar sessão?")

        if(confirm){
            signOut()
        }
    }

    return(
        <Container>
            <div>
                {
                    !menuMobileOpened ? (
                        <>
                            <RxHamburgerMenu onClick={() => setMenuMobileOpened(true)} className="menu-mobile" size={32} /> 
                            <div onClick={() => navigate("/")} className="logo">
                                <div className="logo-upper">
                                    <Logo />
                                    <h2>food explorer</h2>
                                </div>
                                {
                                    user?.role === "admin" && <p>admin</p>
                                }
                            </div>
                            <Input containerClass="input" value={search} onChange={(e) => setSearch(e.target.value)} icon={CiSearch} placeholder="Busque por pratos ou ingredientes"/>
                            {
                                user?.role === "admin" ?
                                    <Button text="Novo prato" onClick={() => navigate("/new")} />
                                :
                                    <Button icon={PiReceipt} text="Pedidos (0)" />
                            }
                            
                            {
                                user?.role !== "admin" && (
                                    <div id="cart-mobile">
                                        <PiReceipt size={32}/>
                                        <span>
                                            0
                                        </span>
                                    </div>
                                )
                            }
                            
                            <FiLogOut id="logout" onClick={handleSignOut} size={32} /> 
                        </>
                        
                    ) : (
                        <>
                            <IoCloseOutline onClick={() => setMenuMobileOpened(false)} className="menu-mobile" size={32}/>
                            <span id="menu-mobile-text">
                                Menu
                            </span>
                        </>
                    )
                }
                <MenuMobile search={search} setSearch={setSearch} menuMobileOpened={menuMobileOpened} setMenuMobileOpened={setMenuMobileOpened}/>
            </div>
        </Container>
    )
}
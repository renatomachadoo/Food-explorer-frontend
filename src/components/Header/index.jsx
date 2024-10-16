import { useState } from "react";

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

export function Header(){
    const [menuMobileOpened, setMenuMobileOpened] = useState(false)

    return(
        <Container>
            {
                !menuMobileOpened ? (
                    <>
                        <RxHamburgerMenu onClick={() => setMenuMobileOpened(true)} className="menu-mobile" size={32} /> 
                        <div className="logo">
                            <Logo />
                            <h2>food explorer</h2>
                        </div>
                        <Input containerClass="input" icon={CiSearch} placeholder="Busque por pratos ou ingredientes"/>
                        <Button icon={PiReceipt} text="Pedidos (0)" />
                        <div id="cart-mobile">
                            <PiReceipt size={32}/>
                            <span>
                                0
                            </span>
                        </div>
                        <FiLogOut id="logout" size={32} /> 
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
            <MenuMobile menuMobileOpened={menuMobileOpened} setMenuMobileOpened={setMenuMobileOpened}/>
        </Container>
    )
}
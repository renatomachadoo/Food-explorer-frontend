import { Container } from "./styles";

import { Input } from "../Input";
import { Logo } from "../Logo";
import { Button } from "../Button"

import { CiSearch } from "react-icons/ci";
import { PiReceipt } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export function Header(){
    return(
        <Container>
            <RxHamburgerMenu id="menu-mobile" size={32} /> 
            <div className="logo">
                <Logo />
                <h2>food explorer</h2>
            </div>
            <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes"/>
            <Button icon={PiReceipt} text="Pedidos (0)"/>
            <div id="cart-mobile">
                <PiReceipt size={32}/>
                <span>
                    0
                </span>
            </div>
            <FiLogOut id="logout" size={32} /> 
        </Container>
    )
}
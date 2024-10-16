import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import biscuitsImg from "../../assets/biscuits.svg" 

export function Home(){
    return (
        <Container>
            <Header />
            <main>
                <div className="main">
                    <div className="slogan">
                        <div>
                            <img src={biscuitsImg} alt="Biscuits Image" />
                        </div>
                        <div>
                            <p>Sabores inigualáveis</p>
                            <small>Sinta o cuidado do preparo com ingredientes selecionados</small>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}
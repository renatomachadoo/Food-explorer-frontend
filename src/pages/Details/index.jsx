import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredients } from "../../components/Ingredients";
import { Count } from "../../components/Count";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import salad from "../../assets/salad.svg"

export function Details(){
    return (
        <Container>
            <Header />
            <main>
                <BackButton />
                <div className="content">
                    <div className="image">
                        <img src={salad} alt="Dish Image" />
                    </div>
                    <div className="data">
                        <h1>Salada Ravanello</h1>
                        <p>
                            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
                        </p>
                        <div className="ingredients">
                            <Ingredients ingredient="alface" />
                            <Ingredients ingredient="cebola" />
                            <Ingredients ingredient="pão naan" />
                            <Ingredients ingredient="pepino" />
                            <Ingredients ingredient="rabanete" />
                            <Ingredients ingredient="tomate" />
                        </div>
                        <div className="buttons">
                            <Count />
                            <Button text="incluir ∙ R$ 25,00" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}
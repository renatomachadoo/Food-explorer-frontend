import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { InputFile } from "../../components/InputFile";
import { Select } from "../../components/Select";
import { Ingredients } from "../../components/Ingredients";

import { FiUpload } from "react-icons/fi";

export function NewDish(){
    return (
        <Container>
            <Header />
            <main>
                <BackButton />
                <div className="add-dish">
                    <h1>Adicionar prato</h1>
                    <div className="input-section">
                        <InputFile icon={FiUpload} description="Imagem do prato" containerClass="small-input" label="Imagem do prato" id="image"/>
                        <Input label="Nome" id="name" placeholder="Ex.: Salada Ceasar" />
                        <Select containerClass="medium-input" label="Categoria" id="category" placeholder="Refeição" />
                    </div>

                    <div className="input-section">
                        <Ingredients description="Ingredientes" ingredients={["asd", "asd"]} />
                        <Input containerClass="small-input" label="Preço" id="price" placeholder="R$ 00,00" />
                    </div>

                    <div className="input-section">
                        <TextArea label="Descrição" id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                    </div>

                    <div className="buttons-section">
                        <Button text="Salvar alterações"/>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}
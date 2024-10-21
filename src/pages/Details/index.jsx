
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { Count } from "../../components/Count";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

import dishImage from "../../assets/dish.jpg"

import { api } from "../../services/api";

export function Details(){
    const { dish_id } = useParams()
    const [dish, setDish] = useState({})
    const [itemCount, setItemCount] = useState(1)

    async function getDish(){
        const response = await api.get(`/dishes/${dish_id}`)
        setDish(response.data)
    }

    useEffect(() => {
        async function getData(){
            await getDish()
        }

        getData()
    })

    function handleAddItemToCart(){
        alert("Prato adicionado ao carrinho.")
        setItemCount(1)
    }

    return (
        <Container>
            <Header />
            <main>
                <BackButton />
                <div className="content">
                    <div className="image">
                        <img src={dish?.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishImage} alt={dish?.name} />
                    </div>
                    <div className="data">
                        <h1>{dish?.name}</h1>
                        <p>
                            {dish?.description}
                        </p>
                        <div className="ingredients">
                            {
                                dish?.ingredients?.map(( ingredient, index) => {
                                    return <Ingredient key={index} ingredient={ingredient.name} />
                                })
                            }
                        </div>
                        <div className="buttons">
                            <Count onMinusClick={() => itemCount > 1 ? setItemCount(prevState => prevState - 1) : null} onPlusClick={() => setItemCount(prevState => prevState + 1)} count={itemCount}/>
                            <Button onClick={handleAddItemToCart} text={`incluir ∙ R$ ${dish?.price}`} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}
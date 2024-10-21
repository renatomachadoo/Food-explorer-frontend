import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";

import biscuitsImg from "../../assets/biscuits.svg" 

export function Home(){
    const [search, setSearch] = useState("")
    const [dishesByCategory, setDishesByCategory] = useState([])

    async function getDishes(){
        const response = await api.get(`/dishes_category?search=${search}`)
        setDishesByCategory(response.data)
    }

    useEffect(() => {
        async function getData(){
            await getDishes()
        }
        getData()
    }, [search])

    return (
        <Container>
            <Header search={search} setSearch={setSearch} />
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
                    {
                        dishesByCategory.map(( dishCategory, index ) => {
                            return <Slider key={index} category={dishCategory.category} dishes={dishCategory.dishes} getDishes={getDishes} />
                        })
                    }
                </div>
            </main>
            <Footer />
        </Container>
    )
}
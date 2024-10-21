import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import { api } from "../../services/api";

export function NewDish(){
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [imageFile, setImageFile] = useState(null)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [description, setDescription] = useState("")

    function handleAddNewIngredient(){
        if(!newIngredient){
            return alert("Não pode adicionar um ingrediente vazio.")
        }

        setIngredients([...ingredients, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientToRemove){
        const ingredientsNew = ingredients.filter( ingredient => ingredient !== ingredientToRemove)
        setIngredients(ingredientsNew)
    }

    async function getCategories(){
        const response = await api.get("/categories")
        setCategories(response.data)
    }

    async function createDish(){
        try {
            const response = await api.post("/dishes", {
                name,
                description,
                price,
                category,
                ingredients 
            })
     
            const { dish_id } = response.data

            const fileUploadForm = new FormData()
            fileUploadForm.append("image", imageFile)
            await api.patch(`/dishes/image/${dish_id}`, fileUploadForm)
            
            alert("Prato criado com sucesso")
            return navigate("/")
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            }
            alert("Não foi possivel criar o prato.")
        }
    }

    useEffect(() => {
        async function getData(){
            await getCategories()
        }
        getData()
    }, [])

    return (
        <Container>
            <Header />
            <main>
                <BackButton />
                <div className="add-dish">
                    <h1>Adicionar prato</h1>
                    <div className="input-section">
                        <InputFile icon={FiUpload} onChange={(e) => setImageFile(e.target.files[0])} description="Imagem do prato" containerClass="small-input" label="Imagem do prato" id="image"/>
                        <Input label="Nome" id="name" placeholder="Ex.: Salada Ceasar" value={name} onChange={(e) => setName(e.target.value)} />
                        <Select containerClass="medium-input" label="Categoria" id="category" placeholder="Refeição" options={categories} value={category} onChange={(e) => setCategory(e.target.value)}/>
                    </div>

                    <div className="input-section">
                        <Ingredients description="Ingredientes" ingredients={ingredients} newIngredient={newIngredient} setNewIngredient={setNewIngredient} handleAddNewIngredient={handleAddNewIngredient} handleRemoveIngredient={handleRemoveIngredient} />
                        <Input containerClass="small-input" label="Preço" id="price" placeholder="R$ 00,00" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="input-section">
                        <TextArea label="Descrição" id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                    <div className="buttons-section">
                        <Button onClick={createDish} disabled={!imageFile || !name || !category || !description || !price || ingredients.length == 0 || !description ? true : false} text="Salvar alterações"/>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}
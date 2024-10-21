import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

export function EditDish(){
    const navigate = useNavigate()
    const { dish_id } = useParams()

    const [categories, setCategories] = useState([])
    const [imageFile, setImageFile] = useState(null)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [description, setDescription] = useState("")

    async function getDish(){
        try {
            const response = await api.get(`/dishes/${dish_id}`)
            const { name, description, price, category, ingredients} = response.data
            setName(name)
            setDescription(description)
            setPrice(price)
            setCategory(category)
            const ingredientsArray = ingredients.map(( ingredient) => ingredient.name)
            setIngredients(ingredientsArray)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    async function deleteDish(){
        const confirm = window.confirm("Deseja excluir este prato?")
        if(confirm){
            await api.delete(`/dishes/${dish_id}`)
            return navigate("/")
        }
    }

    async function editDish(){
        try {
            await api.put("/dishes", {
                name,
                description,
                price,
                category,
                ingredients,
                dishId : dish_id
            })

            if(imageFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("image", imageFile)
                await api.patch(`/dishes/image/${dish_id}`, fileUploadForm)
            }
            
            alert("Prato atualizado com sucesso")
            return navigate("/")
        } catch (error) {
            if(error.response){
                return alert(error.response.data.message)
            }
            alert("Não foi possivel atualizar o prato.")
        }
    }

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

    useEffect(() => {
        async function getData(){
            await getCategories()
            await getDish()
        }
        getData()
    }, [])

    return (
        <Container>
            <Header />
            <main>
                <BackButton />
                <div className="add-dish">
                    <h1>Editar prato</h1>
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
                        <Button onClick={deleteDish} text="Excluir prato" secondary/>
                        <Button onClick={editDish} disabled={!name || !category || !description || !price || ingredients.length == 0 || !description ? true : false} text="Salvar alterações"/>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}
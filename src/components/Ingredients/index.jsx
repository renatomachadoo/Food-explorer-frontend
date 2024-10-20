import { useState } from "react";
import { Container, NewIngredient, Ingredient } from "./styles";

import { BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export function Ingredients({description, containerClass}){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

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

    return(
        <Container className={containerClass} >
            {description && <p>{description}</p>}
            <div className="ingredients-wrapper">
                {
                    ingredients.map(( ingredient, index) => (
                        <Ingredient key={index}>
                            {ingredient}
                            <IoCloseOutline onClick={() => handleRemoveIngredient(ingredient)} />
                        </Ingredient>
                    ))
                }
                <NewIngredient>
                    <input type="text" placeholder="Adicionar" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} />
                    <BiPlus onClick={handleAddNewIngredient} />
                </NewIngredient>
            </div>
        </Container>
    )
}
import { useState } from "react";
import { Container, NewIngredient, Ingredient } from "./styles";

import { BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export function Ingredients({description, containerClass, ingredients, newIngredient, setNewIngredient, handleAddNewIngredient, handleRemoveIngredient}){
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
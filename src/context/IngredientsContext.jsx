import { createContext, useContext, useState } from "react";
import IngredientsData from "../ingredients.json";

const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
    const ingredients = IngredientsData.ingredients;
    const [results, setResults] = useState([]);

    const searchIngredients = (query) => {
        const queryIngredients = query
            .toLowerCase()
            .split(",")
            .map(q => q.trim());

        const matchedIngredients = ingredients.filter(ingredient => queryIngredients.some(q => ingredient.toLocaleLowerCase().includes(q)))
        setResults(matchedIngredients);
    };

    return (
        <IngredientsContext.Provider value={{ searchIngredients, results }}>
            {children}
        </IngredientsContext.Provider>
    )
};

export const useIngredients = () => {
    return useContext(IngredientsContext)
};
import { createContext, useContext } from "react";
import IngredientsData from "../ingredients.json";

const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
    const ingredients = IngredientsData;

    const searchIngredients = (query) => {
        console.log(query)
    };

    return (
        <IngredientsContext.Provider value={{ searchIngredients }}>
            {children}
        </IngredientsContext.Provider>
    )
};

export const useIngredients = () => {
    return useContext(IngredientsContext)
};
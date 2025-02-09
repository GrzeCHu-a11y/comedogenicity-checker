
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./SearchOutputSection.module.css";
import { useIngredients } from "../../context/IngredientsContext";

const SearchOutputSection = () => {
    const { results } = useIngredients();
    return (
        <>
            <section>
                <SectionHeader title="Wyniki wyszukiwania" />
                <div className={styles.wrapper}>
                    {results.length > 0 ? (
                        results.map((ingredient, index) => (
                            <p key={index}>{ingredient}</p>
                        ))
                    ) : (
                        <p>Brak wyników</p>
                    )}
                </div>
            </section >
        </>
    );
};

export default SearchOutputSection;

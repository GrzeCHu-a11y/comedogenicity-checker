import SectionHeader from "../sectionHeader/SectionHeader"
import IngredientsData from "../../ingredients.json";
import styles from "./IngredientsListSection.module.css";

const IngredientsListSection = () => {
    const ingredients = IngredientsData.ingredients

    const splitIntoFour = (array) => {
        const quarter = Math.ceil(array.length / 4);

        const part1 = array.slice(0, quarter);
        const part2 = array.slice(quarter, quarter * 2);
        const part3 = array.slice(quarter * 2, quarter * 3);
        const part4 = array.slice(quarter * 3);

        return [part1, part2, part3, part4];
    };

    const columns = splitIntoFour(ingredients)

    return (
        <>
            <section>
                <SectionHeader title={"Lista składników"} />
                <div className={styles.wrapper}>
                    {columns.map((column, index) => (
                        <ul key={index} className={styles.column}>
                            {column.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </section>
        </>
    )
}

export default IngredientsListSection
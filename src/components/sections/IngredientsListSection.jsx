import SectionHeader from "../sectionHeader/SectionHeader"
import IngredientsData from "../../ingredients.json";
import styles from "./IngredientsListSection.module.css";
import { useState } from "react";

const IngredientsListSection = () => {
    const ingredients = IngredientsData.ingredients
    const [activeSection, setActiveSection] = useState(null);

    const sortedIngredients = ingredients.sort();

    const sections = [
        { label: "A-D", key: "AD", list: sortedIngredients.filter(i => /^[A-D]/i.test(i)) },
        { label: "E-O", key: "EO", list: sortedIngredients.filter(i => /^[E-O]/i.test(i)) },
        { label: "P-Z", key: "PZ", list: sortedIngredients.filter(i => /^[P-Z]/i.test(i)) }
    ];

    console.log(sections)

    function handleclick(key) {
        if (activeSection === key) {
            setActiveSection(null)
        } else {
            setActiveSection(key)
        }

    }

    return (
        <>
            <section>
                <SectionHeader title={"Lista składników"} />

                <div className={styles.wrapper}>
                    {
                        sections.map(({ label, key, list }) => (
                            <div className={styles.itemsContainer} key={key} onClick={() => handleclick(key)}>
                                <div className={styles.positioner}>
                                    <h4>Lista składnikow zapychących pory {label}</h4>
                                    <span>{activeSection === key ? "-" : "+"}</span>
                                </div>
                                <div className={`${activeSection === key ? styles.visible : styles.disabled}`}>
                                    {list.length > 0 ? (
                                        list.map((ingredient, index) => <p key={index}>{ingredient}</p>)
                                    ) : (
                                        <p>Brak składników</p>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default IngredientsListSection
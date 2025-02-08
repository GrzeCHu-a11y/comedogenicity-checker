
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./SearchOutputSection.module.css";

const SearchOutputSection = () => {
    return (
        <>
            <section>
                <SectionHeader title="Wyniki wyszukiwania" />
                <div className={styles.wrapper}>
                    <p></p>
                </div>
            </section >
        </>
    );
};

export default SearchOutputSection;

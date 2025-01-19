import SearchBar from "../components/searchBar/SearchBar";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <section className={styles.firstSection}>
                <header className={styles.header}>
                    <h1 className={styles.h1}>Sprawdź, które składniki zatykają pory</h1>
                    <p className={styles.p}>Dowiedz się, które składniki kosmetyczne mogą zatykać pory i powodować niedoskonałości skóry.</p>
                </header>
                <SearchBar />
            </section>
            <section>
                <SectionHeader title="Wyniki wyszukiwania" />
            </section>
        </>
    );
};

export default Home;

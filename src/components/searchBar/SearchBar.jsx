
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <input className={styles.SearchBar} type="search" name="" id="" placeholder="Wklej tu składniki produktu..." />
                <span className={styles.fa}><a href="#"><i className="fas fa-search"></i></a></span>
            </div>
        </>
    );
};

export default SearchBar;
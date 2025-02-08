import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const [value, setInputValue] = useState("");

    const setValue = (e) => {
        e.preventDefault();
        setInputValue(e.target.value)
        console.log(value)
    }

    const sendData = () => {
        console.log("send")
    }

    return (
        <>
            <div className={styles.wrapper}>
                <input className={styles.SearchBar} type="search" name="" id="" placeholder="Wklej tu składniki produktu..." onChange={(e) => setValue(e)} />
                <span onClick={sendData} className={styles.fa}><a href="#"><i className="fas fa-search"></i></a></span>
            </div>
        </>
    );
};

export default SearchBar;
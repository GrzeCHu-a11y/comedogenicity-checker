import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>LOGO</div>
            <ul className={styles.navLinks}>
                <li><a href="#">Strona główna</a></li>
                <li><a href="#">Lista składników</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
            <div className={styles.socialIcons}>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;
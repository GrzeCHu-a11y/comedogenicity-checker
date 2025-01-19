import styles from "./SectionHeader.module.css";
import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => {
    return (
        <header className={styles.header}>
            <h2 className={styles.h2}>
                {title}
            </h2>
        </header>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionHeader;

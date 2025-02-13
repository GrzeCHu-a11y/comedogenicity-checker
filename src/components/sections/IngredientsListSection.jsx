import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./IngredientsListSection.module.css";
const IngredientsListSection = () => {
    return (
        <>
            <section>
                <SectionHeader title="Lista składników zapychających pory" />
                <div className={styles.wrapper}>
                    <div className={styles.list}></div>
                    <div className={styles.list}></div>
                </div>
            </section>
        </>
    )
}

export default IngredientsListSection
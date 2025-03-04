import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./FaqSection.module.css"
const FaqSection = () => {
    return (
        <section>
            <SectionHeader title="FAQ" />
            <div className={styles.textContainer}>
                <h3>Lista składników zatykających pory</h3>
                <p>Pożegnaj się z wypryskami dzięki naszej ostatecznej liście kontrolnej składników zatykających pory! Ten prosty przewodnik pomoże Ci zidentyfikować potencjalnych sprawców powodujących trądzik ukrytych w pielęgnacji skóry, pielęgnacji włosów, makijażu, filtrach przeciwsłonecznych, a nawet detergentach do prania. Sprawdzając swoje produkty, możesz dokonywać świadomych wyborów i zapobiegać wypryskom, zanim się rozpoczną.</p>
                <p>Pielęgnacja skóry nie powinna być grą w zgadywanie. Niezależnie od tego, czy Twoja skóra jest tłusta, sucha, skłonna do trądziku, czy mieszana, wiedza o tym, których składników należy unikać, jest niezbędna do utrzymania skóry czystej. W CLEARSTEM wszystkie nasze produkty są bezpieczne dla trądziku i wolne od składników zatykających pory, parabenów i ftalanów. Wykraczamy poza zabiegi na poziomie powierzchni, zajmując się podstawowymi przyczynami trądziku za pomocą holistycznych, popartych naukowo rozwiązań.</p>
                <p>Zaufaj naszemu narzędziu do sprawdzania składników zatykających pory jako swojemu źródłu zapewniającemu zdrowszą, wolną od trądziku skórę.</p>
            </div>
        </section >
    );
}

export default FaqSection;
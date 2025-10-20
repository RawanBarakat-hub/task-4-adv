import Title from "../Title/Title"
import styles from "./SectionService.module.css"
const SectionService = () => {
    return (
        <section className="section_margin">
                <div className={styles.image_wrapper}>
                    <img src="/assets/images/kitchen.jpg" alt="kitchen photo" className={styles.image}/>
                    <Title title="Find Dream Home" description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                    className="service_title"/>
                </div>
        </section>
    )
}

export default SectionService
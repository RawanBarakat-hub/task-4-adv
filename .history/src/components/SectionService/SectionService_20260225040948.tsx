import Title from "../Title/Title"
import styles from "./SectionService.module.css"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 1.05
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const SectionService = () => {
    return (
        <motion.section
            className="section_margin"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.image_wrapper}>
                
                <motion.img
                    src="/task-4-adv/assets/images/kitchen.jpg"
                    alt="kitchen photo"
                    className={styles.image}
                    variants={imageReveal}
                />

                <motion.div variants={fadeUp}>
                    <Title
                        title="Find Dream Home"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                        className="service_title"
                    />
                </motion.div>

            </div>
        </motion.section>
    )
}

export default SectionService
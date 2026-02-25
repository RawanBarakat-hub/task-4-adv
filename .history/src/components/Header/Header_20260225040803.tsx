import { locations } from "../../data"
import Card from "../Card/Card"
import Hero from "../Hero/Hero"
import styles from "./Header.module.css"
import { motion } from "framer-motion"

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

const Header = () => {
    return (
        <motion.div
            className={styles.header}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={fadeUp}>
                <Hero
                    title="Discover a place you will love to live"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
                >
                    {
                        locations?.map((location, index) => {
                            return (
                                <motion.div key={index} variants={fadeUp}>
                                    <Card
                                        image={location.image}
                                        title={location.title}
                                        description={location.description}
                                        className="hero_card"
                                    />
                                </motion.div>
                            )
                        })
                    }
                </Hero>
            </motion.div>
        </motion.div>
    )
}

export default Header
import { information } from "../../data"
import Card from "../Card/Card"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Title from "../Title/Title"
import { motion } from "framer-motion"

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
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

const SectionAbout = () => {
    return (
        <motion.section
            className="section_margin white_spacing"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={fadeUp}>
                <Title
                    title="How it Works"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
            </motion.div>

            <ContainerGrid>
                {
                    information?.map((info, index) => {
                        return (
                            <motion.div key={index} variants={fadeUp}>
                                <Card
                                    image={info.image}
                                    title={info.title}
                                    description={info.description}
                                    className="about_card"
                                />
                            </motion.div>
                        )
                    })
                }
            </ContainerGrid>
        </motion.section>
    )
}

export default SectionAbout
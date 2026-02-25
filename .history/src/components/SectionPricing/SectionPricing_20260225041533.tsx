import Card from '../Card/Card'
import ContainerGrid from '../ContainerGrid/ContainerGrid'
import Title from '../Title/Title'
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

const SectionPricing = () => {
    
    return (
        <motion.section
            className='section_margin white_spacing'
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={fadeUp}>
                <Title
                    title='Most Trending'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing eli'
                />
            </motion.div>

            <ContainerGrid className="container_pricing">
                {
                    images?.map((image, index) => {
                        return (
                            <motion.div key={index} variants={fadeUp}>
                                <Card
                                    image={image}
                                    className='card_pricing'
                                    show_additional={true}
                                />
                            </motion.div>
                        )
                    })
                }
            </ContainerGrid>
        </motion.section>
    )
}

export default SectionPricing
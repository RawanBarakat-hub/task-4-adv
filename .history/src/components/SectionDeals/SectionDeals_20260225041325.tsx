import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonDeal from "../ButtonDeal/ButtonDeal";
import ButtonsContainer from "../LinksContainer/ButtonsContainer";
import Title from "../Title/Title";
import ContainerGrid from "../ContainerGrid/ContainerGrid";
import Card from "../Card/Card";
import { buttons, houses } from "../../data";

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const SectionDeals = () => {
    
    const [activeType, setActiveType] = useState<string>("residential");
    const currentHouse = houses.find((house) => house.name === activeType);

    return (
        <motion.section
            className="section_margin white_spacing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <motion.div variants={fadeUp}>
                <Title
                    title="Best Real Estate Deals"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
            </motion.div>

            <motion.div variants={fadeUp}>
                <ButtonsContainer>
                    {buttons.map((button) => (
                        <motion.div
                            key={button.key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ButtonDeal
                                content={button.content}
                                onClick={() => setActiveType(button.key)}
                                isActive={activeType === button.key}
                            />
                        </motion.div>
                    ))}
                </ButtonsContainer>
            </motion.div>

            <ContainerGrid className="container_deal">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeType}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {currentHouse?.images.map((image, index) => (
                            <motion.div key={index} variants={fadeUp}>
                                <Card
                                    image={image}
                                    show_last={true}
                                    className="card_deal"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </ContainerGrid>
        </motion.section>
    );
};

export default SectionDeals;
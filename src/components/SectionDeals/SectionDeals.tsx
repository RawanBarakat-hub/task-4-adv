import { useState } from "react";
import ButtonDeal from "../LinkDeal/ButtonDeal";
import ButtonsContainer from "../LinksContainer/ButtonsContainer";
import Title from "../Title/Title";
import ContainerGrid from "../ContainerGrid/ContainerGrid";
import Card from "../Card/Card";

const SectionDeals = () => {
    const buttons = [
        { content: "Residential Property", key: "residential" },
        { content: "Commercial Property", key: "commercial" },
        { content: "Agriculture Property", key: "agriculture" },
        { content: "Industrial Property", key: "industrial" },
    ];

    const houses = [
        {
        name: "residential",
        images: [
            { source: "/assets/images/Deal_house1.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house2.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house3.jpg", alternative: "House photo" },
        ],
        },
        {
        name: "commercial",
        images: [
            { source: "/assets/images/Deal_house2.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house1.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house3.jpg", alternative: "House photo" },
        ],
        },
        {
        name: "agriculture",
        images: [
            { source: "/assets/images/Deal_house3.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house2.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house1.jpg", alternative: "House photo" },
        ],
        },
        {
        name: "industrial",
        images: [
            { source: "/assets/images/Deal_house2.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house1.jpg", alternative: "House photo" },
            { source: "/assets/images/Deal_house3.jpg", alternative: "House photo" },
        ],
        },
    ];
    const [activeType, setActiveType] = useState<string>("residential");
    const currentHouse = houses.find((house) => house.name === activeType);
    return (
        <section className="section_margin white_spacing">
        <Title
            title="Best Real Estate Deals"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        />

        <ButtonsContainer>
            {buttons.map((button) => (
            <ButtonDeal
                key={button.key}
                content={button.content}
                onClick={() => setActiveType(button.key)}
                isActive={activeType === button.key}
            />
            ))}
        </ButtonsContainer>
        <ContainerGrid className="container_deal">
            {currentHouse?.images.map((image, index) => (
            <Card
                key={index}
                image={image}
                show_last={true}
                className="card_deal"
            />
            ))}
        </ContainerGrid>
        </section>
    );
    };

    export default SectionDeals;

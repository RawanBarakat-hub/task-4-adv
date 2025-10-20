import Card from "../Card/Card"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Title from "../Title/Title"

const SectionAbout = () => {
    const information=[
        {
            image:{
                source:"/task-4-adv/assets/icons/House_search.svg",
                alternative:"House icon"
            },
            title:"Search Apartment",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
        },
        {
            image:{
                source:"/task-4-adv/assets/icons/House_hand.svg",
                alternative:"House icon"
            },
            title:"Select Apartment",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
        },
        {
            image:{
                source:"/task-4-adv/assets/icons/House_correct.svg",
                alternative:"House icon"
            },
            title:"Confirm Apartment",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
        }
    ]
    return (
        <section className="section_margin white_spacing">
            <Title title="How it Works" description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
            <ContainerGrid>
                {
                    information?.map((info,index)=>{
                        return <Card key={index} image={info.image}
                        title={info.title}
                        description={info.description}
                        className="about_card"/>
                    })
                }
            </ContainerGrid>
        </section>
    )
}

export default SectionAbout
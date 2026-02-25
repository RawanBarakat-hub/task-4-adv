import { information } from "../../data"
import Card from "../Card/Card"
import ContainerGrid from "../ContainerGrid/ContainerGrid"
import Title from "../Title/Title"

const SectionAbout = () => {
    
    return (
        <section id="about" className="section_margin white_spacing">
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
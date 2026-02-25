import Card from '../Card/Card'
import ContainerGrid from '../ContainerGrid/ContainerGrid'
import Title from '../Title/Title'

const SectionPricing = () => {
    const images=[
        {
            source:"/task-4-adv/assets/images/home1.jpg",
            alternative:"Home photo"
        },
        {
            source:"/task-4-adv/assets/images/home2.jpg",
            alternative:"Home photo"
        },
        {
            source:"/task-4-adv/assets/images/home3.jpg",
            alternative:"Home photo"
        },
        {
            source:"/task-4-adv/assets/images/home4.jpg",
            alternative:"Home photo"
        },
        {
            source:"/task-4-adv/assets/images/home5.jpg",
            alternative:"Home photo"
        },
        {
            source:"/task-4-adv/assets/images/home6.jpg",
            alternative:"Home photo"
        }
    ]
    return (
        <section className='section_margin white_spacing'>
            <Title title='Most Trending' description='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
            <ContainerGrid className="container_pricing">
                {
                    images?.map((image,index)=>{
                        return <Card key={index} image={image} className='card_pricing' show_additional={true}/>
                    })
                }
            </ContainerGrid>
        </section>
    )
}

export default SectionPricing
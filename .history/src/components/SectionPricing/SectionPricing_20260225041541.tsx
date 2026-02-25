import { images } from '../../data'
import Card from '../Card/Card'
import ContainerGrid from '../ContainerGrid/ContainerGrid'
import Title from '../Title/Title'

const SectionPricing = () => {
    
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
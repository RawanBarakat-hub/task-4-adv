import Card from "../Card/Card"
import Hero from "../Hero/Hero"
import styles from "./Header.module.css"
const Header = () => {
    const locations=[
        {
            image:{
                source:"/assets/icons/location.svg",
                alternative:"Location icon"
            },
            title:"Location",
            description:"Ahmedabad, India"
        },
        {
            image:{
                source:"/assets/icons/dollar-circle.svg",
                alternative:"Dollar icon"
            },
            title:"Price",
            description:"$1000 - $10,000"
        },
        {
            image:{
                source:"/assets/icons/house.svg",
                alternative:"House icon"
            },
            title:"Type of Property",
            description:"Apartment"
        }
    ]
    return (
            <div className={styles.header}>
                <Hero title="Discover a place you will love to live"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.">
                    {
                        locations?.map((location,index)=>{
                            return <Card key={index} image={location.image} title={location.title} description={location.description}   
                            className="hero_card"
                                />
                        })
                    }
                </Hero>
            </div>
    )
}

export default Header
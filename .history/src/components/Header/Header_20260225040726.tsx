import { locations } from "../../data"
import Card from "../Card/Card"
import Hero from "../Hero/Hero"
import styles from "./Header.module.css"
const Header = () => {
    
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
import styles from "./Hero.module.css"
interface HeroProps{
    title:string;
    description:string;
    children:React.ReactNode;
}
const Hero = ({title,description,children,}:HeroProps) => {
    return (
        <div className={`${styles.hero}`}>
            <h1 className={`${styles.title} title_style`}>{title}</h1>
            <p className={`${styles.description} description_style`}>{description}</p>
            <div className={`${styles.container} _flex _justify_between`}>
                {children}
            </div>
        </div>
    )
}

export default Hero
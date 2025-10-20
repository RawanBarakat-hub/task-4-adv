import styles from "./Title.module.css"
interface TitleProps{
    title:string;
    description:string;
    className?:string;
}
const Title = ({title,description,className}:TitleProps) => {
    return (
        <div className={`${styles.title_container} ${className && styles[className] }`}>
            <h2 className={`${styles.title} title_style`}>{title}</h2>
            <p className={`${styles.description} description_style`}>{description}</p>
        </div>
    )
}

export default Title
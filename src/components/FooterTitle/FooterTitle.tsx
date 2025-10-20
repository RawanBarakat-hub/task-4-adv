import styles from "./FooterTitle.module.css"
interface FooterTitleProps{
    title:string;
}
const FooterTitle = ({title}:FooterTitleProps) => {
    return (
        <h4 className={`${styles.title} title_style`}>{title}</h4>
    )
}

export default FooterTitle
import styles from "./FooterTitle.module.css"
interface FooterTitleProps{
    title:string;
}
const FooterTitle = ({title}:FooterTitleProps) => {
    return (
        <h4 >{title}</h4>
    )
}

export default FooterTitle
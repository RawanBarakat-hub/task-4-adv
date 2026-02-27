import { Link } from "react-router-dom";
import type { Item } from "../../types/common";
import styles from "./FooterTitle.module.css"
interface FooterTitleProps{
    title:Item;
}
const FooterTitle = ({title}:FooterTitleProps) => {
    return (
        <Link className={`${styles.title} title_style`} to={title.url}>{title.content}</Link>
    )
}

export default FooterTitle
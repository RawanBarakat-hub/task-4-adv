import type { Item } from "../../types/common";
import styles from "./FooterTitle.module.css"
import { HashLink } from "react-router-hash-link";
interface FooterTitleProps{
    title:Item;
}
const FooterTitle = ({title}:FooterTitleProps) => {
    return (
        <HashLink className={`${styles.title} title_style`} to={title.url}>{title.content}</HashLink>
    )
}

export default FooterTitle
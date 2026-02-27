import styles from 
import { Link } from "react-router-dom";
import type { Item } from "../../types/common";
interface FooterLinksProps{
    title:Item;
    children:React.ReactNode;
}

const FooterLinks = ({title,children}:FooterLinksProps) => {
    return (
        <div>
            <Link className={`${styles.title} title_style`} to={title.url}>{title.content}</Link>
            <ul className="_list_style_none">
                {children}
            </ul>
        </div>
    )
}

export default FooterLinks
import type { Item } from "../../types/common";
import FooterTitle from "../FooterTitle/FooterTitle";
interface FooterLinksProps{
    title:Item;
    children:React.ReactNode;
}

const FooterLinks = ({title,children}:FooterLinksProps) => {
    return (
        <div>
            <FooterTitle  to={title.url}>{title.content}</FooterTitle>
            <ul className="_list_style_none">
                {children}
            </ul>
        </div>
    )
}

export default FooterLinks
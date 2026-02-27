import { Link } from "react-router-dom";
interface FooterLinksProps{
    title:I;
    children:React.ReactNode;
}

const FooterLinks = ({title,children}:FooterLinksProps) => {
    return (
        <div>
            <Link to={title.url}>{title.text}<Link/>
            <ul className="_list_style_none">
                {children}
            </ul>
        </div>
    )
}

export default FooterLinks
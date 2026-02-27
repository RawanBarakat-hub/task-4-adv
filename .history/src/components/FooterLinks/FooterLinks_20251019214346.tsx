import FooterTitle from "../FooterTitle/FooterTitle";
interface FooterLinksProps{
    title:string;
    children:React.ReactNode;
}

const FooterLinks = ({title,children}:FooterLinksProps) => {
    return (
        <div>
            <FooterTitle title={title}/>
            <ul className="_list_style_none">
                {children}
            </ul>
        </div>
    )
}

export default FooterLinks
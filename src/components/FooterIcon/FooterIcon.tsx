import styles from "./FooterIcon.module.css"
import type { Image } from "../../types/common";
interface FooterIconProps{
    url:string;
    image:Image
}
const FooterIcon = ({url,image}:FooterIconProps) => {
    return (
        <div className={styles.icon}>
            <a href={url}><img src={image.source} alt={image.alternative} /></a>
        </div>
    )
}

export default FooterIcon
import styles from "./FooterInfo.module.css"
import type { Image } from "../../types/common"
interface FooterInfoProps{
    image:Image;
    description:string;
}
const FooterInfo = ({image,description}:FooterInfoProps) => {
    return (
        <div>
            <div className={styles.image_wrapper}><img src={image.source} alt={image.alternative} /></div>
            <p className={`${styles.description} description_style`}>{description}</p>
        </div>
    )
}

export default FooterInfo
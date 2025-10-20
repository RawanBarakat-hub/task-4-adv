import styles from "./FooterEnding.module.css"
interface FooterEndingProps{
    first_info:string;
    second_info:string;
    last_info:string;
}
const FooterEnding = ({first_info,second_info,last_info}:FooterEndingProps) => {
    return (
        <div className={`${styles.end_footer} _flex _justify_between`}>
            <p className={`${styles.first_info} footer_shift`}>{first_info}</p>
            <div>
                <span className={`${styles.second_info} footer_shift`}>{second_info}</span>
                <span className={`${styles.last_info} footer_shift`}>{last_info}</span>
            </div>
        </div>
    )
}

export default FooterEnding
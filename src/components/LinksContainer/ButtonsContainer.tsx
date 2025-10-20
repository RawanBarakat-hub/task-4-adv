import styles from "./ButtonsContainer.module.css"
interface ButtonsContainerProps{
    children:React.ReactNode
}
const ButtonsContainer = ({children}:ButtonsContainerProps) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default ButtonsContainer
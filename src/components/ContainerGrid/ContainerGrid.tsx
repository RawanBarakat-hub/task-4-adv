import styles from "./ContainerGrid.module.css"
interface ContainerGridProps{
    children:React.ReactNode;
    className?:string;
}
const ContainerGrid = ({children,className}:ContainerGridProps) => {
    return (
        <div className={`${styles.container} ${className && styles[className]}`}>{children}</div>
    )
}

export default ContainerGrid
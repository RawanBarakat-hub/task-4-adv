import styles from "./ButtonDeal.module.css";

interface ButtonDealProps {
    content: string;
    onClick?: () => void;
    isActive?: boolean;
    }

    const ButtonDeal = ({ content, onClick, isActive }: ButtonDealProps) => {
    return (
        <button
        className={`${styles.btn} ${isActive && styles.active}`}
        onClick={onClick}
        >
        {content}
        </button>
    );
};

export default ButtonDeal;

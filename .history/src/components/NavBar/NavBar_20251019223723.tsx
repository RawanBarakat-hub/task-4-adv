import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import  type { Image , Item } from "../../types/common";
interface NavProps {
    image: Image;
    items: Array<Item>;
    btn_login: string;
    image_btn: Image;
    image_xbtn: Image;
}
const NavBar = ({image,items,btn_login,image_btn,image_xbtn,}: NavProps) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 992);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <nav className={`${styles.nav}  ${showMenu && styles.nav_active} _flex _justify_between _align_center white_spacing`}>
            <div className="image_wrapper">
                <img src={image.source} alt={image.alternative} className={styles.logo} />
            </div>
            {!isMobile && (
                <>
                    <ul className={`${styles.links} _flex _list_style_none`}>
                        {
                            items?.map((item,index)=>{
                                return <li key={index}><NavLink to={item.url} className={({ isActive }) =>`${styles.nav_link} ${isActive && styles.active} shift_header _text_decoration`}>{item.content}</NavLink></li>
                            })
                        }
                    </ul>
                    <button className={styles.btn_login}>{btn_login}</button>
                </>
            )}
            {isMobile && (
                <>
                    <button className={styles.btn_bars} onClick={()=>setShowMenu(!showMenu)}>
                        <img src={showMenu?image_xbtn.source:image_btn.source}
                        alt={showMenu?image_xbtn.alternative:image_btn.alternative}/>
                    </button>
                    {showMenu && (
                        <div className={styles.mobile_menu}>
                            <ul className={`${styles.links} ${showMenu&&styles.show}  _flex _list_style_none`}>
                                {items?.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.url} className={({isActive})=>`${styles.nav_link} ${isActive && styles.active} shift_header _text_decoration`}>{item.content}</NavLink>
                                </li>
                                ))}
                            </ul>
                            <button className={styles.btn_login}>{btn_login}</button>
                        </div>
                    )}
                </>
            )}
        </nav>
    );
};

export default NavBar;

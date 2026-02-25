import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { items } from "../data"

const Root = () => {
    return (
        <div>
            <NavBar image={{source:"/task-4-adv/assets/images/Logo.png",alternative:"Logo image"}}
            items={items}
            btn_login="Login"
            image_btn={{source:"/task-4-adv/assets/icons/Bars.svg",alternative:"Bars icon"}}
            image_xbtn={{source:"/task-4-adv/assets/icons/Xmenu.svg",alternative:"Cancel icon"}}
            />
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Root
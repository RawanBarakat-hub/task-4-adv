import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"

const Root = () => {
    const items=[
        {
            url:"/",
            content:"Home"
        },
        {
            url:"/about",
            content:"About"
        },
        {
            url:"/service",
            content:"Service"
        },
        {
            url:"/property",
            content:"New Property"
        },
        {
            url:"/contact",
            content:"Contact"
        }
    ]
    return (
        <div>
            <NavBar image={{source:"/assets/images/Logo.png",alternative:"Logo image"}}
            items={items}
            btn_login="Login"
            image_btn={{source:"/assets/icons/Bars.svg",alternative:"Bars icon"}}
            image_xbtn={{source:"public/assets/icons/Xmenu.svg",alternative:"Cancel icon"}}
            />
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Root
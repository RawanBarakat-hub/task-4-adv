import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { items } from "../data"
import { motion, AnimatePresence } from "framer-motion"

const pageTransition = {
    initial: {
        opacity: 0,
        y: 40,
        scale: 0.98
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        opacity: 0,
        y: -30,
        scale: 0.98,
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
}

const Root = () => {
    return (
        <div>
            <NavBar 
                image={{source:"/task-4-adv/assets/images/Logo.png",alternative:"Logo image"}}
                items={items}
                btn_login="Login"
                image_btn={{source:"/task-4-adv/assets/icons/Bars.svg",alternative:"Bars icon"}}
                image_xbtn={{source:"/task-4-adv/assets/icons/Xmenu.svg",alternative:"Cancel icon"}}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    variants={pageTransition}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Outlet/>
                </motion.div>
            </AnimatePresence>

            <Footer/>
        </div>
    )
}

export default Root
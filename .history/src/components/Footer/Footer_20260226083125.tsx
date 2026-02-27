import FooterInfo from '../FooterInfo/FooterInfo'
import FooterLinks from '../FooterLinks/FooterLinks'
import { Link } from 'react-router-dom'
import FooterIcon from '../FooterIcon/FooterIcon'
import FooterTitle from '../FooterTitle/FooterTitle'
import styles from "./Footer.module.css"
import FooterEnding from '../FooterEnding/FooterEnding'
import { linksInformation, location } from '../../data'
const Footer = () => {
    return (
        <footer id='contact' className='white_spacing'>
            <div className={`${styles.top_footer} _flex`}>
                <FooterInfo image={{source:"/task-4-adv/assets/images/Logo.png",alternative:"Logo photo"}}
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
                            felis vitae sit est quisque.'/>
                {
                    linksInformation?.map((linkInfo,index)=>{
                        return <FooterLinks key={index} title={linkInfo.title} >
                            {
                                linkInfo.links?.map((link,index)=>{
                                    return <li key={index}><HaLink to={link.url} className={`${styles.link} _text_decoration footer_shift`}>{link.content}</HaLink></li>
                                })
                            }
                            </FooterLinks>
                    })
                }
                <div>
                    <FooterTitle title={{url:"#",content:"Our location"}}/>
                    <p className='footer_shift'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    <div className={`${styles.icons} _flex`}>
                        {
                            location.out_links?.map((out_link,index)=>{
                                return <FooterIcon key={index} url={out_link.url}
                                image={out_link.image}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <FooterEnding first_info="Copyright 2024 flora. All Rights Reserved" second_info="Terms & Conditions" last_info="Privacy Policy"/>
        </footer>
    )
}

export default Footer
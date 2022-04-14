import "./Footer.css";
import { NavLink } from "react-router-dom";


function Footer() {
    return (
        <div className="footerMain">
            <div className="InfoShopAcc">
                <div className="footerInfo">
                    <div className="footerPhoneMail"> 
                        <div className="footerPhMplacing">
                            <address>
                                 <p>tel.:  (+374)94323387</p>
                                 <p>e-mail:<a className="mailLink" href="mailto:hvardanyan9494@gmail.com">hvardanyan9494@gmail.com</a> </p>
                            </address>
                        </div>                         
                    </div>
                    <div className="footerSocial">                        
                        <a className="socialNetIco" href="https://www.linkedin.com/in/hayk-vardanyan-0229aa105/">
                            <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                        </a>
                        <a className="socialNetIco" href="https://github.com/HaykV94">
                        <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                        </a>
                        <a className="socialNetIco" href="https://www.facebook.com/profile.php?id=100004015107013">
                        <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="footerShopping">
                    <div className="footerTitle"><p className="footerTitleTxt">Shopping</p></div>
                    <div className="footerList"><NavLink className="footerLink" to="Men">Men</NavLink></div>
                    <div className="footerList"><NavLink className="footerLink" to="Women">Women</NavLink></div>
                    <div className="footerList"><NavLink className="footerLink" to="Kids">Kids</NavLink></div>
                </div>
                <div className="footerAccount">
                    <div className="footerTitle"><p className="footerTitleTxt">Account</p></div>
                    <div className="footerList"><NavLink className="footerLink" to="Login">Login</NavLink></div>
                    <div className="footerList"><NavLink className="footerLink" to="Sign up">Sign up</NavLink></div>
                    <div className="footerList"><button className="footerBtn">Favourites</button></div>
                    <div className="footerList"><button className="footerBtn">Cart</button></div>
                </div>
            </div>
            <div className="footerTxt">
                <footer>
                    Created in 2022
                </footer>
            </div>
        </div>
    )
}


export default Footer
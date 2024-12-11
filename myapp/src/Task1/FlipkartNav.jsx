import style from "./flipkartnav.module.css";
import logo1 from "./images/logo1.jpeg";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";


// Flipkart navigation bar componenet
const FlipkartNav = ()=>{
    return (
        <nav>
            <aside className={style.logo}>
                <img src={logo1} alt="logoimg" />
            </aside>
            <section className={style.searchContainer}>Search Container
                
            </section>
            <ul>
                <li><FaRegCircleUser/>Login</li>
                <li><BsCart3 />Cart</li>
                <li><CiShop />Become a seller</li>
                <li><IoMdMore/></li>
            </ul>
        </nav>
    )
}

export default FlipkartNav;
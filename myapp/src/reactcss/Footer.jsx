
// importing the css style from footer.module.css
import style from "./footer.module.css";
const Footer = ()=>{
return(
    <footer id={style.footer}>
{/* 
* if we are using module css then we have to provide id and classes inside style. 

*/}
        <h1 className={style.heading}>I am Footer</h1> 
    </footer>
    
)
}

export default Footer;
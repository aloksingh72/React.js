import style from "./profile.module.css";
import PIC from "./Profile1.jpeg";
const Profile = () =>{
return (
   <section id={style.card}>
    <h2>this is profile image</h2>
    <img src={PIC} alt="profileimage"/>
   </section>
)
};
export default Profile;
import '../css/Logo.css';
import image1 from '../images/mylogo.gif'

export default function Logo(){
    return(
        <div>
        <img src={image1} alt='logo'/>
        </div>
    );
}
import '../css/Logout.css'
import {useNavigate } from 'react-router-dom';


export default function Logout(){
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('loggedin');
        navigate('/');
      }

    return(

        <div className='parent'>
            <div className='child'>
            <p>Rishabh</p>
            <button className='bttlo' onClick={handleLogout}>Logout</button>
            <button className='btt'>X</button>
        </div>
        </div>
    );
}
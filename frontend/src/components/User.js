import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
//import { useNavigate } from 'react-router-dom';


const User = ({isLoggedIn}) => {
    // const navigate = useNavigate();

    // const handleLoginClick = () => {
    //     navigate('/login');
    // };
// onClick={handleLoginClick}
    return(
        <>
            <NavLink to="/login" style={{color:'#203850', paddingRight:'35px'}}>
                <FontAwesomeIcon icon={faCircleUser} style={{width: '45px', height: 'auto'}}></FontAwesomeIcon>
                {!isLoggedIn && <p>Login</p>}
            </NavLink>
        </>
    ) 
}

export default User;
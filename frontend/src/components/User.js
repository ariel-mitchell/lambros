import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const User = ({isLoggedIn}) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return(
        <>
            <button onClick={handleLoginClick} style={{color:'#203850', paddingRight:'35px'}}>
                <FontAwesomeIcon icon={faCircleUser} style={{width: '45px', height: 'auto'}}></FontAwesomeIcon>
                {!isLoggedIn && <p>Login</p>}
            </button>
        </>
    ) 
}

export default User;
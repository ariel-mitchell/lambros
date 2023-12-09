import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return (
        <div>
            <header style={{display: 'flex', justifyContent: 'space-between'}}>
                <img src="/images/lambros_logo__gold_mockup_.jpg" alt="Lambros" style={{ width: '5%', height: 'auto', paddingLeft:'20px'}}></img>
                <img src="/images/lambro_text_logo.jpg" alt="Lambros" style={{ width: '20%', height: 'auto' }}></img>
                <FontAwesomeIcon icon={faCircleUser} style={{width: '75px', height: 'auto', color:'#203850', paddingRight:'20px'}}></FontAwesomeIcon>
            </header>
        </div>
    )
}

export default Banner;
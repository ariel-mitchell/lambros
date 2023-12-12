import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return (
        <div style={{borderBottom: '1px solid black'}}>
            <header style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', borderBottom: '2px solid darkgrey', paddingBottom: '25px'}}>
                <img src="/images/lambros_logo__gold_mockup_.jpg" alt="Lambros" style={{ width: '5%', height: 'auto', paddingLeft:'20px'}}></img>
                <img src="/images/lambro_text_logo.jpg" alt="Lambros" style={{ width: '20%', height: 'auto' }}></img>
                <FontAwesomeIcon icon={faCircleUser} style={{width: '45px', height: 'auto', color:'#203850', paddingRight:'35px'}}></FontAwesomeIcon>
            </header>
        </div>
    )
}

export default Banner;
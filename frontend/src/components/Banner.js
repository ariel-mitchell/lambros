
import { NavLink } from 'react-router-dom';
import User from './User';

function Banner() {
    return (
        <div style={{borderBottom: '1px solid black'}}>
            <header style={{display: 'flex', flex: 'wrap', justifyContent: 'space-between', marginTop: '20px', borderBottom: '2px solid darkgrey', paddingBottom: '25px'}}>
                <img src="/images/lambros_logo__gold_mockup_.jpg" alt="Lambros" style={{ width: 'auto', height: '5rem', paddingLeft:'20px'}} ></img>
                <NavLink to="/">
                    <img src="/images/lambro_text_logo.jpg" alt="Lambros" style={{ width: '30rem', height: 'auto' }}></img>
                </NavLink>
               <User/>
            </header>
        </div>
    )
}

export default Banner;
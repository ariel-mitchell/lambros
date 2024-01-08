import React, { useEffect, useState } from 'react'
import Axios  from 'axios';


const Forecast = () => {
    const [city, setCity] = useState('');
    const [forecastData, setForecastData] = useState(null);

    
    const fetchData = async () => {
        try {
            const response = await Axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=dd8e1bd7b2cce53b0b82b44535866807`
            );
            setForecastData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
      fetchData();  
    }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Enter city'
                value={city}
                onChange={handleInputChange}
                />
            </form>
            {forecastData ? (
                <>
                <h2>{forecastData.name}</h2>
                <p>Temperature: {forecastData.main.temp} &deg;</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Forecast;
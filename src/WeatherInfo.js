
const WeatherInfo = ({city, country, region, icon, text, tempC, tempF}) => {
    return (
        <div className="weather-info">
            <div className="location">
                <p>{city}</p>
                <p>{region}</p>
                <p>{country}</p>
            </div>
            <div>
                <img src={icon} alt="weatherIcon"/>
                <p>{tempC}°C / {tempF}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default WeatherInfo;
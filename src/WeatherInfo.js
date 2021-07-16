import DateTime from "./DateTime";
import PublicIcon from '@material-ui/icons/Public';
import OpacityIcon from '@material-ui/icons/Opacity';


const WeatherInfo = ({ city, country, icon, text, tempC, tempF, region, humidity}) => {
    return (
        <div className="weather-info">
            <div className="location">
                <p className="city">{ city }/{ region }</p>
                <div className="moreInfo">
                <div className="re-co">
                <DateTime />
                <p className="country"><PublicIcon />{ country }</p>
                </div>
                </div>
                <div className="img">    
                <img src={ icon } alt="weatherIcon"/>
                <p>"{ text }"</p>
                <p className="temp">{ tempC }°C</p>
                <p className="hum"><OpacityIcon />Humidity: {humidity}%</p>
                </div>
            </div>
            
            
        </div>
    )
}


export default WeatherInfo;


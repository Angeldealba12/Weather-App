import './App.css';
import { useEffect, useState } from 'react'
import WeatherInfo from './WeatherInfo'
import './App.css'

function App() {

  const [lat, setlat] = useState();
  const [lon, setlon] = useState();
  const [cityName, setCityName] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [text, setText] = useState();
  const [humidity, setHumidity] = useState();
  const [celciusTem, setcelciusTem] = useState();
  const [fahrenheitTem, setFahrenheitTem] = useState();
 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
    setlat(position.coords.latitude);
    setlon(position.coords.longitude);
    })
  }, [])

  useEffect(() => {
    const gettingAPI = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=f62bc9052cd746baa7f11250210307&q=${lat}, ${lon}&aqi=no`
      const res = await fetch(url)
      .then((res) => res.json())
      console.log(res)

      const { condition } = res.current;
       
      setCityName(res.location.name);
      setRegion(res.location.region);
      setCountry(res.location.country);
      setWeatherIcon(condition.icon);
      setText(condition.text);
      setcelciusTem(res.current.temp_c)
      setFahrenheitTem(res.current.temp_f)
      setHumidity(res.current.humidity);
    }

    if(lat && lon){
      gettingAPI();
    }

  }, [lat, lon])


  return (
    <div className="App">
      <div className="main-container"> 

      <WeatherInfo city={cityName} country={country} 
       icon={weatherIcon} text={text} region={region}
      tempC={celciusTem} tempF={fahrenheitTem} humidity={humidity}
      />
      
      </div>
    </div>
  );
}

export default App;

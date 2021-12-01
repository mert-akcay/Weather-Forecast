import { useEffect } from 'react'
import './styles.css'
import { Row, Col} from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import Input from './Input/Input'
import * as cityData from './cities.json'
import {setWeatherData, setForecastData} from '../redux/weatherDataSlice'
import WeatherCard from './Card/WeatherCard'

/* ${process.env.REACT_APP_API_KEY} */

function Container() {
    const dispatch = useDispatch();
    const currentSelected = useSelector((state) => state.weatherData.currentSelected)
    const weatherData = useSelector(state => state.weatherData.weatherData)

    useEffect(()=>{
        async function getData(){
            await axios(`http://api.openweathermap.org/data/2.5/weather?q=${currentSelected}&appid=aea83b8409454ade4f73c1048f28a4cc&units=metric`).then(res=>dispatch(setWeatherData(res.data)))
            
            var index = cityData['default'].findIndex(p=> p.name === currentSelected);
            var lat = cityData['default'][index].latitude
            var lon = cityData['default'][index].longitude
            await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=aea83b8409454ade4f73c1048f28a4cc&units=metric`).then(res=>dispatch(setForecastData(res.data)))
        }
        getData();
    },[currentSelected])

    return (
        <>
            <Row>
                <Col md={{span:14, offset:5}} >
                    <div className="container">
                        <Input data={cityData['default']}/>
                        <Row style={{marginTop:'2vh'}} gutter={[3,0]}>
                            <Col span={8}>
                                <span >
                                    <div><img className='image' src={`http://openweathermap.org/img/wn/${weatherData.weather &&weatherData.weather[0].icon}@2x.png`} alt="" /></div>
                                    <div style={{fontSize:'25px',fontWeight:'500',marginTop:'-2vh',marginLeft:'5vh'}}>{weatherData.coord && weatherData.weather[0].main}</div>
                                </span>
                            </Col>
                            <Col span={8}>
                                <div style={{fontSize:'46px',marginTop:'6vh',marginLeft:'-3vh'}}>{weatherData.coord && weatherData.main.temp} °C</div>
                            </Col>
                            <Col span={8}>
                                <div style={{textAlign:'left', fontSize:'17px', fontWeight:'400', marginTop:'5vh', marginLeft:'5vh'}}> <strong>Wind:</strong>  {weatherData.coord && weatherData.wind.speed} kmph <br /><strong>Humidity:</strong>  {weatherData.coord && weatherData.main.humidity}% <br /> <strong>Pressure:</strong>  {weatherData.coord && weatherData.main.pressure}mb </div>
                            </Col>
                        </Row>

                        <WeatherCard/>
                    </div>
                </Col>
                
            </Row>
        </>
    )
}

export default Container

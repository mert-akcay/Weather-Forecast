import React from 'react'
import  './styles.css'
import { Row, Col} from "antd";
import "antd/dist/antd.css";
import { useSelector} from 'react-redux'

function WeatherCard() {
    const forecastData = useSelector(state => state.weatherData.forecastData)
    const dayNumber = (new Date()).getDay()
    function day(dayNum){
        if (dayNum > 6){
            dayNum = dayNum % 7
        }
        switch (dayNum) {
            case 0:
                return  "SUN";
            case 1:
                return "MON";
            case 2:
                return "TUE";
            case 3:
                return "WED";
            case 4:
                return "THU";
            case 5:
                return "FRI";
            case 6:
                return "SAT";
            default:
                return "NONE";
          }
    }
    
    return (
        <>
            <Row style={{marginTop:'10vh'}} gutter={[15,0]}>
                <Col span={4}>
                    <div className='card'>
                        <span>
                            <div className='cardin'>
                                {day(dayNumber+1)}
                                <br />
                                <img src={`http://openweathermap.org/img/wn/${forecastData.lat && forecastData.daily[1].weather[0].icon}@2x.png`} alt="" />
                                <br />
                                {forecastData.lat && forecastData.daily[1].temp.day}°C
                            </div>
                        </span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className='card'>
                        <span>
                            <div className='cardin'>
                                {day(dayNumber+2)}
                                <br />
                                <img src={`http://openweathermap.org/img/wn/${forecastData.lat && forecastData.daily[2].weather[0].icon}@2x.png`} alt="" />
                                <br />
                                {forecastData.lat && forecastData.daily[2].temp.day}°C
                            </div>
                        </span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className='card'>
                        <span>
                            <div className='cardin'>
                                {day(dayNumber+3)}
                                <br />
                                <img src={`http://openweathermap.org/img/wn/${forecastData.lat && forecastData.daily[3].weather[0].icon}@2x.png`} alt="" />
                                <br />
                                {forecastData.lat && forecastData.daily[3].temp.day}°C
                            </div>
                        </span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className='card'>
                        <span>
                            <div className='cardin'>
                                {day(dayNumber+4)}
                                <br />
                                <img src={`http://openweathermap.org/img/wn/${forecastData.lat && forecastData.daily[4].weather[0].icon}@2x.png`} alt="" />
                                <br />
                                {forecastData.lat && forecastData.daily[4].temp.day}°C
                            </div>
                        </span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className='card'>
                        <span>
                            <div className='cardin'>
                                {day(dayNumber+5)}
                                <br />
                                <img src={`http://openweathermap.org/img/wn/${forecastData.lat && forecastData.daily[5].weather[0].icon}@2x.png`} alt="" />
                                <br />
                                {forecastData.lat && forecastData.daily[5].temp.day}°C
                            </div>
                        </span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className='card'>
                        <span>
                            <div className='cardin'>
                                {day(dayNumber+6)}
                                <br />
                                <img src={`http://openweathermap.org/img/wn/${forecastData.lat && forecastData.daily[6].weather[0].icon}@2x.png`} alt="" />
                                <br />
                                {forecastData.lat && forecastData.daily[6].temp.day}°C
                            </div>
                        </span>
                    </div>
                </Col>
            </Row>

        </>
        
        
    )
}

export default WeatherCard

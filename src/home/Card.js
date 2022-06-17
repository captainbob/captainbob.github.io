
import React from "react";
import './Card.css'
import rainSvg from "../imgs/rain.svg"
import humiditySvg from "../imgs/humidity.svg"
import windSvg from "../imgs/wind.svg"
import { Link } from "react-router-dom";
import { getWeatherImg, weatherDesc } from "../helper";

export default function (props) {
    const {weather} = props
    return (
        <div className="card-container">
            <div className="card-main">
                <img className="weather-png" src={getWeatherImg(weather.weather && weather.weather[0], weather.obsTime)}/>
                <div className="card-address">{weather.address}</div>
                <div className="card-flex-row">
                    <div className="card-flex-column">
                        <div className="card-celsius">
                            {weather.celsius} 
                            <div className="card-celsius-unit">{weather.unit}</div>
                        </div>
                        <div className="card-week-time ">
                            <div>{weather.weekday}，<small>{weather.time}</small></div>
                        </div>
                    </div>
                    <div style={{position: 'relative'}}>
                        {(weather.weather || []).map(item => (<div className="card-weather">
                            {weatherDesc[item] || item}
                        </div>))}
                    </div>
                </div>
                <div className="card-detail"><Link className="card-detail-text" to='/detail'> 详情 </Link></div>
            </div>
            <div className="card-info-container">
                <div className="card-info-item">
                    <img className="card-info-item_img" src={rainSvg}></img>
                    <div>降水量</div>
                    <div className="card-info-item_value">{weather.water}</div>
                </div>
                <div className="card-info-item">
                    <img className="card-info-item_img" src={humiditySvg}></img>
                    <div>湿度</div>
                    <div className="card-info-item_value">{weather.humidity}</div>
                </div>
                <div className="card-info-item">
                    <img className="card-info-item_img" src={windSvg}></img>
                    <div>风速</div>
                    <div className="card-info-item_value">{weather.windSpeed}</div>
                </div>
            </div>                    
        </div>
        
    )
}
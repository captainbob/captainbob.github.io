import React, {useState, useEffect} from "react";
import BackArrow from "../imgs/back.svg";
import WindPng from "../imgs/Wind.png";
import rainSvg from "../imgs/detail-rain.svg"
import humiditySvg from "../imgs/detail-humidity.svg"
import windSvg from "../imgs/detail-wind.svg"
import { Link } from "react-router-dom";
import getWeatherNow from "../api/getWeatherNow";
import getWeather3d from "../api/getWeather3d";

import { getWeatherImg, getWeek, getTime, getWeatherEnum } from '../helper'
import './index.css'




export default function () {
    const [weather, setWeather] = useState({})
    const [weather3d, setWeather3d] = useState([])
    useEffect(()=>{
        getWeatherNow().then(data => {
            setWeather({
                celsius: data.temp, // 摄氏度
                unit: '℃', // 单位
                address: '杭州市, 浙江省', // 地址
                weekday: getWeek(data.obsTime),
                time: getTime(data.obsTime),
                obsTime:data.obsTime,
                weather: [getWeatherEnum(data.text), data.windDir],
                water: data.precip + 'mm',
                humidity: data.humidity + '%',
                windSpeed: data.windSpeed + 'km/h',
            })
        })
        getWeather3d().then(data => {
            setWeather3d(data.map(item => ({
                tempMax: item.tempMax, // 摄氏度
                tempMin: item.tempMin,
                unit: '℃', // 单位
                weather: getWeatherEnum(item.textDay),
                weekday: getWeek(item.fxDate),
                obsTime: item.fxDate,
            })))
        })
    }, [])
    console.log(weather3d)
    return (
        <div className="detail-main-container">
            <div className="top-main">
                <div><Link to="/"><img src={BackArrow} style={{color:'#332821'}}></img></Link></div>
                <div><img src={getWeatherImg(weather.weather && weather.weather[0], weather.obsTime)} style={{width: 100}}></img></div>
            </div>
            <div className="top-address">{weather.address}</div>
            <div className="detail-celsius">
                {weather.celsius} 
                <sup className="detail-celsius-unit">{weather.unit}</sup>
            </div>
            <div className="detail-info-main">
                <div className="detail-info-item color-blue">
                    <img src={rainSvg}></img>
                    <div>{weather.water}</div>
                </div>
                <div className="detail-info-item color-red">
                    <img className="detail-info-item_img" src={humiditySvg}></img>
                    <div className="detail-info-item_value">{weather.humidity}</div>
                </div>
                <div className="detail-info-item color-pupple">
                    <img className="detail-info-item_img" src={windSvg}></img>
                    <div className="detail-info-item_value">{weather.windSpeed}</div>
                </div>
            </div>
            <div>
                <div className="detail-title-today">Today</div>
                <div></div>
            </div>
            <div className="detail-info-main2" >
                <div className="detail-info-item2">
                    <div className="detail-info-celsius">
                        {weather.celsius} 
                        <sup className="detail-info-celsius-unit">{weather.unit}</sup>
                    </div>
                    <div className="detail-info-time">10 am</div>
                </div>
                <div className="detail-info-item2">
                    <div className="detail-info-celsius">
                        {weather.celsius} 
                        <sup className="detail-info-celsius-unit">{weather.unit}</sup>
                    </div>
                    <div className="detail-info-time">12 am</div>
                </div>
                <div className="detail-info-item2">
                    <div className="detail-info-celsius">
                        {weather.celsius} 
                        <sup className="detail-info-celsius-unit">{weather.unit}</sup>
                    </div>
                    <div className="detail-info-time">13 am</div>
                </div>
            </div>
            <div>
                {weather3d.map(item => (
                    <div className="detail-info-item3">
                        <div className="detail-info-item3-weekday">{item.weekday}</div>
                        <img className="detail-info-item_img" src={getWeatherImg(item.weather)}></img>
                        <div style={{display: 'flex'}}>
                            <div className="detail-info-item-cele">
                                <div>{item.tempMax}</div>
                                <sup className="detail-info-item-cele-sup">{weather.unit}</sup>
                            </div>
                            <div className="detail-info-item-cele color-gray">
                                <div>{item.tempMin}</div>
                                <sup className="detail-info-item-cele-sup color-gray">{weather.unit}</sup>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
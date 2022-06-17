import React, { useEffect, useState } from "react";
import Card from "./Card";
import './index.css'
import homeSvg from '../imgs/home.svg'
import getWeatherNow from "../api/getWeatherNow";
import { getWeek, getTime, getWeatherEnum } from '../helper'

export default function () {
    const [weather, setWeather] = useState({})
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
    }, [])
    return (
        <div className="main-container">
            <Card weather={weather}/>
            <div className="nav">
                <div className="nav-item">
                    <img className="nav-icon" src={homeSvg}></img>
                    <div className="nav-name">home</div>
                </div>
                
            </div>
        </div>
    )
}
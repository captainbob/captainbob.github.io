import CloudsSvg from "./imgs/weather/Clouds.svg";
import CloudsNightSvg from "./imgs/weather/Clouds-night.svg";
import RainsSvg from "./imgs/weather/Rain.svg";
import RainNightSvg from "./imgs/weather/Rain-night.svg";
import SunSvg from "./imgs/weather/Sun.svg";
import SunNightSvg from "./imgs/weather/Sun-night.svg";
import WindSvg from "./imgs/weather/Wind.svg";
import WindNightSvg from "./imgs/weather/Wind-night.svg";

export function getWeek(date) {
    const weekEnum = ['周日', '周一', '周二','周三','周四','周五','周六']
    const myDate =  new Date(date)
    return weekEnum[myDate.getDay()]
}

export function getTime(date) {
    const myDate =  new Date(date)
    const hours = myDate.getHours(myDate)
    if (hours > 12) {
        return (hours - 12) + ' pm'
    } else {
        return hours + ' am'
    }
}

export function getWeatherEnum (val) {
    const enums = {
        '阴': weatherEnum.cloudy,
        '多云': weatherEnum.cloudy,
        '少云': weatherEnum.cloudy,
        '晴间多云': weatherEnum.cloudy,
        '小雨': weatherEnum.rain,
        '中雨': weatherEnum.rain,
        '大雨': weatherEnum.rain,
        '中到大雨': weatherEnum.rain,
        '阵雨': weatherEnum.rain,
        '强阵雨': weatherEnum.rain,
        '雷阵雨': weatherEnum.rain,
        '强雷阵雨': weatherEnum.rain,
        '晴':  weatherEnum.sun,

    }
    return enums[val]
}

export const weatherEnum = {
    wind: 'wind',
    cloudy: 'cloudy',
    rain: 'rain',
    sun: 'sun'

}

export function getWeatherImg(val, date) {
    const myDate = new Date(date)
    const hours = myDate.getHours(myDate)
    let type = 'sun'
    if (hours > 18 || hours < 6) {
        type =  'night'
    }
    if (val === weatherEnum.cloudy) {
        return type === 'sun' ? CloudsSvg : CloudsNightSvg
    } 
    if (val === weatherEnum.rain) {
        return type === 'sun' ? RainsSvg : RainNightSvg
    }
    if (val === weatherEnum.sun) {
        return type === 'sun' ? SunSvg : SunNightSvg
    }
    if (val === weatherEnum.wind) {
        return type === 'sun' ? WindSvg : WindNightSvg
    }
    return null
}


export const weatherDesc = {
    [weatherEnum.wind]: '强风',
    [weatherEnum.cloudy]: '阴天'
}


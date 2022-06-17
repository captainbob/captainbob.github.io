import axios from "axios";


const skey = 'weather.3d'

function fetchData() {
    return axios.get('https://devapi.qweather.com/v7/weather/3d?location=101210106&key=8e0d3f4be52c4714bdb5602dc007feae').then(data=> {
        const val = data.data.daily
        localStorage.setItem(skey, JSON.stringify(val))
        return val
    })
}
function getWeather3d() {
    const oldData = localStorage.getItem(skey)
    if (oldData) {
        setTimeout(() => { fetchData() }, 2000)
        return new Promise((resolve) => {
            try {
                resolve(JSON.parse(oldData))
            } catch(error) {
                resolve({})
            }
        })
    } else {
        return fetchData()
    }
}

export default getWeather3d
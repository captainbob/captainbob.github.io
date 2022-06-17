import axios from "axios";


const skey = 'weather.now'

function fetchData() {
    return axios.get('https://devapi.qweather.com/v7/weather/now?location=101210106&key=8e0d3f4be52c4714bdb5602dc007feae').then(data=> {
        const val = data.data.now
        localStorage.setItem(skey, JSON.stringify(val))
        return val
    })
}
function getWeatherNow() {
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

export default getWeatherNow
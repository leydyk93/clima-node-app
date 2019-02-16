const axios = require('axios')

const getClima = async (lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=dd5e62253a03c6887a9fee19d749d184`)
    return resp.data.main.temp
    
}

module.exports = {
    getClima
}


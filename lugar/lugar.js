const axios = require('axios')

const getLugar = async (direction) => {

    let encodeURL = encodeURI(direction)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyCahqF_gnxFQ_I6I5g147EUrc8VqzvtF-Y`)
    
    if(resp.data.status == 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la direccion ${direction}`)
    }

    let location = resp.data.results[0]
    let { lat, lng } = location.geometry.location
    return {
        direction: location.formatted_address,
        lat,
        lng
    }
}

module.exports = {
    getLugar
}


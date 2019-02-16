const lugar = require("./lugar/lugar")
const clima = require("./clima/clima")

const argv = require('yargs').options({
    direction: {
        alias: 'd', 
        demand: true, 
        desc: 'Descripcion de la ciudad para obtener el clima'
    }
}).argv

let getInfo = async (direction) => {
    try {
        let coord = await lugar.getLugar(direction)
        let temp  = await clima.getClima(coord.lat, coord.lng)
        return `La temperatura en ${coord.direction} es de ${temp}°C`
    } catch (error) {
        return `No se pudo determinar el clima en ${direction}`
    }
  
}

getInfo(argv.direction)
    .then(data=>{
        console.log(data)
    })
    .catch(e=>console.log(e))

// lugar.getLugar(argv.direction)
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(e=> console.log(e))

// clima.getClima(7.771357200000001, -72.22614659999999)
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(e=> console.log(e))



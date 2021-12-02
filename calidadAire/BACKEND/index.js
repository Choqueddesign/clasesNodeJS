const express = require("express")/*llama modulos */
const { getAirQaulityIndexFromUSB, getAirQualityIndexThirdPartyService } = require("./helpers/airQualityIndex")
const cors = require("cors")

const app = express()//invocamos una funcion express, despierte
const port = 3000

app.get('/aqi', cors(), async /* le dice que sea asincronica para poder hacer await (espere)*/(req, res) => {//administro las rutas
  console.log("ey recibe la peticion")//sin una respuesta inicia pero no manda nada
  //math.random()*(mayor - menor)+menor;
  //let mayor = 200, menor = 50;
  //let getAirQaulityIndex = Math.random()*(mayor - menor)+menor;estas lineas las paso al helper
  //res.send('recibi tu peticion!')//lo que va a responder
  //res.send({aqi:getAirQaulityIndexFromUSB})//dentro del corchete hay un documento .json
  res.send(
    {
     aqiFromUSB:getAirQaulityIndexFromUSB(),
     aqiFromThirdPartyService: await getAirQualityIndexThirdPartyService()
    }
  )
})

app.listen(port, () => {//inicia el servidor http
  console.log(`Example app listening at http://localhost:${port}`)//root -> localhost:3030
})
const https = require("https"); // realiza peticiones

const getAirQaulityIndexFromUSB = () => {
    let mayor = 200,
        menor = 50;
    return Math.random() * (mayor - menor) + menor;
};

const getAirQualityIndexThirdPartyService = () => {
    //como consulto un serviicio de tercero?
    //la direccion a la que voy a hacer el get
    // "uid": 6231,
        return new Promise((resolve, reject) => {
            try {
                https.get(
                    "https://api.waqi.info/search/?token=86444594affd2e1c373f20be7d14fd13c590b182&keyword=bogota",
                    (res) => {
                        //console.log(res)
                        //obtener body del response
                        res.on("data", (chunk) => {
                            let dataJSON = JSON.parse(chunk) //para crear un objeto
                            let estaciones = dataJSON.data //asigno nombre estaciones a la data
                            let estacionFerias = estaciones.find((item)=>{//busco un item(nombres escogido) entre estaciones
                                return item.uid==6231//declaro que el item que busco es e 6231
                            })
                            resolve(estacionFerias.aqi);//digo que busque la estacion (en este caso es la estacion con el uid 6231 y me mestre el aqi)
                        });
                    })
            } catch {
                reject("ocurrio error en la obtencion del body");
            }
        }).then((data)=>{return data}).catch((err)=>{return err})
};

//exporto para que sean visibles en el index.js
module.exports = {
    getAirQaulityIndexFromUSB,
    getAirQualityIndexThirdPartyService,

};

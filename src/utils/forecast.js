const  axios  = require("axios")

const forecast = (latitude,longitude,callback) =>{
    latitude
    let url = "https://api.weatherapi.com/v1/current.json?key=bcb24aa171c2405996465409222704&q="+latitude+","+longitude
    console.log("uRL : " ,url)
    axios.get(url)
        .then(({data}) => {
            console.log(url)
                callback(undefined,"Its currenly " +  data.current.temp_c + " celeicuis outside in " + data.location.name)
        })
        .catch(({response}) =>{
            if(!error.response){
                callback("Unable to connect weather api.",undefined)
            }
            else if(response.data.error.code){
                callback(response.data.error.message,undefined)
            }
        })
}

module.exports = forecast

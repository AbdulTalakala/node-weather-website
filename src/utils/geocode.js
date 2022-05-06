const axios = require('axios')

const geocode  = (address, callback) =>{
    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYWJkdWx0a2wiLCJhIjoiY2wyaWxmeXgwMG95NTNobDUzbDJhNTBhZyJ9.IDmqhgd1ywHHNwwZekq9CQ&limit=1"
   axios.get(url) 
    .then(({data}) =>{
      if(data.features.length > 0){
        console.log("latitide : ",data.features[0].center[1]," longitude: ",data.features[0].center[0])
        callback(undefined,{
          latitude: data.features[0].center[1],
          longitude: data.features[0].center[0],
          location:data.features[0].place_name
        })
      }
      else
        callback('No Data Found',undefined)
    })
    .catch((error) =>{
      if(!error.response){
        callback("Unable to connect geolocation api.",undefined)
      }
      else if(error.response){
        callback(error.response.data.message,undefined)
      }
    })
  }


  module.exports = geocode
var request =require('request')

const key='da9ea3a015e090bdec28882fd80b2578'

module.exports=function(location,callback){

    let api=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`

    request({
        url: api,
        json: true
    }, function (error, response, body) {
        if(error) {
            callback(`Unable to fetch the weather: ${error}`)
            
        }
        // callback(body)
        callback(`It's ${body.main.temp} celsius in ${body.name}!`)
        
        callback(`max-Temperature:${body.main.temp_max}`)
        callback(`speed: ${body.wind.speed}`)
        callback(`humidity: ${body.main.humidity}`)
    })

}

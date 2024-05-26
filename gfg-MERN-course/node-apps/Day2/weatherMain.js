var weather = require('./weather.js')
var location = require('./location.js')

var argv=require('yargs')
.option('location',{
    type:'string',
    alias:'l',
    demand:false,
    describe:'Enter city to get weather info',

}).help('help').argv

if(typeof argv.l==='string' && argv.l.length>0){

    weather(argv.location,function(currentWeather){
        console.log(currentWeather);
    })
}else{
    console.log(`location not provide, detecting the current city ..... `)
    
    location(function(loc){
        
        if(!loc){
            console.log('unable to guess');
            return;
        }
        console.log(`\nyou are in ${loc} city \n`);

        weather(loc,function(currentWeather){
            console.log(currentWeather);
        })
    })
}




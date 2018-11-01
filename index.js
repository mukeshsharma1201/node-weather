const request = require('request');
const argv = require('yargs').argv;

var apiKey = '654b7d0c0b7073160c9b89b67b104d47';
var city = argv.c || 'pune';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  request(url,function(err,resp,body){
    if(err){
        console.log('Error Occured: ',err);
    }else{
        let weather = JSON.parse(body);
        console.log(`It's ${weather.main.temp} degrees in ${weather.name}`);
    }
  });

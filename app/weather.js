'use strict'

	const city = process.argv[2];  // return the three element in the process.argv array which is name of city following the convention - "node weather city"

	if (!city) //check if a city is provided
	{	
		return console.error('Please provide city'); // return string " please provide a city " if no city is provided
	}

	const weather = require('./weather-module'); // require the weather-module.js file

	const apiKey = require('./config.json').openWeatherApiKey; // require the open weather api key from the config.json file

	weather(apiKey, city, (error, results)=>  
	{
	  results.list.forEach((forecast)=> // run a forEach loop to return the date text and main temp from the json file requested.
	  {
		console.log(forecast.dt_txt, forecast.main.temp, 'C');// display the data text, main temperature in celcius  and string 'C' as the unit.
	  })
	})



'use strict'

	const http = require('http');
		module.exports = (apiKey, city, callback)=>
		{
		city = encodeURIComponent(city);
		http.get({
		  host: 'api.openweathermap.org',
		  path: `/data/2.5/forecast/?q=${city}&APPID=${apiKey}&units=metric` // a string literal ES6 that shows the path of the api.( 5days 3hrs interval call)
		}, 
		(response)=> {
		  // Continuously update stream with data
		  let body = '';
		  response.on('data', (d)=>  // get data calls
		  {
			body += d; // pass data to body variable
		  })
		  response.on('end', ()=>  // stop getting  data call
		  {
			// Data reception is done, do whatever with it!
			let parsed = JSON.parse(body); // convert body data to a JSON object
			// console.log(parsed)
			callback(null, parsed); // execute the callback function
		})
	  })
	}
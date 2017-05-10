'use strict';



	const chai = require('jasmine'); 
	const path = require('path');// require the path module to be use path.join('..')... as shown in the  line 7 and 8
	const apiKey = require(path.join('..', 'app/config.json')).openWeatherApiKey ; // require the open weather api key.(Already added to config.json)
	const weather = require(path.join('..', 'app/weather-module.js'));
	const http = require('http'); // require the http module for node
	let city = 'New York';
	describe('weather app',  ()=> {
		
		 beforeAll(()=> {  // beforeAll()is used to set the jasmine default timeout interval. It is passed to all it block in the describe block.
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999; //increased the default timeout interval for jasmine to enable it test all asynchronous calls.
		});
	  it('must return name for the given city', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(results.city["name"]).toEqual('New York');
		  done();
		})
	  });
	  
	  it('must return country for the given city', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(results.city["country"]).toEqual('US');
		  done();
		})
	  });
	  
	  it('must return country for the given city', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(results.city.coord["lat"]).toEqual(40.7143);
		  done();
		})
	  });
	  
	  it('must return object as the datatype for result.city', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(typeof results.city).toEqual(typeof {});
		  done();
		})
	  });
	  
	  it('must return string as the datatype for city name', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(typeof city).toEqual(typeof ' ');
		  done();
		})
	  });
	  
	  it('must return null as the datatype for city name', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(city).not.toBe(null);
		  done();
		})
	  });
	  
	   it('must return null as the datatype for city name', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(city).not.toBe(null);
		  done();
		})
	  });
	  
	  it('must not return number as the datatype for city name', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(typeof city).not.toBe('number');
		  done();
		})
	  });
	  
	  it('must contain a key "name" in the results.city output', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(Object.keys(results.city)).toContain('name');
		  done();
		})
	  });
	  
	  it('must not return "undefined" as value for city name', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(results.city).not.toBe(undefined);
		  done();
		})
	  });
	  
	   it('must contain a key "name" in the results.city output', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null)
		  expect(Object.keys(results.list[0])).toContain('dt_txt');
		  done();
		})
	  });
	  
	  it('must return "number" as the datatype for main.temp', (done)=>{
		weather(apiKey, city, (error, results)=>{
		  expect(error).toBe(null);
		  expect(typeof results.list[0].main["temp"]).toBe('number');
		  done();
		})
	  });
	  
	});

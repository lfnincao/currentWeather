var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Langley,ca&APPID=d7ef51fece7c838df1c544aed4e930e0&units=metric';

var server = http.createServer(function(request, response) {
    
     var request = require("request");

     request(url, function(err, res, body) {
     	var data = JSON.parse(body);
     	var sunsetTime = new Date(data.sys['sunset']);
     	
        response.write("<html><body><div id='cont'>");
      	response.write("<h2>City: " + data['name'] + "<br></h2>");
      	response.write("<h2>Temperature: " + data.main['temp'] + " &#x2103;<br></h2>");
      	response.write("<h2>Sunset: " + sunsetTime + "<br></h2>");
      	response.write("</div></body></html>");
      

      	response.end();
     });


     
}).listen(7777);

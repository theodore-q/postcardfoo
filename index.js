var request = require('request');
var Hapi = require('hapi');
var server = new Hapi.Server();

var apiKey = 'xxxxxxxx';
var ajaxURL = 'https://dash.stannp.com/api/v1/postcards/create?api_key=' + apiKey

var formData = {name:"rXXavi",age:"31",front:'http://i.imgur.com/Y7HdM5N.jpg'}; //Array 


function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }

var server = new Hapi.Server();

server.connection({port: 3000}); // tell hapi which TCP Port to "listen" on

server.route({

    method: 'GET',        // define the method this route will handle
    path: '/{yourname*}', // this is how you capture route parameters in Hapi
    handler: function(req, reply) { // request handler method
        reply('Hello ' + req.params.yourname + '!'); // reply with text.
    }
});

server.route({
	config: {
	    cors: {
	        origin: ['http://s.codepen.io'],
	      //  additionalHeaders: ['cache-control', 'x-requested-with']
	    }
	},
    method: 'POST',        // define the method this route will handle
    path: '/66c1c40c9276055308ee8c7cea91daa0', // this is how you capture route parameters in Hapi
    handler: function(req, reply) { // request handler method

    	req.payload['test'] = 'true'
    	console.log(req.payload.test)
    	

    	request.post(ajaxURL, 

    		{form:req.payload},

    		function(err,httpResponse,body){

    			console.log(req.payload)
    	//		console.log(formData)
    		
    		console.log(body)
    		//console.log(req.payload)
        	reply( 
        	//JSON.stringify(body)
        	body
        	); // reply with text.
    	})
    }
});


server.start(function () { // start the Hapi server on your localhost
    console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
});

module.exports = server;
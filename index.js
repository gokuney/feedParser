var express = require('express');
var app = express();
var xmlParser = require('xml2json');




app.get('/', function(req, res) {


    res.send('API Home');


});




/*==============================
=            MARKUP            =
==============================*/

/**
 *
 * COPY/UNCOMMENT THE FOLLOWING BLOCK TO CREATE MORE APIs (REPLACE RELEVANT TEXT WITHIN <>s )
 *
 */

/*
//Start code

app.get('/<API_ROUTE>', function (req, res) {


var http=require('http');

   http.get('<API_URL>', function(data){
        var str = '';
        console.log('Response is '+data.statusCode);

        data.on('data', function (chunk) {
              //console.log('BODY: ' + chunk);
               str += chunk;
         });

        data.on('end', function () {

             //got the data, now parse

             var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
console.log(json);
res.send(json);
         });

  });



});
  //------END CODE
*/



/*=====  End of MARKUP  ======*/




//Start code for Fitness API

app.get('/fitnessAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/fitness/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
          //  console.log(json);
            res.send(json);
        });

    });



});
//------END CODE for Fitness API



//Start code for Pets API
app.get('/petsAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/pets/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
          //  console.log(json);
            res.send(json);
        });

    });



});
//------END CODE for Pets API





app.get('/nutritionAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/nutrition/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
          //  console.log(json);
            res.send(json);
        });

    });



});


app.get('/foodAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/food/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
      //      console.log(json);
            res.send(json);
        });

    });


});

// Family API


app.get('/familyAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/family/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
      //      console.log(json);
            res.send(json);
        });

    });


});


//Family API Ends

// Mind and Body API


app.get('/mindAndBodyAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/mind-body/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
      //      console.log(json);
            res.send(json);
        });

	data.on('error' , function(){
console.log("There was an error");
});

    });


});


//Mind and Body API Ends


// Home API


app.get('/homeAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/home/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
      //      console.log(json);
            res.send(json);
        });

    });


});


//Home API Ends




// Recipes API


app.get('/recipesAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/recipes/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
      //      console.log(json);
            res.send(json);
        });

    });


});


//Recipes API Ends


// Weight Loss API


app.get('/weightLossAPI', function(req, res) {


    var http = require('http');

    http.get('http://www.health.com/weight-loss/feed', function(data) {
     data.setEncoding('utf8');
        var str = '';
      //  console.log('Response is ' + data.statusCode);

        data.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        data.on('end', function() {

            //got the data, now parse

            var xml = str;
            xml = xml.replace(/&nbsp;/g, " ");
            var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default
      //      console.log(json);
            res.send(json);
        });

    });


});


//Weight Loss API Ends





app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});


var express = require('express');
var app = express();
var xmlParser = require('xml2json');




app.get('/', function (req, res) {
  

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
var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default 
console.log(json);
res.send(json);
         });

  });



});
  //------END CODE
*/



/*=====  End of MARKUP  ======*/





app.get('/nutritionAPI', function (req, res) {
  

var http=require('http');

   http.get('http://www.health.com/nutrition/feed', function(data){
        var str = '';
        console.log('Response is '+data.statusCode);

        data.on('data', function (chunk) {
              //console.log('BODY: ' + chunk);
               str += chunk;
         });

        data.on('end', function () {
             
             //got the data, now parse

             var xml = str;
var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default 
console.log(json);
res.send(json);
         });

  });



});








app.get('/foodAPI', function (req, res) {
  

var http=require('http');

   http.get('http://www.health.com/food/feed', function(data){
        var str = '';
        console.log('Response is '+data.statusCode);

        data.on('data', function (chunk) {
              //console.log('BODY: ' + chunk);
               str += chunk;
         });

        data.on('end', function () {
             
             //got the data, now parse

             var xml = str;
var json = xmlParser.toJson(xml); //returns a string containing the JSON structure by default 
console.log(json);
res.send(json);
         });

  });



});














app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

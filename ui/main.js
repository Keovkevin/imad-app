//counter code
var button = document.getElementById("counter");
button.oncLick = function() {

//Create A Request To Counter Endpoint
var request = new XMLhttpRequest();
//Capture The Response And Store In HTML
request.onreadystatechange = function() {
if (request.readyState === XMLHttpRequest.DONE) 
{
//Take Some Action
if (request.status === 200) 
{ 
var counter= request.responseText; 
var span = document.getElementById("count");
span.innerHTML = counter.toString();
}

  }
};
//Make A Request
request.open('GET', 'http://shubhamshekhar089.imad.hasura-app.io/counter', true);
request.send(null);
};



















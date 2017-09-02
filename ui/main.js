//Submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    //Capture The Response And Store In HTML
    request.onreadystatechange = function() {
       if (request.readyState === XMLHttpRequest.DONE) 
         {
           //Take Some Action
             if (request.status === 200) {
                 alert('Logged in successfully');
             } else if (request.status === 403){
                 alert('Username/password is incorrect');
             } else if (request.status === 500) {
                 alert('Something went wrong on the server');
             }
         }   
    //not done yet
};

//Make A Request
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', 'http://shubhamshekhar089.imad.hasura-app.io/login');
request.setRequestHeader('Content-Type', 'application/json', true);
request.send(JSON.stringify({username: username, password: password}));

};


















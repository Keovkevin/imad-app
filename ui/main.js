//counter code
var button = document.getElementById('counter');

 button.onclick=function(){

//create a request object
    var request= new XMLHttpRequest();
    //capture the response  and store it in a variable
    request.onreadystatechange = function(){
       if(request.readystate===XMLHttpRequest.DONE){
            //take some action
          if (request.status===200){
             var counter= request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
          }  
       }
        //not done yet
       };
    //render the variable in the correct span
   
//make the request
    request.open('GET','http://shubhamshekhar089.imad.hasura-app.io/',true);
    request.send(null);
};




















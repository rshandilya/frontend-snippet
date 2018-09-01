//STEP1 : How to make Ajax request

// instantiate Ajax Object
httpRequest = new XMLHttpRequest();
// Attach callback function
httpRequest.onreadystatechange = nameOfTheFunction;
//or
httpRequest.onreadystatechange = function(){
    // Process the server response here.
};
// for POST send MIME type of request.
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// first argument http method, second-url, third whether asynchronous or not
httpRequest.open('GET', 'http://www.example.org/some.file', true);
//The parameter to the send() method can be any data you want to send to the server if POST-ing the request
//Form data should be sent in a format that the server can parse
httpRequest.send();












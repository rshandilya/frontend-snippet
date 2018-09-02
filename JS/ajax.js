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


// STEP2 Handling Response

/*****  httprequest.readystate states
    0 (uninitialized) or (request not initialized)          - UNSENT  
    1 (loading) or (server connection established)           -OPEN
    2 (loaded) or (request received)                         -HEADERS_RECEIVED
    3 (interactive) or (processing request)                   LOADING
    4 (complete) or (request finished and response is ready) -DONE
*/
// ===DONE (state 4)
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // Everything is good, the response was received.
} else {
    // Not ready yet.
}

// check the HTTP response status codes 

if (httpRequest.status === 200) {
    // Perfect!
} else {
    // There was a problem with the request.
    // For example, the response may have a 404 (Not Found)
    // or 500 (Internal Server Error) response code.
}

// Two options to access data
httpRequest.responseText // – returns the server response as a string of text
httpRequest.responseXML 


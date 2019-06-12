/******* The Fetch API *******/

fetch('https://example.com/data')
.then( // code that handles the response )
.catch( // code that runs if the server returns an error )

// Response Interface //

const url = 'https:example.com/data';
fetch(url)
.then((response) => {
if(response.ok) {
return response;
} t
hrow Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )

// Text Responses //

fetch(url)
.then( response => response.text() ); // transforms the text stream into a
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))

// File Responses //
fetch(url)
.then( response => response.blob() ); // transforms the data into a blob ob
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))

// JSON Responses //
fetch(url)
.then( response => response.json() ); // transforms the JSON data into a Jav
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))

// Creating Response Objects //
const response = new Response( 'Hello!', {
ok: true,
status: 200,
statusText: 'OK',
type: 'cors',
url: '/api'
});

// Request Interface //
/*** 
The Request constructor include following properties:
url, method, headers, mode, cache, credentials, redirect
***/

const request = new Request('https://example.com/data', {
method: 'GET',
mode: 'cors',
redirect: 'follow',
cache: 'no-cache'
});

fetch(request)
.then( // do something with the response )
.catch( // handle any errors)

// Alternativly
fetch('https://example.com/data', {
method: 'GET',
mode: 'cors',
redirect: 'follow',
cache: 'no-cache'
})
.then( // do something with the response )
.catch( // handle any errors)

// Headers Interface //
const headers = new Headers();
const headers = new Headers({ 'Content-Type': 'text/plain'});
headers.has('Content-Type');
headers.set('Content-Type', 'application/json');
headers.append('Accept-Encoding','gzip,deflate');

// Putting all Together //

const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset'})
const request = (url,{
headers: headers
})
fetch(request)
.then( function(response) {
if(response.ok) {
return response;
}t
hrow Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )

/**** Receiving Information *****/
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

textButton.addEventListener('click', () => {
fetch(textURL)
.then( response => {
outputDiv.innerHTML = 'Waiting for response...';
if(response.ok) {
return response;
} 
throw Error(response.statusText);
})
.then( response => response.text() )
.then( text => outputDiv.innerText = text )
.catch( error => console.log('There was an error:', error))
},false);


apiButton.addEventListener('click', () => {
fetch(apiURL)
.then( response => {
outputDiv.innerHTML = 'Waiting for response...';
if(response.ok) {
return response;
} t
hrow Error(response.statusText);
})
.then( response => response.json() )
.then( data => outputDiv.innerText = data.value )
.catch( error => console.log('There was an error:', error))
},false);

/******* Sending Information ******/
const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
event.preventDefault();
const number = form.task.value;
const task = {
userId: 1,
title: form.task.value,
completed: false
} 
const data = JSON.stringify(task);
const url = 'https://jsonplaceholder.typicode.com/todos';
const headers = new Headers({
'Accept': 'application/json',
'Content-Type': 'application/json'
});
const request = new Request(url,
{ 
method: 'POST',
header: headers,
body: data
} ) 
fetch(request)
.then( response => response.json() )
.then( task => console.log(`Task saved with an id of ${task.id}`) )
.catch( error => console.log('There was an error:', error))
}


// FormData //

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
event.preventDefault();
const task = new FormData(form);
const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
const headers = new Headers({
'Accept': 'application/json',
'Content-Type': 'application/json'
});
const request = new Request(url,
{
method: 'POST',
mode: 'cors',
header: headers,
body: JSON.stringify(task)
}
) 
fetch(request)
.then( response => response.json() )
.then( data => console.log(`${data.title} saved with an id of ${data.id}`)
.catch( error => console.log('There was an error:', error))
}

/************/
data = new FormData(); // no form provided as an argument creates an empty
data.append('height', 75);


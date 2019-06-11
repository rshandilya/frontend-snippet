
/**** Event Listeners *****/

document.body.addEventListener("click", doSomething);

// Inline Event Handlers
<p onclick="console.log('You Clicked Me!')">Click Me</p>

// Older Event Handlers
document.onclick = function (){ console.log('You clicked on the page!'); }

// Using Event Listeners
document.body.addEventListener('click',doSomething);

addEventListener('click', () => alert('You Clicked!'));

function doSomething() {
alert('You Clicked!');
} a
addEventListener('click',doSomething);

/************* Example Code****************
<!doctype html>
<html lang='en'>
<head>
<meta charset='utf-8'>
<title>Events Examples</title>
<style>
p {
width: 200px;
height: 200px;
margin: 10px;
background-color: #ccc;
float: left;
} .
highlight {
background-color: red;
}
</style>
</head>
<body>
<p id='click'>Click On Me</p>
<p id='dblclick'>Double Click On Me</p>
<p id='mouse'>Hover On Me</p>
<script src='main.js'></script>
</body>
</html>
**********************************************/

/******* The Event Object  *******/

function doSomething(event){
console.log(event.type);
}

// event target - returns a reference to the node that fired the event
function doSomething(event){
console.log(event.target);
}

// Coordinates of an Event

function doSomething(event){
console.log(`screen: (${event.screenX},${event.screenY}), 
             page: (${event.pageX}, ${event.pageY}), 
             client: (${event.clientX}, ${event.clientY}`
)}

/******* Types of Events  *******/

// Mouse Events //

const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
event.target.classList.toggle('highlight');
}
// doubleclick event will always cause the click event to fire.

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!)

// Keyboard Events //
/****
* keydown: when a key is pressed and will continue to occur if the key is held down 
* keypress: between keydown and keyup, only that produce character and 'Delete' key.
* keyup: when a key is released.
****/
addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the
addEventListener('keypress', (event) => console.log(`You pressed the ${even.key}`)

// Modifier Keys : Shift, Ctrl, Alt and meta (Cmd on Mac)

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key}`)
/***
shiftKey, ctrlKey, altKey, and metaKey are all properties of the event object 
and return true if the relevant key was held down
***/

addEventListener('keydown', (event) => {
if (event.key === 'c' && event.ctrlKey) {
console.log('Action canceled!');
} }
);

addEventListener('click', (event) => {
if (event.shiftKey) {
console.log('A Shifty Click!');
} }
);

// Touch Events //
/***
* touchstart:  fires as soon as a user touches the screen.
click event fires when the screen is touched, but there’s a slight delay of 300ms.
* touchend:
* touchmove: 
* touchenter:
* touchleave:
* touchcancel:
***/ 
// Touch Event Properties
/***
events.touches.length
events.touches[0]
touch.screenX, touch.screenY,  touch.radiusX, touch.radiusY, touch.force, touch.identifier
***/

/******* Removing Event Listeners  *******/

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
console.log('Enjoy this while it lasts!');
onceParagraph.style.backgroundColor = 'pink';
onceParagraph.removeEventListener('click',remove);
}

/******* Stopping Default Behavior  *******/

<p>
<a id='broken' href='https://sitepoint.com'>Broken Link</a>
</p>
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
event.preventDefault();
console.log('Broken Link!');
});

/***
* but each event object has a property called cancellable that returns false if it cannot be prevented.
* You can also see if the default behavior has been prevented by checking the defaultPrevented property.
***/


/******* Event Propagation  *******/
/***
There are two forms of event propagation: bubbling and capturing. The addEventListener() method has a third parameter, 
it defaults to false, which is why bubbling happens by default
***/

// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );

// Stopping the Bubbling Phase

liElement.addEventListener('click', (event) => {
console.log('clicked on li');
event.stopPropagation(); }, false);


/******* Event Delegation  *******/

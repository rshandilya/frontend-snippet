/**************************************
<!------------heros.html---------->
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Justice League</title>
</head>
<body>
<header>
<h1 id='title'>Justice League</h1>
</header>
<ul id='roster'>
<li class='hero'>Superman</li>
<li class='vigilante hero' id='bats'>Batman</li>
<li class='hero'>Wonder Woman</li>
</ul>
</body>
</html>
*****************************/

const body = document.body;
body.nodeType; // 1
/*
 1 - element
 2 - attribute
 3 - text
 8 - comment
 9 - body
*/

body.nodeName; // "BODY"

/******** Legacy DOM Shortcut Methods********/
Document.body 
Document.images 
Document.links
Document.anchors 
Document.forms

for (let i=0 ; i < document.images.length ; i++) {
// do something with each image using document.images[i]
}

const imageArray = Array.from(document.images);
const imageArray = [...document.images];

/*******Getting An Element By Its ID**********/

const h1 = document.getElementById('title');

/******Get Elements By Their Tag Name*********/

const listItems = document.getElementsByTagName('li');
listItems[0]; // <li class='hero'>Superman</li>
listItems[1]; // <li class='vigilante hero' id='bats'>Batman</li>

/********** Get Elements By Their Class Name **********/

const heroes = document.getElementsByClassName('hero');
heroes.length; // 3
document.getElementsByClassName('villain').length; // 0

/********* Query Selectors  ***********/

document.querySelector() // return first element
document.querySelectorAll()

//Query Selectors

document.querySelector('#bats');
document.querySelectorAll('.hero');
const wonderWoman = document.querySelector('li:last-child');
const ul = document.querySelector('ul#roster');
const batman = ul.querySelector('li#bats')

const ul = document.querySelector('ul#roster');
ul.querySelector('li#bats')
// jquery equivalent 
$('ul#roster').find('li#bats');


/********** Navigating the DOM Tree **********/

const heroes = document.getElementById('roster');
heroes.childNodes // return all nodes
/* NodeList [#text "
", <li class="hero">, #text "
", <li id="bats">, #text "
", <li class="hero">, #text "
", <li class="hero">, #text "
*/

heroes.children // returns element nodes that are children of
heroes.children.length

heroes.firstChild // #text " "

heroes.lastChild // #text " "

const wonderWoman = document.querySelector('ul#roster li:last-child)  
wonderWoman.parentNode // <ul id='roster'>…</ul>

wonderWoman.nextSibling // #text " "

wonderWoman.previousSibling // #text " "

// Finding the Value of a Node //

const textNode = wonderWoman.firstChild; // "Wonder Woman"
textNode.nodeValue;
wonderWoman.textContent // "Wonder Woman"

/********** Getting and Setting Attributes **********/

// Getting An Element’s Attributes //

wonderWoman.getAttribute('class');  // "hero"
wonderWoman.getAttribute('src'); // null

// Setting An Element’s Attributes //
wonderWoman.setAttribute('class', 'villain');
wonderWoman.getAttribute('class'); // "villain"
wonderWoman.setAttribute('id','amazon');
wonderWoman.getAttribute('id'); // 'amazon'

// Dot Notation
wonderWoman.id; // 'amazon'
wonderWoman
// <li class="villain" id="amazon">Wonder Woman</li>

// Classes Of An Element //

wonderWoman.className; // "villain"
wonderWoman.className = 'hero' // "hero

// Changing the className property of an element by assignment will overwrite all other classes that have already been set on the element.

wonderWoman.classList.add('warrior');
wonderWoman.className;
wonderWoman.classList.remove('warrior');

wonderWoman.classList.toggle('hero'); // will remove the 'hero'
wonderWoman.classList.toggle('sport'); // will add the 'hero' 

wonderWoman.classList.contains('hero'); // true
wonderWoman.classList.contains('villain'); // false

/*********  Creating Dynamic Markup  ***********/
// Creating An Element 
const flash = document.createElement('li');

// Creating a Text Node
const flashText = document.createTextNode('Flash');

// Appending Nodes
flash.appendChild(flashText);

const flash = document.createElement('li');
flash.textContent = 'Flash';

heroes.insertBefore(aquaman,wonderWoman);

heroes.removeChild(aquaman);

// Replacing Elements on a Page //
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);

// innerHTML  : It returns all the child elements of an element as a string of HTML.

heroes.innerHTML
/* "
<li class=\"hero\">Superman</li>
<li class=\"vigilante hero\" id=\"bats\">Batman</li>
<li class=\"hero\">Wonder Woman</li>
" */
h1.innerHTML = 'Suicide Squad';
heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Kill

/********* Updating CSS ***********/
const heroes = document.getElementById('roster');
const superman = heroes.children[0];
superman.style.border = "red 2px solid"; // "red 2px solid"

// Camel Case Properties //
superman.style.backgroundColor = 'blue'; // background-color

superman.style['background color'] = 'blue';

// Disappearing Act
superman.style.display = 'none';
superman.style.display = 'block'; // reappear

// Checking Style Properties

getComputedStyle(superman); // read-only  property
getComputedStyle(superman).getPropertyCSSValue('color').cssText;


/*********   END  ***********/

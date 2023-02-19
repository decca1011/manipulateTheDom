var itemlist =document.querySelector("#items");
//parentNode
//console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor ="red";
//console.log(itemlist.parentNode.parentNode);

//parentElement
 console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor ="red";
// console.log(itemlist.parentElement.parentElement);

// childNodes

// console.log(itemlist.childNodes);

// console.log(itemlist.children)
// console.log(itemlist.children[1].style.backgroundColor ="yellow");

// // firstChild

// console.log(itemlist.firstChild);

// // firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent= "mc howk hello"

// console.log(itemlist.firstChild);

// // lastChild
// console.log(itemlist.lastChild);
// itemlist.lastChild.textContent= "mc howk hello"

// lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent= "mc howk hello 4"

//nexttSibling
// console.log(itemlist.nextSibling)

//nextElementSibling
// console.log(itemlist.nextElementSibling)



// // previousSibling
// console.log(itemlist.previousSibling);

// //peviousElementSibling

// console.log(itemlist.previousElementSibling)

// itemlist.previousElementSibling.style.color ="green"

//createElement

// create a div
var newDiv = document.createElement("div");

// add class
newDiv.className = "hello";
//add id
newDiv.id='hello1';
//new attr
// newDiv.title='hello world'
 newDiv.setAttribute('title', 'hello div');

//Create text node
 var newDivText = document.createTextNode('hello World to all');

 // Add text to div 

 newDiv.appendChild(newDivText);
 
var container = document.querySelector('header .container');
var cont1 = document.querySelector('header .container');
var h1 = document.querySelector('header.h1 ');
var h2 = document.querySelector('header h1')
// console.log(newDiv);
// console.log(container)

 container.insertBefore(newDiv,h2)
 //cont1.insertBefore(newDiv,h1)

 var newli = document.createElement("li");
  var newlitext = document.createTextNode('hello World');
  newli.appendChild(newlitext);
console.log(newli)
var list =document.getElementById('items')

console.log(list)
//container.insertBefore(newli, list)


const newNode = document.createElement("li");
newNode.className="list-group-item"
// Create a text node:
const textNode = document.createTextNode("hello world");
// Append text node to "li" element:
newNode.appendChild(textNode);

// Insert before existing child:
const list2 = document.getElementById("items");
list.insertBefore(newNode, list2.children[0]);

console.log( list2.children[2])



















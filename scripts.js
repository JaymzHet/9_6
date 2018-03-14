/*
var list = document.getElementById('list'),
	add = document.getElementsByTagName('button'),
	i = 1;
add[i - 1].addEventListener('click', function() {
	var element = document.createElement('li');
    element.innerHTML = 'item' +' '+ i;
    list.appendChild(element);
    i++
	}
);
*/

var list = document.getElementById('list');  
var add = document.getElementById('addElem');

add.addEventListener('click', function () { 
	
	var liElements = list.getElementsByTagName('li'); 
	var element = document.createElement('li'); 
	element.innerHTML = "item " + liElements.length; 
	list.appendChild(element); 
	}
); 

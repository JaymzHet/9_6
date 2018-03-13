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

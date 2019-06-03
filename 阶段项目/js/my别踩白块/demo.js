var main = document.getElementById("main");
var go = document.getElementById("go");
function Map(){
	var map = document.createElement('div')
	var index = document.createElement('div');
	index.setAttribute('class' , 'gezi');
	map.appendChild(index);
}
function clickStart(){
	go.addEventListener('click', function(){
		go.style.display = "none";
		move();
	})
}
clickStart();
var player=1;
var score1 = 0;
var score2 = 0;
var field = [ [1,1,2,2],[3,3,4,4],[5,5,6,6,],[7,7,8,8] ] ;
var clicked = [0,0]

function solver(newclick) {
	if (clicked[0] == 0) {
		clicked[0] = "img"+newclick;
		document.getElementById("img"+newclick).src = document.getElementById("img"+newclick).dataset.altersrc;
		return;
	}
	else if (window.clicked[1] == 0) {
		window.clicked[1] = "img"+newclick;
		document.getElementById("img"+newclick).src = document.getElementById("img"+newclick).dataset.altersrc;
	}
	//resolve
	console.log(clicked);
	var img1 = document.getElementById(clicked[0]).dataset.altersrc;
	var img2 = document.getElementById(clicked[1]).dataset.altersrc;
	console.log(img1);
	console.log(img2);
	if (img1 == img2) {
		setTimeout(correct, 1000);
		if (window.player == 1) {
			window.score1 = parseInt(parseInt(window.score1.value)+parseInt("1"));
		}
		else {
			window.score2 = parseInt(parseInt(window.score2.value)+parseInt("1"));
		}
	}
	else {
		setTimeout(clear, 1000);
	}
}

function correct() {
	document.getElementById(clicked[0]).src = "img/correct.png";
	document.getElementById(clicked[1]).src = "img/correct.png";
	window.clicked[0] = 0;
	window.clicked[1] = 0;
}

function clear() {
	document.getElementById(clicked[0]).src = "img/cover.jpg";
	document.getElementById(clicked[1]).src = "img/cover.jpg";
	if (window.player == 1) {
		window.player = 2;
	}
	else {
		window.player = 1;
	}
	window.clicked[0] = 0;
	window.clicked[1] = 0;
}

function generate(){
	var possible = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	var output = [];
	var swap = 0;
	for (var i = 1; i < 17; i++) {
		swap = "img/img"+possible[i-1]+".png";
		var it = document.getElementById("img"+i);
		it.dataset.altersrc = swap;
		it.width = 150;
		it.height = 150;
	}
	i = 1;
	var j;
	do {
		j = Math.floor((Math.random() * 15) + 1);
		if (possible[j] == 0) {

		}
		else {
			swap = "img/img"+possible[j]+".png";
			document.getElementById("img"+i).dataset.altersrc = swap;
			possible[j] == 0;
			i++;
		}
	} while (i < 17);
}

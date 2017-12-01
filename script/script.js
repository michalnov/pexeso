var player=1;
var score1 = 0;
var score2 = 0;
var field = [ [1,1,2,2],[3,3,4,4],[5,5,6,6,],[7,7,8,8] ] ;
var clicked = [0,0];

function solver(newclick) {
	if (clicked[0] == 0 && clicked[0] != newclick) {
		clicked[0] = newclick;
		document.getElementById(newclick).src = document.getElementById(newclick).dataset.altersrc;
		//document.getElementById(clicked[0]).onclick = "";
		return;
	}
	else if (window.clicked[1] == 0 && clicked[1] != newclick) {
		window.clicked[1] = newclick;
		document.getElementById(newclick).src = document.getElementById(newclick).dataset.altersrc;
		//document.getElementById(clicked[1]).onclick = "";
	}
	else {
		return;
	}
	//resolve
	console.log(clicked);
	var img1 = document.getElementById(clicked[0]).dataset.altersrc;
	var img2 = document.getElementById(clicked[1]).dataset.altersrc;
	console.log(img1);
	console.log(img2);
	if (img1 == img2) {
		setTimeout(correct, 1000);
		console.log("correct");
		if (window.player == 1) {
			window.score1 = parseInt(score1)+parseInt("1");
		}
		else {
			window.score2 = parseInt(score2)+parseInt("1");
		}
		score();
	}
	else {
		setTimeout(clear, 1000);
		console.log("incorrect");
		score();
	}
}

function correct() {
	document.getElementById(clicked[0]).src = "img/correct.png";
	document.getElementById(clicked[0]).onclick = "";
	document.getElementById(clicked[1]).src = "img/correct.png";
	document.getElementById(clicked[1]).onclick = "";
	window.clicked[0] = 0;
	window.clicked[1] = 0;
}

function clear() {
	document.getElementById(clicked[0]).src = "img/cover.jpg";
	//var swap = "solver('"+clicked[0]+"');";
	//document.getElementById(clicked[0]).onclick = swap;
	document.getElementById(clicked[1]).src = "img/cover.jpg";
	//var swap2 = "solver('"+clicked[1]+"');";
	//document.getElementById(clicked[1]).onclick = swap2;
	//console.log(swap);
	//console.log(swap2);
	if (window.player == 1) {
		window.player = 2;
	}
	else {
		window.player = 1;
	}
	window.clicked[0] = 0;
	window.clicked[1] = 0;
}

function score() {
	document.getElementById("pl1").value = "Player 1 score: "+parseInt(score1);
	document.getElementById("pl2").value = "Player 2 score: "+parseInt(score2);
	var total = parseInt(score1) + parseInt(score2);
	if (total == 8) {
		if (score1 > score2) {
			alert("Player 1 is winer");
			generate();
			score1 = 0;
			score2 = 0;
			clicked[0] = 0;
			clicked[1] = 0;
		}
		else if (score2 > score1) {
			alert("Player 2 is winer");
			generate();
			score1 = 0;
			score2 = 0;
			clicked[0] = 0;
			clicked[1] = 0;
		}
		else {
			alert("??");
			generate();
			score1 = 0;
			score2 = 0;
			clicked[0] = 0;
			clicked[1] = 0;
		}
	}
}

function generate(){
	score1 = 0;
	score2 = 0;
	clicked[0] = 0;
	clicked[1] = 0;
	var possible = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	var output = [];
	var swap = 0;
	for (var i = 1; i < 17; i++) {
		swap = "img/img"+possible[i-1]+".png";
		var it = document.getElementById("img"+i);
		it.dataset.altersrc = swap;
		it.src = "img/cover.jpg";
		it.width = 150;
		it.height = 150;
	}
	i = 1;
	var j = 0;
	var h = 0;
	do {
		j = Math.floor((Math.random() * 16) + 1);
		if (possible[j-1] == 0) {
			console.log(j);
			h++;
			continue;
		}
		else {
			swap = "img/img"+possible[j-1]+".png";
			document.getElementById("img"+i).dataset.altersrc = swap;
			console.log(possible[j-1]);
			possible[j-1] = 0;
			i++;
			h++;
		}
	} while (i < 17 && h < 500);
	console.log(possible);
	score();
}

var player=1;
var score1 = 0;
var score2 = 0;
var field = [ [1,1,2,2],[3,3,4,4],[5,5,6,6,],[7,7,8,8] ] ;
var clicked = [0,0]

function solver(newclick) {
	if (window.clicked[0] == 0) {
		window.clicked[0] = newclick;
		document.getElementById(window.clicked[0]).src = document.getElementById(window.clicked[0].getAttribute("data-alter-src").value);
		return;
	}
	else if (window.clicked[1] == 0) {
		window.clicked[1] = newclick;
		document.getElementById(window.clicked[1]).src = document.getElementById(window.clicked[1].getAttribute("data-alter-src").value);
	}
	//resolve
	var img1 = document.getElementById(window.clicked[0]).getAttribute("data-alter-src").value;
	var img2 = document.getElementById(window.clicked[1]).getAttribute("data-alter-src").value;
	if (img1 == img2) {
		document.getElementById(clicked[0]).src = "img/correct.png";
		document.getElementById(clicked[1]).src = "img/correct.png";
		if (window.player == 1) {
			window.score1 = parseInt(parseInt(window.score1.value)+parseInt("1"));
		}
		else {
			window.score2 = parseInt(parseInt(window.score2.value)+parseInt("1"));
		}
	}
	else {
		setTimeout(clear, 2000);
	}
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


//console.log(field);
shuffle();
function shuffle() {
	var i;
	for (i=0;i<20;i++)
	{
	var r1=Math.floor( Math.random()*4 );
	var c1=Math.floor( Math.random()*4 );
	var r2=Math.floor( Math.random()*4 );
	var c2=Math.floor( Math.random()*4 );
	temp = field[r1][c1];
	field[r1][c1]=field[r2][c2];
	field[r2][c2]=temp;
	}
	console.log("Shuffle");
	console.log(field);

}
function clickimg(value){
	var row=Math.floor(value/10);
	var col=value%10;
	//console.log("You click row"+row+"col:"+col);
	if (field[row][col]) {
		var source="img/img"+field[row][col]+".png";
		var imageid="img"+row+col;
		console.log(imageid);
		document.getElementById(imageid).src=source;

	}

}

function generate(){
	var possible = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	var dymensionX = 4;
	var dymensionY = 4;
	var output = [];
	var swap = 0;
	var i = 0;
	do {

	} while (i < possible.length);
}

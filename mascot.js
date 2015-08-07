var nameArray = [];
var rand1=99, rand2=99; 
var old1=99, old2=99;
var request = new XMLHttpRequest();
request.onload = function (B) { 
	return function () {

		var fileLines = this.responseText.split('\n');
		console.log(fileLines);
		for (var i = fileLines.length - 1; i >= 0; i--) {
			fileLines[i] = fileLines[i].split(',');
		};
		nameArray = fileLines;
	}
}(this);

request.open('GET', 'names.txt');
request.send();


function mascotMaker(length) {
	while (rand1 == old1){
		rand1 = Math.floor((Math.random() * length));
	}

	while (rand1 == rand2 || rand2 == old2){
		rand2 = Math.floor((Math.random() * length));
	}
	
	old1 = rand1;
	old2 = rand2;
	console.log(nameArray[rand1][0] + nameArray[rand2][1] + " ("+rand1+","+rand2+")");
	return nameArray[rand1][0] + nameArray[rand2][1];
}

function mascotDesc() {
	var front = nameArray[rand1][2];
	var back = nameArray[rand2][2];

	return front + " + " + back;
}

function newMascot() {
	document.getElementById('mascot').innerHTML=mascotMaker(nameArray.length-1);
	document.getElementById('desc').innerHTML=mascotDesc();
}

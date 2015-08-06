var nameArray = [];
var rand1, rand2; 
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
	rand1 = Math.floor((Math.random() * length));

	while (true) {
		rand2 = Math.floor((Math.random() * length));

		if (rand1 != rand2) {
			break;
		}
	}
	console.log("("+rand1+","+rand2+")");
	return nameArray[rand1][0] + nameArray[rand2][1];
}

function mascotDesc() {
	var front = nameArray[rand1][2];
	return front;
}

function newMascot() {
	document.getElementById('mascot').innerHTML=mascotMaker(nameArray.length-1);
	document.getElementById('desc').innerHTML=mascotDesc();
}

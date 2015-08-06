var nameArray = [];
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
	var rand1 = Math.floor((Math.random() * length));

	while (true) {
		var rand2 = Math.floor((Math.random() * length));

		if (rand1 != rand2) {
			break;
		}
	}
	console.log("("+rand1+","+rand2+")");
	return nameArray[rand1][0] + nameArray[rand2][1];
}

function newMascot() {
	return document.getElementById('mascot').innerHTML=mascotMaker(nameArray.length);
}

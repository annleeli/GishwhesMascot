var nameArray = [];
var rand1, rand2; 
var old1, old2;
var request = new XMLHttpRequest();
request.onload = function (B) { 
	return function () {

		var fileLines = this.responseText.split('\n');
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
	var back = nameArray[rand2][3] || nameArray[rand2][2];

	return front + " + " + back;
}

function newMascot() {
	$('#mascot').fadeOut(function(){
		document.getElementById('mascot').innerHTML=mascotMaker(nameArray.length-1);
		$('#mascot').fadeIn();
				$('#desc').fadeIn();
	});
	$('#desc').fadeOut(function(){
		document.getElementById('desc').innerHTML=mascotDesc();
		$('#desc').fadeIn();
	});
}

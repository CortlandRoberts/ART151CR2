var setup = function() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
};

var drawRandomWord = function(words, colourNames, sizes){
  //variable for random colors
		var chosenColourName = random(colourNames);
		fill(chosenColourName);
//variable for random words
		var chosenWord = random(words);
//random text size
		textSize(random(sizes));
//random text position
		var x = random(20, width * 0.8);
		var y = random(100, height * 0.9);
		text(chosenWord, x, y);
};

var draw = function() {
	background(245, 105, 145);

	var colourNames = ["maroon", "skyblue", "black", "whitesmoke", "8BAFBC", "9F5643", "4F4D54" ];
	var words = [
"im not fine", "im okay", "exams","stressed", "I'm happy", "fuck this im done", "I have no motivation", "why do I continue?", "im still single","END HOOKUP CULTURE!"];
	var sizes = [15, 20, 10, 40, 60, 100];

	for (var i = 0; i < 50; i++){
		drawRandomWord(words, colourNames, sizes);
	}


};

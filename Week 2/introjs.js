var name = "Chloe";
alert("Hello " + name);

var answer = prompt("What is your name?");
if(name == answer){
	alert("Hello" + name);
} else {
	alert("That's not your name!");
}

var question1 = prompt("What is the capital of Korea?");
var answer1 = "Seoul";

var question2 = prompt("What is the diameter of a basketball hoop?");
var answer2 = "18in";

var question3 = prompt("What US state name ends with three vowels?");
var answer3 = "Hawaii";

var score = 0;
if(question1 == answer1){
	alert("Correct!");
	score++;
} else{
	alert("Wrong!");
}

if(question2 == answer2){
	alert("Correct!");
	score++;
} else{
	alert("Wrong!");
}

if(question3 == answer3){
	alert("Correct!");
	score++;
} else{
	alert("Wrong!");
}

alert("Your final score is " + score);

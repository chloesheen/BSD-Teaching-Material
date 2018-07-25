var name = prompt("What is your name?");
alert("Hello " + name);

alert("It was a nice day, so Ben decided to ride his bike there. While on the way, the front tire of the bike spun off into a river! Ben lost control of the bike, swerving towards a penguin on the sidewalk! They crashed into each other.")

var answer1 = prompt("What happened to the penguin? Type 1 for 'Penguin survives!', type 2 for 'Penguin got injured', type 3 for 'Penguin is severely injured'");

if(answer1 == "1"){
	alert("Penguin has survived! Both Ben and the penguin happily went on with their days.");
} else if (answer1 == "2"){
	alert("Penguin is injured! Ben had to take penguin to the hospital to assess the injury. Luckily the penguin wasn't too badly injured and they were able to part ways.");
	gameover();
} else if (answer1 == "3"){
	alert("Oh no! Penguin is severely injured. Will he make it out alive?");
	gameover();
} else {
	gameover();
}

function gameover(){
	alert("Game Over. Please refresh the page to start over.");
}
function askname(){
	var name = prompt("What is your name?");
	alert("Hello "+ name + "!");
}

// Things we can improve on
// 1. better/clearer answer choices
// 2. not clear answer options
// 3.

var animal = prompt("What's your favorite animal?");

if(animal == "dog"){
	picture.src = "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&h=350";
} else if(animal == "duck"){
	picture.src = "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350";
} else if(animal == "cow"){
	picture.src = "https://sharesloth.com/wp-content/uploads/2014/05/cute-cow-pictures-15.jpg";
} else{
	alert("That's a new animal for me!");
}

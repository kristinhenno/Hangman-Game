var words= ["sandy", "patrick", "squidward"];

var currentWord = words[Math.floor(Math.random() * words.length)];

var wordLength = [];

var userInput = "z";

var right = [];

var wrong = [];


console.log(currentWord)
console.log(currentWord.length)


function underscores(){
for (var i = 0; i < currentWord.length; i++){
		wordLength.push("_ ");
}
}

function isLetterInWord(letter){
	for (var i = 0; i < currentWord.length; i++){
		if (letter === currentWord[i]){
			return true;
		}	
	}
   return false;
}

document.onkeyup = function(event) {

      // Determines which key was pressed.
       userInput = event.key;


console.log(isLetterInWord(userInput));
}

underscores();

document.querySelector("#word").innerHTML =wordLength.join(" ");

// line 41-45 updates h1 tag for getting started
// var getStarted = document.querySelector("#start");

// console.log(getStarted);
// getStarted.innerHTML = "";
// console.log(getStarted);

// var sbChangingImage = document.querySelector("#sbimage");

// var sbDiv = document.querySelector("#sb");

// sbDiv.innerHTML = "";



// function hangSb(){

// 	sbDiv.innerHTML = sbChangingImage.outerHTML;

// }

// var missedLetters = document.querySelector("#lettersmissed");

// console.log(missedLetters);

// var 

// document.onkeyup = function(event){

// }

//event.key is equal to whatever key user pressed

//sbChangingImage.src = "assets/images/sb" + misses + ".png"
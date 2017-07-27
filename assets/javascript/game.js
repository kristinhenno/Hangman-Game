var words = ["sandy", "patrick", "squidward", "plankton", "pearl", "pineapple", "clarinet"];

var currentWord = words[Math.floor(Math.random() * words.length)];

var wordLength = [];

var userInput = "";

var rightLetters = [];

var wrongLetters = [];

MAX_GUESSES = 8;

var wins = 0;

var audio = new Audio('TRAP.mp3');
audio.play();

function newWord(){		 
		words = ["sandy", "patrick", "squidward"];
		currentWord = words[Math.floor(Math.random() * words.length)];
		wordLength = [];
		underscores();
		rightLetters = [];
		wrongLetters = [];
		document.querySelector("#lettersmissed").innerHTML = wrongLetters;
		MAX_GUESSES = 8;
		userInput = "";
		document.querySelector("#word").innerHTML = wordLength.join(" ");
		document.querySelector("#guessnumber").innerHTML = MAX_GUESSES;
		sbChangingImage = document.querySelector("#sbimage");
        sbChangingImage.src = "assets/images/sb" + MAX_GUESSES + ".png";
        document.querySelector(".sb").classList.add('display');
        document.getElementById("inputform").reset();

         
}

function checkLetters() {
    for (var i = 0; i < currentWord.length; i++) {
        if (userInput === currentWord[i]) {
            wordLength.splice(i, 1, userInput);
            rightLetters.push(userInput);
            document.querySelector("#word").innerHTML = wordLength.join(" ");
        }
    }
}


function underscores() {
    for (var i = 0; i < currentWord.length; i++) {
        wordLength.push("_ ");
    }
}

function isLetterInWord(letter) {
    for (var i = 0; i < currentWord.length; i++) {
        if (letter === currentWord[i]) {
            return true;

        }
    }
    return false;
}

function isLetterUsed(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (userInput === arr[i]) {
            return true;
        }
    }
    return false;
}

function clickButton() {

    userInput = document.getElementById("testinput").value;



    if (userInput.length != 1) {
        alert("Invalid input, try again!");
    } else {

        if (isLetterInWord(userInput)) {

            if (isLetterUsed(rightLetters)) {
                alert("You have already guessed that letter!");
            } else {
          
                checkLetters();
            }

        } else {
            if (isLetterUsed(wrongLetters)) {
                alert("You have already guessed that letter!");
            } else {
                wrongLetters.push(userInput);
                document.querySelector("#lettersmissed").innerHTML = wrongLetters.join(" ");
                MAX_GUESSES--;
                document.querySelector("#guessnumber").innerHTML = MAX_GUESSES;
                sbChangingImage = document.querySelector("#sbimage");
                sbChangingImage.src = "assets/images/sb" + MAX_GUESSES + ".png";
                document.querySelector(".sb").classList.remove('display');
            }
            if (MAX_GUESSES === 0){

            	newWord();
            	wins = 0;
            	document.querySelector("#numberwins").innerHTML = wins;
            }

        }

        var getStarted = document.querySelector("#start");
        getStarted.innerHTML = "";

        document.getElementById("inputform").reset();

        if (rightLetters.length === wordLength.length) {
            console.log("you win");
            wins++;
            document.querySelector("#numberwins").innerHTML = wins;
            newWord();

        }
    }

}



underscores();

document.querySelector("#word").innerHTML = wordLength.join(" ");
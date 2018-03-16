// Create an array of letters
var letters = ["b","d","e","g","h","i","j","k","l","m","n","o","p","q","u","v","w","x","y","z","s","t","a","r","c","f"];
var correctLetters = ["s","t","a","r","c","f"];
var hiddenWord = "StarCraft"; 
console.log("an array of letters");

//Choose letter based on key stroke
var randLetters = Math.floor(Math.random(letters.length));
console.log("assign the random function to randLetters variable based on the length of the letters variable");

document.onkeydown = function(event) {
    var el = document.getElementById("L1");
    el.textContent = event.key;
    }
    console.log("registers a key stroke when key pressed down");

    var hiddenWord = document.getElementById("L2");
    hiddenWord {
        display:none;
    }

if(correctLetters) {

}

// chosenWord = letters[randLetters];
// console.log(chosenWord);


    // // if user guess is right
    // if(chosenWord.indexOf(keyWord) > -1) {
    //     // add to right words array
    //     rightWord.push(keyWord);
    //     documentUnderScore[0].innerHtml = underScore.join('');
    //     console.log(rightWord);
    //     // replace underscore with right letter
    //         underScore[choosenWord.indexOf(keyword)] = keyword; 
    //         documentUnderScore[0].innerHtml = underScore.join(' ');
    //         docRightGuess[0].innerHtml = rightWord; 
    //     //checks to see if user word matches guesses
    //         if(underScore.join('') == choosenWord) {
    //             alert('You Win'); 
    //         }
    //     wrongWord.push(keyWord);
    //     docWrongGuess[0].innerHtml = wrongWord;

    //     underScore[0].innerHtml = generateUnderScore().join(' ');

// //create variable element and designate it to an css id
// var el = document.getElementById("L1");
// console.log("Created element and assigned to CSS component, L1");

// //Create line of code that registers letters into program when key is lifted. 


// //Create loop for every time the correct letter for the word is pressed, it goes into L2 
//     if (correctLetters === function(event) {
//         for (i = 0; i = correctLetters[i]; i++);
//         var elFinal = document.getElementById("L2");
//         elFinal.textContent = correctLetters[i];

//     });
        


// Create variable element and designate it to a css id for correct letters guess
    // var elFinal = document.getElementById("L2");
    //console.log("Create element and assigned to CSS component, L2");

// Create if statement stating that if correctLetters pressed, move them  into L2 box"
    // var userGuess;
    // var elFinal = document.getElementById("L2");
    // if(userGuess === correctLetters.length) {
    // document.onkeydown = function(event) {
    //     elFinal.textContent = event.key;
    //     event.key(correctLetters[i]);
    // }};
   
    // console.log("created userGuess var, push correctLetters into userGuess variable and move typed letters into L2")





// //Create line of code that registers letters into program when key is lifted. 
// document.addEventListener("keydown", (event) => {
//     var userGuess = event.key;
//     confirm("you pressed a key");
//     console.log("registers a key stroke when key pressed down");
// })

// take the variable el and put text inside of it when key is pressed down


// now put the typed letter into the Letters_Space_1 div. 
//var lettersTyped = document.getElementById("Letters_Space_1"); //creates a variable designating an element by id "Letters_Space_!"
//lettersTyped.textContent = userGuess; //tells the variable just created above, to create text based on the userGuess variable
//console.log("Putting the typed letters into the div Letters_Space_1");


// // Pseudo code an array of all the letters in alphabet, array of letters used, and empty array for letter
//var incorrectLetters = ["b","d","e","g","h","i","j","k","l","m","n","o","p","q","u","v","w","x","y","z"];
// var specialLetters = ["s","t","a","r","c","f"];
// var solvedLetters = [];
// var userGuessCorrectLetters; 
// var userGuessIncorrectLetters; 
// var guessNumbers = ["0","1","2","3","4","5","6","7","8","9"];
// var guessesRemaining = 0;
// var userGuess;
// console.log("create variables and letter designations");

// // function is ran when the user presses a key

// // the special letters, when typed, are moved to solved letters in the "Guess_Word" div
// if(userGuess === specialLetters[i]){ //if a letter is typed and is a specialletter, the letter will be displayed and moved to "Guess_Word"
//     var userText = document.getElementById("Guess_Word");
//     specialLetters.push(solvedLetters);
//     // make sure this function shows letter in the correct DIV
// } else{
//     var userText = document.getElementById("Letters_Guessed");
//     incorrectLetters.push(userGuessIncorrectLetters); 
//     // make sure this function shows letter in the correct DIV
// };
// console.log ("on a event.key, if special letters / incorrect letters  are typed they are to be moved to id Guess_Word / Letters_Guessed ");

// // Pseudo code a counter for chances remaining, only 10 chances, once chances reach 10, create alert box, then reset page. 
// for(var i = 0; i === 10; i++)
// if(event.key === incorrectLetters[i]){
//     guessesRemaining;
//     i++;
//    alert("Game Over! You ran out of guesses, try again");
// }
// console.log("for each incorrectLetter pressed, i++ guessesRemaining with the loop given above, at 10 game ends with alert")
// // reset 




 


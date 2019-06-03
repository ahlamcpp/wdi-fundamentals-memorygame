
var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


function flipCard (cardId) {
 console.log("User flipped " + cards[cardId]);
 cardsInPlay.push(cards[cardId]);

};


flipCard(0);
flipCard(2);
checkForMatch(); 


 // if we call it from inside the "flipCard" function, we will diffrent result than in the "Deliverable" image!! 
 // so I did some changes of instructions 
 // the below is the code:

/*
 function flipCard (cardId) {
 console.log("User flipped " + cards[cardId]);
 cardsInPlay.push(cards[cardId]);
 checkForMatch(); 

};


flipCard(0);
flipCard(2);*/

//and the result would be:


/* 
User flipped queen
main.js:10 Sorry, try again.
main.js:16 User flipped king
main.js:10 Sorry, try again.
*/




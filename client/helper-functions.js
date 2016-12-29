module.exports = {
//handSize will be this.state.handSize = [array]
//hand refers to a specific player's hand.
//deck refers to a specific player's deck.
//discardPile refers to a specific player's discard pile


// function targetDiscard(amount, hand) {
// 	var removedCards = []
// 	for(var i = 0; i < amount+1; i++){
// 		var selectedCard = randomCardindex(hand);
// 		removedCards.push(hand.splice(selectedCard, 1));
// 	}
// 	return removedCards	
// }

// function randomCardIndex(targetHand){
// 	var randomIndex = Math.floor(Math.random() * targetHand.length);
// 	return randomIndex;
// }

// function targetDraw(amount, deck, hand){
// 	var drawnCards = topDeckRemove(amount,deck);
// 	var revisedHand = hand.concat(drawnCards);
// 	return revisedHand
// }

// function topDeckRemove(amount, deck){
// 	var removedCards = [];
// 	for(var i = 0; i < amount+1; i++){
// 		removedCards.push(deck.unshift())
// 	}
// 	return removedCards
// }


//traditional card game new deck creation
createDeck: function() {  
  var suits = new Array("H", "C", "S", "D"); //if this was a traditional card game, we would have these 4 suits
  var deck = new Array(); //the array where the new deck will be stored.
  var deckMax = 52; //the total amount of cards in a starter deck
  var index = deckMax / suits.length; //the index is the amount of cards (on average, or in this
  // case, the actual amount in each set (hearts, spades..))

  var count = 0; //We create a counter to navigate our position in a set
  for(i = 0; i <= 3; i++) //we iterate through the number of the suits
      for(j = 1; j <= index; j++)//we now iterate through the position within each of thos suits
          deck[count++] = j + suits[i]; //we now add the the deck the card number (j) tied to 
      //the current suit letter(H or C) like "4S" or "13D"

  return deck; //return the deck
},

//shuffling of the deck.
 shuffleDeck: function(deck) {  //take a particular player's deck
  var i = deck.length;
  var j;
  var tempi;
  var tempj;
  if (i === 0) return false; //if there are no cards in the deck, there isn't anything to shuffle. Return false
  while (i > 0) { //while i is greater than 0. Remember that i is just the length of the deck at the start of the function.
     j = Math.floor(Math.random() * (i + 1)); //j will be a randomized whole number multipled by the amount of cards in the deck
     // +1 so that it can cover the last number (due to indexing since i is just the length)
     tempi = deck[i]; //tempi is the position in the deck at the second to last position
     tempj = deck[j]; //tempj is a randomized position in the deck
     deck[i] = tempj; //we now point the second to last position to equal the given randomized card
     deck[j] = tempi; //we now point the randomized position to equal the second to last card.
     i--; //we reduce i (originally just a number that equaled the length of the deck) and continue this till i is 0
   }
  return deck; //return the shuffled pack.
},

 draw: function(deck, amount, hand, initial) {  
  var cards = new Array(); //The cards that are going to be drawn
  cards = deck.slice(0, amount); //slice from the top of the deck the amount of cards you need to draw

  deck.splice(0, amount); //then splice out those cards from the deck since they have been drawn

  if (!initial) { //if not the first turn
    hand.push.apply(hand, cards); //go ahead and merge the cards in the designated hand with 
    //the sliced/drawn cards. (could have otherwise concatted )
  }

  return cards; //return the cards that are drawn
},

 playCard: function(amount, hand, index) { 
  hand.splice(index, amount) //remove the card(s) from your hand that you just played
  return hand; //then return the hand
}


};
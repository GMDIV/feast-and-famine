
//handSize will be this.state.handSize = [array]
//hand refers to a specific player's hand.
//deck refers to a specific player's deck.
//discardPile refers to a specific player's discard pile
function targetDiscard(amount, hand) {
	var removedCards = []
	for(var i = 0; i < amount+1; i++){
		var selectedCard = randomCardindex(hand);
		removedCards.push(hand.splice(selectedCard, 1));
	}
	return removedCards	
}

function randomCardIndex(targetHand){
	var randomIndex = Math.floor(Math.random() * targetHand.length);
	return randomIndex;
}

function targetDraw(amount, deck, hand){
	var drawnCards = topDeckRemove(amount,deck);
	var revisedHand = hand.concat(drawnCards);
	return revisedHand
}

function topDeckRemove(amount, deck){
	var removedCards = [];
	for(var i = 0; i < amount+1; i++){
		removedCards.push(deck.unshift())
	}
	return removedCards
}
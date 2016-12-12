

var deck = {

	discardCards: {
		famine1: {
			description: "Target player discards 1 card at random.",
			ability: fn
		},
		famine2: {
			description: "Target player discards 2 card at random.",
			ability: fn
		},
		famine3: {
			description: "Target player discards 3 card at random.",
			ability: fn
		},
		massStarvation: {
			description: "All players discard 4 cards.",
			ability: fn
		}, 
		slashAndBurn1: {
			description: "Target player discards 1 card of their choice.",
			ability: fn
		},
		slashAndBurn2: {
			description: "Target player discards 2 cards of their choice.",
			ability: fn
		}
	},
	millCards: {
		drought1: {
			description: "Target player discards the top card off their deck.",
			ability: fn
		},
		drought2: {
			description: "Target player discards the top 2 cards off their deck.",
			ability: fn
		},
		drought3: {
			description: "Target player discards the top 3 cards off their deck.",
			ability: fn
		},
		massDrought1: {
			description: "All players discard the top 3 cards off their deck.",
			ability: fn
		},
		massDrought2: {
			description: "All players discard the top 5 cards off their deck.",
			ability: fn
		}
	},
	drawCards: {
		feast1: {
			description: "Target player draws 1 card.",
			ability: fn
		},
		feast2: {
			description: "Target player draws 2 cards.",
			ability: fn
		},
		feast3: {
			description: "Target player draws 3 cards.",
			ability: fn
		},
		bounty1: {
			description: "All players draw 3 cards.",
			ability: fn
		},
		bounty1: {
			description: "All players draw 5 cards.",
			ability: fn
		},
	},
	otherCards: {
		tax1: {
			description: "Target player discards a card at random. You draw 1 card."
			ability: fn
		},
		tax2: {
			description: "Target player discards 2 cards at random. You draw 2 cards."
			ability: fn
		}
		tax2: {
			description: "Target player discards 3 cards at random. You draw 3 card."
			ability: fn
		},
		sowSeeds1: {
			description: "Add 4 cards from your discard pile to the bottom of your deck. Shuffle your deck.",
			ability: fn
		},
		sowSeeds2: {
			description: "Add 6 cards from your discard pile to the bottom of your deck. Shuffle your deck.",
			ability: fn
		},
		sowSeeds3: {
			description: "Add 8 cards from your discard pile to the bottom of your deck. Shuffle your deck.",
			ability: fn
		},
		mug: {
			description: "Target player reveals their hand. Discard 1 card of your choice. Draw 1 card.",
			ability: fn
		},
		plague: {
			description: "Put this card in target player's deck face up, then shuffle it. If they draw this card, they discard 3 cards from their hand and 6 cards off the top of their deck.",
			ability: fn
		},
		badSeeds: {
			description: "This card cannot be played. This stays in your hand until you can discard it.", 
			ability: fn
		}

	}








}
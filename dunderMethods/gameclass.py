
#__str__ to return the card name as a string, and __gt__ and __lt__ to allow the cards to be compared against each other.

class Card:
    def __init__(self,value,suit):
        self.value = value
        self.suit = suit        

    def __str__(self) -> str:
        value_conv = {"A": "Ace",2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", "J": "Jack", "Q": "Queen", "K": "King"}
        return value_conv[self.value] + " of " + self.suit

    def get_value(self):
        value_conv = {"A": "Ace",2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", "J": "Jack", "Q": "Queen", "K": "King"}
        return value_conv[self.value]

    def __lt__(self,card) -> bool:
        card_strength = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10,"J":11, "Q":12, "K":13, "A":14}
        suit_strength = {"Spades":4,"Diamonds":3,"Clubs":2,"Hearts":1}
        try:
            if card_strength[str(self.value)] < card_strength[str(card.value)]:
                return True
            if card_strength[str(self.value)] == card_strength[str(card.value)] and suit_strength[self.suit] < suit_strength[card.suit]:
                return True
        except:
            print(str(self) + " -> " + str(card))
        return False

    def __gt__(self,card) -> bool:
        card_strength = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10,"J":11, "Q":12, "K":13, "A":14}
        suit_strength = {"Spades":4,"Diamonds":3,"Clubs":2,"Hearts":1}
        if card_strength[str(self.value)] > card_strength[str(card.value)]:
            return True
        if card_strength[str(self.value)] == card_strength[str(card.value)] and suit_strength[self.suit] > suit_strength[card.suit]:
            return True
        return False



card1 = Card(5,"Spades")
card2 = Card(6,"Clubs")
print(card1 == card2)
print(card1 > card2)

// Code your solutions in this file
function writeCards(names, eventName) {
    var thankYouCards = [];
    for (var i = 0; i < names.length; i++) {
      var message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(message);
    }
    return thankYouCards;
  }
/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {

var handValue = [""]
var hand = ["J","K","Q","2","3","4","5","6","7","8","9","A"]
var value (output) =["10", "2","3","4","5","6","7","8","9","1","11"]

  return

  var count = hand.length * value.length;
   count = parseInt(count);
   this.cards = new Array(count);

    for (s = 0; s < hand.length; s++)
    {
      for (r = 0; r < value.length; r++)
      {
         this.cards[s * hand.length + r] = new card(ranks[r], suits[s]);
      }
    }

    for (i in myObj.hand) {
        x += "<h4>" + myObj.cars[i].value + "</h4>";
        for (j in myObj.hand[i].value) {
            x += myObj.hand[i].value[j];
        }
    }

/*
}
function assert(hand, value) {
  let output = handValue(hand);
  console.assert(output === value, `Expecting ${output} to be ${value}`)


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

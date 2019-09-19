var cards=[
    {
      rank: 'queen',
      suit: 'hearts',
      cardImage: "images/queen-of-hearts.png"  
    },
    {
      rank: 'queen',
      suit: 'diamonds',
      cardImage: "images/queen-of-diamonds.png"  
    },
    {
      rank: 'king',
      suit: 'hearts',
      cardImage: "images/king-of-hearts.png"  
    },
    {
      rank: 'king',
      suit: 'diamonds',
      cardImage: "images/king-of-diamonds.png"  
    },
    ];
var cardsInPlay=[];


function checkForMatch(){
    if(cardsInPlay[0]===cardsInPlay[1]){
        alert("You found a match!");
    }
    else{
        alert("Sorry, try again.");
    }

}
function flipCard(){
    var cardId=this.getAttribute('data-id');
    console.log("User flipped "+ cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src',cards[cardId].cardImage);
    if(cardsInPlay.length===2){
    checkForMatch();}
}
 
function resetGame(){
  this.setAttribute('src',"images/back.png");
  var cardElement=document.getElementsByTagName('img');
  for(var i=0;i<cards.length;i++){
    cardElement[i].setAttribute('src',"images/back.png");
}
while(cardsInPlay.length !=0){
cardsInPlay.pop();}


}

function createBoard(){
  var button=document.getElementById('reset');
  button.addEventListener('click',resetGame);
  for(var i=0;i<cards.length;i++){
    var cardElement=document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
}

createBoard();




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
var wins=0;
var loses=0;

function checkForMatch(){
    if(cardsInPlay[0]===cardsInPlay[1]){
        alert("You found a match!");
        wins++;
    }
    else{
        alert("Sorry, try again.");
        loses++;
    }

    updateScore(wins,loses);

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

function updateScore(win,lose){
document.getElementById('win').textContent=win;
document.getElementById('lose').textContent=lose;

}
function resetScore(){
  wins=0;
  loses=0;
  updateScore(wins,loses);
}

function createBoard(){
  var gameRstBtn=document.getElementById('reset');
  gameRstBtn.addEventListener('click',resetGame);

  var scoreRstBtn=document.getElementById('reset-score');
  scoreRstBtn.addEventListener('click',resetScore);

  for(var i=0;i<cards.length;i++){
    var cardElement=document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
}

createBoard();




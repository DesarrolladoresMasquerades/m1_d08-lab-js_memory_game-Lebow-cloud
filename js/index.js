const MemoryGame = require('./memory');

console.log('Memory index.js loaded');

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

let memoryGame = new MemoryGame(cards);

const memoryBoard = document.getElementById('memory-board');

const cardsHTML = memoryGame.cards.map((card) => {
  // These actions can only be taken when the page is completely loaded
  /*
   *
   The following code creates a html element that has the following contents
    <div class="card" data-card-name="${card.name}">
      <div class="back" name="${card.img}"></div>
      <div class="front" style="background: url(img/${card.img}) no-repeat"></div>
    </div>
  */
  const outsideDiv = document.createElement('div');
  outsideDiv.classList.add('card');
  outsideDiv.setAttribute('data-card-name', card.name);

  const insideDivback = document.createElement('div');
  insideDivback.classList.add('back');
  insideDivback.name = card.img;

  const insideDivFront = document.createElement('div');
  insideDivFront.classList.add('front');
  insideDivFront.name = card.img;

  // SAME AS HTML INLINE LOOK LINE 47
  insideDivFront.style = `background: url(img/${card.img}) no-repeat`;

  outsideDiv.appendChild(insideDivback);
  outsideDiv.appendChild(insideDivFront);

  return outsideDiv;
});

cardsHTML.forEach((cardhtml) => { // MAIN LOOp ->> AFTER CLICKING
  cardhtml.addEventListener('click', (event) => {
    const clickedCard = event.currentTarget; // SAVE THE CLICK INFO INTO A CONST to know which div is clicked

    flipCard(clickedCard) // NEED TO TO FUNCTION OUTSIDE

    const playResults = memoryGame.playCard() // NOT DONE YET

    // the following line is based on the fact that I would like to pass complex object from the game logic
    // the object is: { isPair: false, playedCards this.playedCards }

    if(playResults.isPair) {
      playResults.playedCards.forEach(card=> setCardToGuessed(card))
       // NEED TO DO THE GRAPHIC PART NOT DONE YET
    }else{
      playedCards.cards.forEach(card=>{
        setTimeout(()=>flipCard(card), 1 * 1000)
      })

      updateScoreBoard(
        memoryGame.score,
        memoryGame.clickedPairs,
        memoryGame.guessdeParis,

      )

      if(memoryGame.checkIfGameOver()) gameWon()
    }

  });

 

  cardsHTML.forEach((cardHtml) => memoryBoard.appendChild(cardHtml));
  
});


// AFTER THIS TRY TO PLAY A CARD
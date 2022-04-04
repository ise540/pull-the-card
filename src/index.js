import './style.css';
import { Deck } from 'deckofcards';
import clubs from './assets/clubs-game-svgrepo-com.svg';
import diamonds from './assets/diamonds-game-svgrepo-com.svg';
import hearts from './assets/hearts-game-svgrepo-com.svg';
import spades from './assets/spades-game-svgrepo-com.svg';

const cardBackground = document.querySelector('.card');
const cardRank = document.querySelector('.card-rank');
const deck = new Deck();

const card = deck.draw();
console.log(card);

cardRank.textContent = card.rank;

switch (card.suit) {
  case 'C':
    cardBackground.style.backgroundImage = `url(${clubs})`;
    break;
  case 'D':
    cardBackground.style.backgroundImage = `url(${diamonds})`;
    cardRank.style.color = 'red';
    break;
  case 'H':
    cardBackground.style.backgroundImage = `url(${hearts})`;
    cardRank.style.color = 'red';
    break;
  case 'S':
    cardBackground.style.backgroundImage = `url(${spades})`;
    break;
}

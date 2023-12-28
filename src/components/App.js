import React, { useState } from 'react';
import './App.css'
import Deck from './components/Deck';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const shuffleCards = () => {
    setCards(cardImages.sort(() => Math.random() - 0.5));
    setTurns(0);
  }

  console.log(cards, turns)


  return (
    <div className="App" onLoad={shuffleCards}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        <Deck cardImages={cards}></Deck>
      </div>

    </div>
  );
}

export default App
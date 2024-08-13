import { useState } from 'react';
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "rock",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Fsmart-news%2Feverything-everywhere-all-at-onces-racaccoonie-hot-dog-fingers-and-more-for-sale-at-auction-180981691%2F&psig=AOvVaw0bJnzAp2gxpOVoFJ9ssXG_&ust=1723617080539000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD6ppCs8YcDFQAAAAAdAAAAABAR",
  },
  paper: {
    name: "paper",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fagrandelife.net%2Fchewbacca-paper-bag-puppet%2F&psig=AOvVaw0Avwg-P07L01UiZK3aAXIS&ust=1723620090296000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDgq6238YcDFQAAAAAdAAAAABAE",
  },
  scissors: {
    name: "scissors",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclipartmag.com%2Ftag%2Fscissors&psig=AOvVaw0Wbte1R-e8r3CHbwnDfPEk&ust=1723620110923000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiLr7a38YcDFQAAAAAdAAAAABAR",
  },
};

function App() {

  const play = (userChoice) => {
    console.log("play>>>>", userChoice);
    if (userChoice == "rock") {
      console.log("it's rock!")
    }
  };

  return (
    <div>
      <div className='main'>
        <Box name="User" />
        <Box name="Computer" />
      </div>
      <div className='main'>
        <button onClick={()=> play("rock")}>Rock</button>
        <button onClick={()=>play("paper")}>Paper</button>
        <button onClick={()=>play("scissors")}>Scissors</button>
      </div>
    </div>
  );
}

export default App;

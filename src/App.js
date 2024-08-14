import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  paper: {
    name: "paper",
    img: "https://as1.ftcdn.net/v2/jpg/05/61/91/44/1000_F_561914463_0d0fbbIm8Qu1t24Cz01ZNvNh1g3NSLB0.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://t3.ftcdn.net/jpg/00/55/10/40/360_F_55104038_VMb5Bfm1cCVyh93VbJIoK4AQrlmyH0Wc.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    // console.log("play>>>>", userChoice);
    // if (userChoice == "rock") {
    //   console.log("it's rock!")
    // }
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    console.log("computerChoice>>>", computerChoice);
    setComputerSelect(computerChoice);

    const finalJudgement = judgement(choice[userChoice], computerChoice);
    console.log("finalresult>>>", finalJudgement);
    setUserResult(finalJudgement[0]);
    setComputerResult(finalJudgement[1]);
  };

  const judgement = (user, computer) => {
    let finalResult = [];
    if (user.name == computer.name) {
      finalResult[0] = "TIE";
      finalResult[1] = "TIE";
      return finalResult;
    } else {
      if (user.name == "rock") {
        finalResult[0] = computer.name === "scissors" ? "WIN" : "LOSE";
        finalResult[1] = computer.name === "scissors" ? "LOSE" : "WIN";
        return finalResult;
      } else if (user.name == "scissors") {
        finalResult[0] = computer.name === "paper" ? "WIN" : "LOSE";
        finalResult[1] = computer.name === "paper" ? "LOSE" : "WIN";
        return finalResult;
      } else if (user.name == "paper") {
        finalResult[0] = computer.name === "rock" ? "WIN" : "LOSE";
        finalResult[1] = computer.name === "rock" ? "LOSE" : "WIN";
        return finalResult;
      }
    }
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    console.log("item keys>>>", itemArray);

    let randomNum = Math.floor(Math.random() * itemArray.length);
    console.log("random Num>>>", randomNum);

    let finalItem = itemArray[randomNum];
    return choice[finalItem];
  };

  return (
    <div className="background">
      <div className="body">
        <div className="title">
          <h1>Rock Scissors Paper</h1>
        </div>
        <div className="main">
          <Box name="User" item={userSelect} result={userResult} />
          <Box name="Computer" item={computerSelect} result={computerResult} />
        </div>
        <div className="main">
          <button className="button-rock" onClick={() => play("rock")}>
            Rock
          </button>
          <button className="button-paper" onClick={() => play("paper")}>
            Paper
          </button>
          <button className="button-scissors" onClick={() => play("scissors")}>
            Scissors
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

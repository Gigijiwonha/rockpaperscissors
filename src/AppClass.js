import React, { Component } from "react";
import Box from "./component/BoxClass";

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

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
    };
  }

  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    const finalJudgement = this.judgement(choice[userChoice], computerChoice);
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      userResult: finalJudgement[0],
      computerResult: finalJudgement[1],
    });
  };

  judgement = (user, computer) => {
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

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomNum];
    return choice[finalItem];
  };

  render() {
    return (
      <div className="background">
        <div className="body">
          <div className="title">
            <h1>Rock Scissors Paper</h1>
          </div>
          <div className="main">
            <Box
              name="User"
              item={this.state.userSelect}
              result={this.state.userResult}
            />
            <Box
              name="Computer"
              item={this.state.computerSelect}
              result={this.state.computerResult}
            />
          </div>
          <div className="main">
            <button className="button-rock" onClick={() => this.play("rock")}>
              Rock
            </button>
            <button className="button-paper" onClick={() => this.play("paper")}>
              Paper
            </button>
            <button
              className="button-scissors"
              onClick={() => this.play("scissors")}
            >
              Scissors
            </button>
          </div>
        </div>
      </div>
    );
  }
}

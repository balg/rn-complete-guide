import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = (number) => {
    setUserNumber(number);
  };

  const restartGameHandler = () => {
    setUserNumber();
    setRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && !rounds) {
    content = (
      <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds) {
    content = (
      <GameOverScreen
        rounds={rounds}
        userNumber={userNumber}
        onRestartGame={restartGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

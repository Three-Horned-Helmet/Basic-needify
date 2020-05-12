import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FireworksGif from "./fireworks/FireworksGif";

const Home = () => {
  const [chore, setChore] = useState({
    Drink: false,
    Sleep: false,
    Air: false,
    Walk: false,
    "Tidy Room": false,
    Shower: false,
    Food: false,
    "Clean Clothes": false,
    Stretch: false,
  });

  const handlePress = (key) => {
    setChore({
      ...chore,
      [key]: !chore[key],
    });
  };

  const renderChores = [];
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  const createDate = () => {
    return (
      <Text>
        {day} / {month} / {year}
      </Text>
    );
  };

  for (let key in chore) {
    renderChores.push(
      <TouchableOpacity
        key={key}
        onPress={() => {
          handlePress(key);
        }}
      >
        <Text
          style={[chore[key] ? styles.done : styles.needToDo, styles.choreText]}
        >
          {key}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {createDate()}
      {renderChores}
      <View>
        <FireworksGif />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  choreText: {
    textAlign: "center",
    fontSize: 20,
  },
  needToDo: {
    color: "red",
  },
  done: {
    color: "green",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = () => {
  const [chore, setChore] = useState({
    drink: false,
    sleep: false,
    air: false,
  });

  const handlePress = (key) => {
    setChore({
      ...chore,
      [key]: !chore[key],
    });
  };

  const renderChores = Object.keys(chore).map((c, i) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => {
          handlePress(key);
        }}
      >
        <Text style={c ? styles.done : styles.needToDo}>{c}</Text>
      </TouchableOpacity>
    );
  });

  /* const renderChores = [];
  for (let key in chore) {
    renderChores.push(
      <TouchableOpacity
        key={key}
        onPress={() => {
          handlePress(key);
        }}
      >
        <Text style={chore[key] ? styles.done : styles.needToDo}>{key}</Text>
      </TouchableOpacity>
    );
  } */

  return <View>{renderChores}</View>;
};

export default Home;

const styles = StyleSheet.create({
  needToDo: {
    color: "red",
  },
  done: {
    color: "green",
  },
});

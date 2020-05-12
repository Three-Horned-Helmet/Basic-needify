import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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

  return <View style={styles.container}>{renderChores}</View>;
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

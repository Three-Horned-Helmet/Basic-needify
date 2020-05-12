import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = () => {
  const [chore, setChore] = useState({
    drink: false,
    sleep: false,
    air: false,
    walk: false,
  });

  const handlePress = (key) => {
    setChore({
      ...chore,
      [key]: !chore[key],
    });
  };

  const renderChores = [];
  for (let key in chore) {
    renderChores.push(
      <TouchableOpacity
        key={key}
        onPress={() => {
          handlePress(key);
        }}
      >
        <Text style={chore[key] ? styles.done : styles.needToDo}>
          {key[0].toLocaleUpperCase() + key.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  }
  return <View style={styles.container}>{renderChores}</View>;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  needToDo: {
    color: "red",
    fontSize: 20,
  },
  done: {
    color: "green",
    fontSize: 20,
  },
});

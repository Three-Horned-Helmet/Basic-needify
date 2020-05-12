import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = () => {
  const [chore, setChore] = useState({
    drink: false,
    sleep: false,
    air: false,
    walk: false,
    tidyRoom: false,
    shower: false,
    food: false,
    cleanClothes: false,
    Stretch: false,
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
        <Text
          style={[chore[key] ? styles.done : styles.needToDo, styles.choreText]}
        >
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

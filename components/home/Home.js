import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Moment from 'react-moment';

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
  let today = currentDate.toDateString();

  


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
    <div>
      <div style={{textAlign: "center"}}>{today}</div>
    
    <View style={styles.container}>
      {renderChores}</View>)
      </div>
  )
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

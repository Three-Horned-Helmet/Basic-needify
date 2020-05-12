import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box';


const Home = () => {
  const [chore, setChore] = useState({
    Drink: false,
    Sleep: false,
    Air: false,
    Walk: false,
    "Tidy room": false,
    Shower: false,
    Food: false,
    "Clean clothes": false,
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
      <View style={styles.container}>
        <View>
        {renderChores}
        <CheckBox 
              leftText={"Drink"}
              onClick = { () => {
                console.log("Pressed");
              }}
              isChecked={chore.Drink}
        />
        </View>
      </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
    },
  choreText: {
    textAlign: "center",
    flexDirection: "column",
    fontSize: 20
  },
  needToDo: {
    color: "red",
  },
  done: {
    color: "green",
  },
});

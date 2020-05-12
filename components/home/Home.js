import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FireworksGif from "./fireworks/FireworksGif";
import CheckBox from "react-native-check-box";

const Home = () => {
  const [chore, setChore] = useState({
    Drink: { state: false, prio: 1 },
    Sleep: { state: false, prio: 2 },
    Air: { state: false, prio: 3 },
    Walk: { state: false, prio: 4 },
    "Tidy room": { state: false, prio: 5 },
    Shower: { state: false, prio: 6 },
    Food: { state: false, prio: 7 },
    "Clean clothes": { state: false, prio: 8 },
    Stretch: { state: false, prio: 9 },
  });
  const [statusImage, setStatusImage] = useState({
    mood: require("../../assets/statusImages/0.png"),
  });

  const handlePress = (key) => {
    changeStatusImage(chore[key].state);
    setChore({
      ...chore,
      [key]: { ...chore[key], state: !chore[key].state },
    });
  };
  const changeStatusImage = (chore) => {
    // fail-safe so user doesn't get bonus image when toggling task back to undone
    if (chore) {
      return;
    }

    // this could be done prettier somehow
    const imagesMoodPath = [
      require(`../../assets/statusImages/0.png`),
      require(`../../assets/statusImages/1.png`),
      require(`../../assets/statusImages/2.png`),
      require(`../../assets/statusImages/3.png`),
      require(`../../assets/statusImages/4.png`),
      require(`../../assets/statusImages/5.png`),
    ];

    const randomImage =
      imagesMoodPath[Math.floor(Math.random() * imagesMoodPath.length)];
    setStatusImage({
      mood: randomImage,
    });
    setTimeout(() => {
      // resets mood back to normal
      setStatusImage({
        mood: require(`../../assets/statusImages/0.png`),
      });
    }, 2000);
  };

  let currentDate = new Date();
  let today = currentDate.toDateString();

  const renderChores = Object.keys(chore)
    .sort((a, b) => chore[a].prio - chore[b].prio)
    .map((ele) => {
      return (
        <TouchableOpacity
          key={ele}
          onPress={() => {
            handlePress(ele);
          }}
        >
          <Text
            style={[
              chore[ele].state ? styles.done : styles.needToDo,
              styles.choreText,
            ]}
          >
            {ele}
          </Text>
          <CheckBox onClick={() => {}} isChecked={chore[ele].state} />
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.container}>
      <Text>{today}</Text>
      <View>{renderChores}</View>
      <View>
        <FireworksGif />
      </View>
      <Image style={styles.statusImage} source={statusImage.mood} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    marginTop: 30,
  },
  statusImage: {
    position: "absolute",
    top: -25,
    right: 5,
    width: 66,
    height: 100,
  },
  choreText: {
    textAlign: "center",
    flexDirection: "column",
    fontSize: 20,
  },
  needToDo: {
    color: "red",
  },
  done: {
    color: "green",
  },
});

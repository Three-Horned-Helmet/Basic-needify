import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FireworksGif from "./fireworks/FireworksGif";
import CheckBox from "react-native-check-box";

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
  const [statusImage, setStatusImage] = useState({
    mood: require("../../assets/statusImages/0.png"),
  });

  const handlePress = (key) => {
    changeStatusImage(chore[key]);
    setChore({
      ...chore,
      [key]: !chore[key],
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
        <CheckBox onClick={() => {}} isChecked={chore[key]} />
      </TouchableOpacity>
    );
  }

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

import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import FireworksGif from "./fireworks/FireworksGif";
import CheckBox from "react-native-check-box";
import Addtask from "./add-task/Addtask"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Home = () => {
  const originalChores = {
    Drink: { state: false, prio: 1 },
    Sleep: { state: false, prio: 2 },
    Air: { state: false, prio: 3 },
    Walk: { state: false, prio: 4 },
    "Tidy room": { state: false, prio: 5 },
    Shower: { state: false, prio: 6 },
    Food: { state: false, prio: 7 },
    "Clean clothes": { state: false, prio: 8 },
    Stretch: { state: false, prio: 9 },
  }

  const [chore, setChore] = useState(originalChores);
  const [statusImage, setStatusImage] = useState({
    mood: require("../../assets/statusImages/0.png"),
  });

  const mounting = async () => {
    try {
      const allTasks = await AsyncStorage.getItem("tasks")
      console.log("ALL TASKS ON MOUNT", allTasks)
      if(allTasks){
        setChore({
          ...JSON.parse(allTasks)
        })
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    mounting()
  }, [])

  const handlePress = async (key) => {
    changeStatusImage(chore[key].state);
    const newState = !chore[key].state
    setChore({
      ...chore,
      [key]: { ...chore[key], state: newState },
    });

    try {
      const storedTasksObj = {
        ...chore,
        [key]: { ...chore[key], state: newState },
      }
      AsyncStorage.setItem("tasks" , JSON.stringify(storedTasksObj))
    } catch (error) {
      console.error(error)
    }
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

  const addNewChore = async (input) => {
    setChore({
      ...chore,
      [input]: { state: false, prio: Object.keys(chore).length + 1 }
    })

    try {
      const storedTasks = await AsyncStorage.getItem("tasks")
      if(storedTasks){
        const storedTasksObj = {...JSON.parse(storedTasks), [input]: { state: false, prio: Object.keys(chore).length +1 }}
        await AsyncStorage.setItem(
          "tasks",
          JSON.stringify(storedTasksObj)
        )
      } else {
        await AsyncStorage.setItem(
          "tasks",
          JSON.stringify({...chore, [input]: { state: false, prio: Object.keys(chore).length } })
        )
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  const clearChores = () => {
    setChore(originalChores)
    AsyncStorage.removeItem("tasks")
  }

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
          <View style={styles.choreContainer}>
            <View>
              <Image
                style={styles.checkbox}
                source={require("../../assets/checkbox/unchecked-checkbox.png")}
              />
              {chore[ele].state ? (
                <Image
                  style={styles.checkMark}
                  source={require("../../assets/checkbox/delete-x.png")}
                />
              ) : (
                <View></View>
              )}
            </View>
            <Text
              style={[
                chore[ele].state ? styles.done : styles.needToDo,
                styles.choreText,
              ]}
            >
              {ele}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/backgrounds/background-1.jpg")}
      >
        <Text>{today}</Text>
        <Addtask addNewChore={addNewChore} />
        <Text style={styles.header}>Basic Needify</Text>
        <ScrollView style={styles.mainChoreContainer}>{renderChores}</ScrollView>
        <View>
          <FireworksGif />
        </View>
        {/* <Image style={styles.statusImage} source={statusImage.mood} /> */}
        <Button 
        title="Clear Needs"
        color="rgb(200, 80, 0)"
        onPress={() => clearChores()}
        />
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
    textDecorationLine: "underline",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
  },
  statusImage: {
    position: "absolute",
    top: -25,
    right: 5,
    width: 66,
    height: 100,
  },
  choreText: {
    flexDirection: "column",
    fontSize: 23,
    textAlignVertical: "center",
  },
  needToDo: {
    color: "white",
  },
  done: {
    color: "green",
  },
  checkbox: {
    height: 25,
    width: 25,
    marginRight: 5,
    marginTop: "auto",
    marginBottom: "auto",
  },
  checkMark: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  choreContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  mainChoreContainer: {
    marginRight: "auto",
    marginLeft: "auto",
    flex: 1,
    maxHeight: "70%",
    maxWidth: "80%",
    marginBottom: 10
  },
});

import React, { useState } from "react";
import { View, Image, Text, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Addtask = (props) => {
  const [input, setInput] = useState({
    value: "",
  });

  const handleInput = (newInputVal) => {
    setInput({
      value: newInputVal,
    });
  };

  const handleAddChore = () => {
    setInput({
      value: "",
    });
    props.addNewChore(input.value);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        borderTopColor: "black",
        borderTopWidth: 2,
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <TextInput
        placeholder={"Add another need"}
        placeholderTextColor={"rgb(255, 255, 255)"}
        style={{
          backgroundColor: "transparent",
          textAlign: "center",
        }}
        value={input.value}
        onChangeText={(input) => handleInput(input)}
      />
      {input.value.length > 0 && (
        <TouchableOpacity
          style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
          onPress={() => handleAddChore()}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "rgb(255, 255, 0)",
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Addtask;

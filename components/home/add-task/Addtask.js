import React, { useState } from 'react';
import { View, Image, TextInput, Button } from "react-native";


const Addtask = (props) => {
    const [input, setInput] = useState({
        value: ""
    })

    const handleInput = (newInputVal) => {
        setInput({
            value: newInputVal
        })
    }

    const handleAddChore = () => {
        setInput({
            value: ""
        })
        props.addNewChore(input.value)
    }

    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
        }}>
            <TextInput 
            placeholder={"Add another need"}
            style={{
              backgroundColor: "white",
              width: 170,
              textAlign: "center",
            }}
            value={input.value}
            onChangeText={input => handleInput(input)}
            />
            <Button
                title="Add"
                color="rgb(0, 105, 155)"
                onPress={() => handleAddChore()}
            />
        </View>
    );
};

export default Addtask;
import React, { useState } from "react";
import { View, Image } from "react-native";

const FireworksGif = () => {
  const [counter, setCounter] = useState({
    count: 10,
  });

  const imageArray = [
    require("../../../assets/fireworks/frame_00_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_01_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_02_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_03_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_04_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_05_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_06_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_07_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_08_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_09_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_10_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_11_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_12_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_13_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_14_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_15_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_16_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_17_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_18_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_19_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_20_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_21_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_22_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_23_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_24_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_25_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_26_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_27_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_28_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_29_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_30_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_31_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_32_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_33_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_34_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_35_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_36_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_37_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_38_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_39_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_40_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_41_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_42_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_43_delay-0.06s.gif"),
    require("../../../assets/fireworks/frame_44_delay-0.06s.gif"),
  ];

  const imageString = imageArray[counter.count];

  setTimeout(() => {
    setCounter({ count: (counter.count + 1) % imageArray.length });
  }, 200);

  return (
    <View>
      {/* <Image
          source={imageString}
          style={{
            width: 100,
            height: 100,
          }}
        /> */}
    </View>
  );
};

export default FireworksGif;

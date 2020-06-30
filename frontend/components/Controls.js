import React, { useContext } from "react";
import { View } from "react-native";
import Styles from "../Styles";
import Button from "./Button";
import { ConfigContext } from "../contexts/ConfigContext";

const Controls = () => {
  const { calculateBills } = useContext(ConfigContext);
  return (
    <ConfigContext.Provider>
      <View style={Styles.controls}>
        <Button
          text="Hitung"
          style={Styles.buttonPrimary}
          onPress={calculateBills}
        />
        <Button
          text="Ulang"
          style={Styles.buttonReset}
          onPress={() => {
            alert("Ulang coy!");
          }}
        />
      </View>
    </ConfigContext.Provider>
  );
};

export default Controls;

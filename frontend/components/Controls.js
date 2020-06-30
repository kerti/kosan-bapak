import React, { useContext } from "react";
import { View } from "react-native";
import Styles from "../Styles";
import Button from "./Button";
import { ConfigContext } from "../contexts/ConfigContext";

const Controls = () => {
  const { pricePerKwh, incrementPrice, calculateBills } = useContext(
    ConfigContext
  );
  const sayPrice = () => {
    alert(pricePerKwh);
  };
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
          style={Styles.buttonPrimary}
          onPress={() => {
            alert("Ulang coy!");
          }}
        />
        <Button
          text="Tambah Harga"
          style={Styles.buttonReset}
          onPress={incrementPrice}
        />
      </View>
    </ConfigContext.Provider>
  );
};

export default Controls;

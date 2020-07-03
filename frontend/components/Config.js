import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ConfigContext } from "../contexts/ConfigContext";
import Styles from "../Styles";

const Config = () => {
  const { pricePerKwh, setPricePerKwh } = useContext(ConfigContext);
  return (
    <>
      <Text style={Styles.sectionHeader}>Setelan</Text>
      <ConfigItem
        name="Harga per kWH"
        placeholder="Harga per kWH"
        initValue={pricePerKwh}
        onChangeText={setPricePerKwh}
      />
    </>
  );
};

const ConfigItem = (props) => {
  const [value, setValue] = useState(props.initValue);
  return (
    <View style={Styles.dataRow}>
      <Text style={Styles.dataRowLabel}>{props.name}</Text>
      <TextInput
        style={Styles.dataRowInput}
        placeholder={props.placeholder}
        value={value}
        onChangeText={(value) => {
          setValue(value);
          props.onChangeText(value);
        }}
      />
    </View>
  );
};

export default Config;

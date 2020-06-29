import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ConfigContext } from "../contexts/ConfigContext";
import Styles from "../styles";

const Config = () => {
  const { pricePerKwh } = useContext(ConfigContext);
  return (
    <ConfigContext.Provider>
      <Text style={Styles.sectionHeader}>Setelan</Text>
      <ConfigItem
        name="Harga per kWH"
        config="pricePerKwh"
        value={pricePerKwh}
      />
    </ConfigContext.Provider>
  );
};

const ConfigItem = (props) => {
  return (
    <View style={Styles.dataRow}>
      <Text style={Styles.dataRowLabel}>{props.name}</Text>
      <TextInput
        style={Styles.dataRowInput}
        value={props.value}
        defaultValue={props.value}
      />
    </View>
  );
};

export default Config;

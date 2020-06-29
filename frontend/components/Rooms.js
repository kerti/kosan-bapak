import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Styles from "../styles";

const Room = (props) => {
  const [kwh, setKwh] = useState("");
  return (
    <View style={Styles.dataRow}>
      <Text style={Styles.dataRowLabel}>Kamar {props.name}</Text>
      <TextInput
        style={Styles.dataRowInput}
        placeholder="Masukkan kWH"
        onChangeText={(kwh) => setKwh(kwh)}
        defaultValue={kwh}
      />
    </View>
  );
};

const RoomList = (props) => {
  return (
    <>
      <Text style={Styles.sectionHeader}>Lantai {props.floor}</Text>
      <Room name="1" />
      <Room name="2" />
      <Room name="3" />
    </>
  );
};

export default RoomList;

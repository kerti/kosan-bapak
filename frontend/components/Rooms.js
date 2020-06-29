import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ConfigContext } from "../contexts/ConfigContext";
import Styles from "../Styles";

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
  const { layout } = useContext(ConfigContext);
  const flObj = layout.find((floor) => {
    return floor.floorNum === props.floor;
  });
  return (
    <>
      <Text style={Styles.sectionHeader}>Lantai {flObj.floorNum}</Text>
      {flObj.rooms.map((fl) => {
        return <Room key={fl.name} name={fl.name} />;
      })}
    </>
  );
};

export default RoomList;

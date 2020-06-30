import React, { useContext, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ConfigContext } from "../contexts/ConfigContext";
import Styles from "../Styles";

const Room = (props) => {
  const { layout, updateKwh } = useContext(ConfigContext);
  const flObj = layout.find((floor) => {
    return floor.floorNum === props.floor;
  });
  const roomObj = flObj.rooms.find((room) => {
    return room.name === props.name;
  });
  let initKwh = roomObj.kwh;
  const [kwh, setKwh] = useState(initKwh);
  return (
    <View style={Styles.dataRow}>
      <Text style={Styles.dataRowLabel}>Kamar {props.name}</Text>
      <TextInput
        style={Styles.dataRowInput}
        placeholder="Masukkan kWH"
        value={kwh}
        onChangeText={(kwh) => {
          setKwh(kwh);
          updateKwh(props.floor, props.name, kwh);
        }}
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
      {flObj.rooms.map((room) => {
        return <Room floor={flObj.floorNum} key={room.name} name={room.name} />;
      })}
    </>
  );
};

export default RoomList;

import React, { useContext } from "react";
import { View, Text } from "react-native";
import Styles from "../Styles";
import { ConfigContext } from "../contexts/ConfigContext";

const ResultRow = (props) => {
  // const { layout } = useContext(ConfigContext);
  return (
    <View style={Styles.dataRow}>
      <Text style={Styles.dataRowLabel}>Kamar {props.name}</Text>
      <Text style={Styles.dataRowLabel}>{props.value}</Text>
    </View>
  );
};

const ResultList = (props) => {
  const { layout } = useContext(ConfigContext);
  const flObj = layout.find((floor) => {
    return floor.floorNum === props.floor;
  });
  return (
    <>
      <Text style={Styles.sectionHeader}>Lantai {flObj.floorNum}</Text>
      {flObj.rooms.map((room) => {
        return <ResultRow key={room.name} name={room.name} value={room.bill} />;
      })}
    </>
  );
};

export default ResultList;

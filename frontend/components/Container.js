import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Styles from "../Styles";
import Config from "./Config";
import Controls from "./Controls";
import ResultList from "./Results";
import RoomList from "./Rooms";
import { ConfigContext } from "../contexts/ConfigContext";

const Container = () => {
  const { layout } = useContext(ConfigContext);
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        {layout.map((floor) => {
          return <RoomList key={floor.floorNum} floor={floor.floorNum} />;
        })}
        <Config />
        <Controls />
        {layout.map((floor) => {
          return <ResultList key={floor.floorNum} floor={floor.floorNum} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;

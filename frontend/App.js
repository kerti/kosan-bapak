import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Config from "./components/Config";
import Controls from "./components/Controls";
import RoomList from "./components/Rooms";
import ConfigContextProvider from "./contexts/ConfigContext";
import Styles from "./styles";

export default function App() {
  return (
    <ConfigContextProvider>
      <SafeAreaView style={Styles.container}>
        <ScrollView style={Styles.scrollView}>
          <RoomList floor={1} />
          <RoomList floor={2} />
          <Config />
          <Controls />
        </ScrollView>
      </SafeAreaView>
    </ConfigContextProvider>
  );
}

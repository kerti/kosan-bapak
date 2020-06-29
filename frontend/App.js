import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Room(props) {
  const [kwh, setKwh] = useState("");
  return (
    <View style={styles.dataRow}>
      <Text style={styles.dataRowLabel}>Kamar {props.name}</Text>
      <TextInput
        style={styles.dataRowInput}
        placeholder="Masukkan kWH"
        onChangeText={(kwh) => setKwh(kwh)}
        defaultValue={kwh}
      />
    </View>
  );
}

function RoomList(props) {
  return (
    <>
      <Text style={styles.sectionHeader}>Lantai {props.floor}</Text>
      <Room name="1" />
      <Room name="2" />
      <Room name="3" />
    </>
  );
}

function ConfigItem(props) {
  const [value, setValue] = useState("");
  return (
    <View style={styles.dataRow}>
      <Text style={styles.dataRowLabel}>{props.name}</Text>
      <TextInput
        style={styles.dataRowInput}
        onChangeText={(value) => setValue(value)}
        defaultValue={props.defaultValue}
      />
    </View>
  );
}

function Config(props) {
  return (
    <>
      <Text style={styles.sectionHeader}>Setelan</Text>
      <ConfigItem name="Harga per kWH" defaultValue="2000" />
      <ConfigItem name="Test" defaultValue="TestValue" />
    </>
  );
}

function Buttons() {
  return (
    <View style={styles.controls}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => {
            alert("StatusBar.currentHeight: " + StatusBar.currentHeight);
          }}
        >
          <Text style={styles.buttonText}>Hitung</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonReset]}
          onPress={() => {
            alert("Ulang coy!");
          }}
        >
          <Text style={styles.buttonText}>Ulang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <RoomList floor={1} />
        <RoomList floor={2} />
        <Config />
        <Buttons />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    borderRadius: 7,
    padding: 15,
  },
  buttonContainer: {
    padding: 5,
  },
  buttonPrimary: {
    backgroundColor: "darkblue",
  },
  buttonReset: {
    backgroundColor: "darkred",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  dataRow: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
  },
  dataRowLabel: {
    backgroundColor: "lightgrey",
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  dataRowInput: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderTopColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    flex: 2,
    fontSize: 18,
    padding: 5,
  },
  container: {
    alignItems: "stretch",
    backgroundColor: Platform.OS === "android" ? "white" : "black",
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  controls: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  sectionHeader: {
    backgroundColor: "maroon",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    padding: 7,
  },
  scrollView: {
    backgroundColor: "white",
  },
});

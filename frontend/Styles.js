import { Platform, StatusBar, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
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
    fontSize: 16,
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
    fontSize: 14,
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
    fontSize: 16,
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
    fontSize: 14,
    fontWeight: "bold",
    padding: 7,
  },
  scrollView: {
    backgroundColor: "white",
  },
});

export default Styles;

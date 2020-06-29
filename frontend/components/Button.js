import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "../Styles";

const Button = (props) => {
  return (
    <View style={Styles.buttonContainer}>
      <TouchableOpacity
        style={[Styles.button, props.style]}
        onPress={props.onPress}
      >
        <Text style={Styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
